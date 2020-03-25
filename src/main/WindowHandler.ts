import { EventEmitter } from 'events'
import { BrowserWindow, BrowserWindowConstructorOptions, app } from 'electron'

const isProduction = process.env.NODE_ENV === 'production'

export default class WindowHandler {
    private options : BrowserWindowConstructorOptions = {}
    private browserWindow : BrowserWindow = null

    private _eventEmitter = new EventEmitter()

    constructor (options: BrowserWindowConstructorOptions) {
      this.options = options

      this.__createInstance()
    }

    private __createInstance () {
      app.on('ready', () => {
        this._create()
      })
    }

    private _create () {
      this.browserWindow = new BrowserWindow(
        {
          minHeight: this.options.minHeight + 32, // 32 = header
          show: false,

          ...this.options,
          webPreferences: {
            ...this.options.webPreferences,
            webSecurity: isProduction,
            nodeIntegration: true, //
            devTools: !process.env.SPECTRON
          }
        }
      )

      // Frame less settings
      this.browserWindow.setMenu(null)

      this.browserWindow.on('ready-to-show', () => {
        this.browserWindow.show()
      })

      this.browserWindow.on('closed', () => {
        this.browserWindow = null
      })

      this._eventEmitter.emit('created')
    }

    public onCreated (callback: (...args: any[]) => void) {
      this._eventEmitter.once('created', () => {
        callback(this.browserWindow)
      })
    }
}
