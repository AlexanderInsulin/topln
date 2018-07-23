<template>
    <div class="comment">
        <div>{{value.text}}</div>
        <a @click="deleteComment">{{linkText}}</a>
    </div>
</template>

<script>
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
