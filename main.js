const { app, BrowserWindow } = require('electron');

function createWindow() {
    let win = new BrowserWindow({
        width: 500,
        height: 1000,
        webPreferences: {
            nodeIntegration: true
        },
        title: "Google Messages",
        icon: "./resources/app/icon.png"
    })

    win.setMenuBarVisibility(false);

    win.loadURL('https://messages.google.com/web')
}

app.whenReady().then(createWindow)
