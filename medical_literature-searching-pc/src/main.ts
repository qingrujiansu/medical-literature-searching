import { createApp } from 'vue'
import pinia from "@/stores/store"
import App from './App.vue'
import router from './router'

import './assets/reset.css'

const app = createApp(App)

//注册icons
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
//使用pdf插件
import VuePdf from 'vue3-pdfjs'
app.use(VuePdf)

app.use(pinia)
app.use(router)

app.mount('#app')
