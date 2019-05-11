import Vue from 'vue'
import App from './App.vue'

import router from './router'

import Eagle, { Options, Modal, CodeBlock } from 'eagle.js'

import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
import 'eagle.js/dist/eagle.css'
import 'animate.css'

Vue.config.productionTip = false
Vue.use(Eagle)
hljs.registerLanguage('javascript', javascript)
Options.hljs = hljs

Vue.component(CodeBlock.name, CodeBlock)
Vue.component(Modal.name, Modal)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
