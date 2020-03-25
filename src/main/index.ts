import { app } from 'electron'

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') { // for mac os
    app.quit()
  }
})

// Load MainWindow
require('./mainWindow')
