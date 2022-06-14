import { createApp } from 'vue'
import App from './App2.vue'

import store from "./utils/store/index"
import router from "./utils/router/router"

const _APP_ = createApp(App)

_APP_.use(router) // router
_APP_.use(store) // vuex

_APP_.mount('#app')