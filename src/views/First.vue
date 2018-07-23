<template>
    <div>
        <button @click="addFraction">add</button>
        <div class="first__container__fraction-container">
            <fraction
                v-for="(fraction, index) in fractions"
                :key="index"
                :value="fraction"
                @updateFraction="updateFraction({index, data: $event})"
            />
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Fraction from '@/components/Fraction'

export default {
  components: {
    Fraction
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

<style lang="scss" scoped>
    .first__container {
        display: flex;
        flex-direction: column;

        &__fraction-container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap
        }
    }
</style>
