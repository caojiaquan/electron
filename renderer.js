// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
let myNotification = new Notification('新版本！！！', {
  body: '有新版本，正在更新中。。。'
})

myNotification.onclick = () => {
  console.log('Notification clicked')
}