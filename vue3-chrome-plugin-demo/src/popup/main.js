import { createApp } from 'vue'
import App from './components/app.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)
app.use(ElementPlus, {locale: zhCn})
app.mount('#app')
