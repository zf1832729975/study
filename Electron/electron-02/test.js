// 主进程

// 引入electron模块
const electron = require('electron')

// 应用electron的实例
const app = electron.app

// 创建electron browserWindow
const BrowserWindow = electron.BrowserWindow

// 保存浏览器窗口
var win = null

app.on('ready', () => {
  // 创建browser的实例
  win = new BrowserWindow({ width: 400, height: 400 })

  // 加载html
  win.loadFile('index.html')

  // 监听窗口关闭
  win.on('closed', () => {
    win = null
  })
})
