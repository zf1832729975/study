const {app, BrowserWindow} = require('electron')
const path = require('path')

let mainWindow 


function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // webPreferences: {
    //   preload: path.join(__dirname, '')
    // }
  })

  mainWindow.loadFile('index.html')

  mainWindow.on('closee', function  ( ) {
    mainWindow = null 
  })

}


app.on('ready', createWindow())

app.on('window-all-closed', function  ( ) {
  // on macOS
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function  ( ) {
  // on macOS
  if (mainWindow === null) createWindow()
})

