<template>
    <div>
        <button @click="addFraction">add</button>
        <div class="first__container__fraction-container">
            <div
                class="first__container__fraction-container__group"
                v-for="(expression, index) in expressions"
                :key="index"
            >
                <fraction
                    :value="expression"
                    @updateFraction="updateFraction({index, data: $event})"
                />
                <operator
                    v-if="expression.operator != undefined"
                    :value="expression.operator"
                    @updateOperator="updateOperator({index, data: $event})"
                />
            </div>
            <h1>=</h1>
            <fraction
                :value="value"
                @updateFraction="updateFraction({index, data: $event})"
            />
        </div>
        <h3 class="first__container__error" v-if="error">
            {{ error }}
        </h3>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
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
  computed: {
    ...mapState('calculator', [
      'fractions', 'operators', 'value', 'error'
    ]),
    ...mapGetters('calculator', ['expressions'])
  },
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

        &__error {
            color: #c41a16
        }
    }
</style>
