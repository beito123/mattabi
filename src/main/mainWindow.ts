import * as path from 'path'
import WindowHandler from './WindowHandler'

const isDev = process.env.NODE_ENV === 'development'

const INDEX_PATH = path.join(__dirname, '..', 'renderer', 'index.html')
const DEV_SERVER_URL = process.env.DEV_SERVER_URL // eslint-disable-line prefer-destructuring

export const winHandler = new WindowHandler({
  minHeight: 580,
  minWidth: 880,

  frame: false
})

winHandler.onCreated(browserWindow => {
  if (isDev) browserWindow.loadURL(DEV_SERVER_URL)
  else browserWindow.loadFile(INDEX_PATH)
})

class MainWindow {
  constructor () {
    //
  }
}
