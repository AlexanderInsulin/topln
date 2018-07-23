import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import websocketPlugin from './plugins/websocketPlugin'
Vue.use(Vuex)

const socketPlugin = websocketPlugin(new WebSocket('wss://echo.websocket.org'))

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules,
  plugins: [ socketPlugin ]
})
