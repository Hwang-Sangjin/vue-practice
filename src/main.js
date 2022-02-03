import { createApp } from "vue"
import App from "./App"
import router from './routes/index.js'
import Store from './store/index.js'
import loadImage from './plugins/loadImage'


createApp(App)
    .use(router)
    .use(Store)
    .use(loadImage)
    .mount("#app")