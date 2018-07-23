<template>
    <div class="comment">
        <div>{{value.text}}</div>
        <a @click="deleteComment">{{linkText}}</a>
    </div>
</template>

<script>
/**
 * Компонент комментария с возможностью удаления
 */
export default {
  props: {
    value: {
      type: Object,
      default: () => ({id: 0, text: '', deleting: false})
    }
  },
  computed: {
    linkText () {
      return this.value.deleting ? '...' : '(удалить)'
    }
  },
  methods: {
    /**
     * Эвент удаления комментария
     *
     * @event deleteComment
     * @type {Number} id комментария
     */
    deleteComment () {
      this.$emit('deleteComment', this.value.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.comment {
    display: flex;
    justify-content: center;
}
</style>
