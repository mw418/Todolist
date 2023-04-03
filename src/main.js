import Vue from 'vue'
import app from "./App.vue"

Vue.config.productionTip = false

// import plugins from './plugins.js'

// Vue.use(plugins)

new Vue({
    el: '#app',
    render: p => p(app)
})

