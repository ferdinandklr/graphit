/*
  This file controls how to window should be created,
  and how it should behave afterwards
*/

import { app, protocol, BrowserWindow, ipcMain } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'


// keep a global reference of the window object
let win

// scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'graphit', privileges: { secure: true, standard: true } }
])

// define how any window should be created
function createWindow() {

  // create the browser window
  win = new BrowserWindow({
    width: 1250,
    height: 800,
    minWidth: 700,
    minHeight: 500,
    webPreferences: {
      nodeIntegration: true,
      devtools: isDevelopment
    },
    useContentSize: true,
    show: false,
    frame: false
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('graphit')
    // load the index.html when not in development
    win.loadURL('graphit://./index.html')
  }

  win.on('closed', () => {
    win = null
  })

  win.on('ready-to-show', () => {
    win.show()
  })
}

// quit when all windows are closed (except on macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// macOS related code
app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

// executed once electron is ready to start
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow()
})

// return app version number when asked
ipcMain.on('get-version-number', (e) => {
  e.returnValue = process.env.npm_package_version
})
