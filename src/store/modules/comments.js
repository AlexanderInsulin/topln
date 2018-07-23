const genComment = (id, text) => (
  {id, text, deleting: false}
)

const initialState = {
  comments: [
    genComment(1, 'qwer'),
    genComment(2, 'asdf'),
    genComment(3, 'zcxv'),
    genComment(4, 'tyui'),
    genComment(5, 'iop'),
    genComment(6, 'jkl'),
    genComment(7, 'nm,'),
    genComment(8, '123'),
    genComment(9, '980'),
    genComment(10, '000')
  ]
}

const actions = {
  deleteComment: (context, id) => {
    context.commit('deleteCommentRequest', id)
    setTimeout(() => context.commit('deleteCommentFailed', id), 5000)
  }
}

const mutations = {
  deleteCommentRequest: (state, id) => {
    state.comments.find(comment => comment.id === id).deleting = true
  },
  deleteCommentFailed: (state, id) => {
    state.comments.find(comment => comment.id === id).deleting = false
  },
  deleteComment: (state, id) => {
    let comment = state.comments.find(comment => comment.id == id)
    if (comment && comment.deleting) {
      state.comments = state.comments.filter(comment => comment.id != id)
    }
  }
}

export default {
  state: initialState,
  namespaced: true,
  actions,
  mutations
}
