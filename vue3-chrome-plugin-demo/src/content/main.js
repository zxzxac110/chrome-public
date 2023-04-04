import { createApp } from 'vue'
import app from './components/app.vue'
joinContent(app)
injectJsInsert()
function joinContent(element) {
  const div = document.createElement('div')
  div.id = 'joinContentApp'
  document.body.appendChild(div)
  console.log(div)
  createApp(element).mount('#joinContentApp')
}
//chrome的API接口,用于传输或监听数据信号
chrome.runtime.onMessage.addListener(function (
  // eslint-disable-next-line
  message, sender, sendResponse
) {
  console.log(message)
  sendResponse()
}
)
function injectJsInsert() {
  console.log('injectJsInsert')
  document.addEventListener('readystatechange', () => {
    const injectPath = 'js/inject.js'
    const script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.src = chrome.runtime.getURL(injectPath)
    document.body.appendChild(script)
  })
}
