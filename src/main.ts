import { createApp } from 'vue'

import store from './store'
import router from './router'
import App from './App.vue'

import directives from './directives/index'
import components from './plugins/components'

createApp(App).use(router).use(store).use(directives).use(components).mount('#app')
