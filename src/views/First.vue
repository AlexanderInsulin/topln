<template>
    <div>1</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'first',
  computed: mapState('calculator', [
    'fractions', 'operators'
  ]),
  methods: mapActions('calculator', [
    'addFraction', 'updateFraction'
  ])
}
</script>
