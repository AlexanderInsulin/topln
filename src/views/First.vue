<template>
    <div>
        <button @click="addFraction">add</button>
        <button @click="calculate">calc</button>
        <div class="first__container__fraction-container">
            <div
                class="first__container__fraction-container__group"
                v-for="(fraction, index) in fractions"
                :key="index"
            >
                <fraction
                    :value="fraction"
                    @updateFraction="updateFraction({index, data: $event})"
                />
                <operator
                    v-if="operators[index] != undefined"
                    :value="operators[index]"
                    @updateOperator="updateOperator({index, data: $event})"
                />
            </div>

        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Fraction from '@/components/Fraction'
import Operator from '../components/Operator'

export default {
  components: {
    Fraction, Operator
  },
  data: () => ({
    text: ''
  }),
  name: 'first',
  computed: mapState('calculator', [
    'fractions', 'operators'
  ]),
  methods: mapActions('calculator', [
    'addFraction', 'updateFraction', 'updateOperator', 'calculate'
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
            flex-wrap: wrap;

            &__group {
                display: flex;
                justify-content: center;
                align-content: center;
            }
        }
    }
</style>
