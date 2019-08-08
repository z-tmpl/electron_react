const {app,BrowserWindow}=require('electron')
const path=require('path')
import event from './event.ts'

let win
let url = `file://${path.resolve(__dirname, './index.html')}`

if(process.env.NODE_ENV === 'development'){
  url = 'http://localhost:3000/'
}

function createWindow(){
	win=new BrowserWindow({
		width:800,
    height:600,
    backgroundColor: '#0fff',
    // vibrancy: 'light',
    titleBarStyle: 'hiddenInset',
    // frame: false,
    webPreferences: {
      experimentalFeatures: true
    }
	});

  win.loadURL(url)

  win.webContents.openDevTools()
  
  event()

	win.on('close', ()=> {
		win=null
	})
}

app.on('ready', createWindow)

app.on('window-all-closed',()=>{
	if (process.platform!=='darwin') {
		app.quit();
	}
});

app.on('activate', ()=>{
	if (win===null) {
		createWindow();
	}
});