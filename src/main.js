import { createApp } from "vue"
import App from "./App"
import router from './routes/index.js'
import Store from './store/index.js'


createApp(App)
    .use(router)
    .use(Store)
    .mount("#app")