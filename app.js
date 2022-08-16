const { app, BrowserWindow } = require('electron');
const { join } = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        resizable: false,
        autoHideMenuBar: true,
        webPreferences: {
            preload: join(__dirname, 'preload.js'),
        }
    });

    win.loadFile('view/index.html');
}

app.on('ready', ev => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0)
            createWindow();
    })
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit();
});