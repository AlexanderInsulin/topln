const createWebSocketPlugin = (socket) => {
  return store => {
    socket.onmessage = (event) => store.commit('comments/deleteComment', event.data)
    store.subscribeAction((action, state) => {
      switch (action.type) {
        case 'comments/deleteComment':
          socket.send(action.payload)
          break
        default:
          break
      }
    })
  }
}

export default createWebSocketPlugin
