<template>
    <div>
        <input type="text"
            v-numbers
            :value="text"
            @filtered="text=$event.detail"
        >
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import numbers from '../directives/onlyNumbers'

export default {
  directives: {
    numbers
  },
  data: () => ({
    text: ''
  }),
  name: 'first',
  computed: mapState('calculator', [
    'fractions', 'operators'
  ]),
  methods: mapActions('calculator', [
    'addFraction', 'updateFraction'
  ])

}
</script>
