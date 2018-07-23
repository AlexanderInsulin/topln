<template>
  <div>
    <comment
      v-for="comment in comments"
      :key="comment.id"
      :value="comment"
      @deleteComment="deleteComment($event)"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Comment from '@/components/Comment'
export default {
  components: {
    Comment
  },
  computed: mapState('comments', [
    'comments'
  ]),
  methods: mapActions('comments', [
    'deleteComment'
  ])
}
</script>
