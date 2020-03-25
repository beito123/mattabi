import * as fs from 'fs'
import * as path from 'path'
import { app } from 'electron'
import * as electronDebug from 'electron-debug'
import * as mainWinHandler from './mainWindow'
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true'

electronDebug({
  showDevTools: false,
  devToolsMode: 'right'
})

// work around https://github.com/MarshallOfSound/electron-devtools-installer/issues/122
// which seems to be a result of https://github.com/electron/electron/issues/19468
if (process.platform === 'win32') {
  const appUserDataPath = app.getPath('userData')
  const devToolsExtensionsPath = path.join(appUserDataPath, 'DevTools Extensions')
  try {
    fs.unlinkSync(devToolsExtensionsPath)
  } catch (_) {
    // don't complain if the file doesn't exist
  }
}

mainWinHandler.winHandler.onCreated(browserWindow => {
  browserWindow.webContents.openDevTools()
})

require('./index')
