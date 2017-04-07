const electron = require('electron')
const {app, BrowserWindow} = electron
// lmao 

app.on('ready', () => {
  let win = new BrowserWindow({frame:false, width:800, height:600})
  win.loadURL('http://intuor.net')
})
