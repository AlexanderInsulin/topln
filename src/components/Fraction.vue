<template>
    <div class="fraction">
        <input
            class="fraction__input"
            v-numbers
            :value="value.numerator"
            @filtered="updateNumerator($event)"
        >
        <div class="fraction__divider" />
        <input
            class="fraction__input"
            v-numbers
            :value="value.denominator"
            @filtered="updateDenominator($event)"
        >
    </div>
</template>

<script>
import numbers from '../directives/onlyNumbers'

/**
 * Компонент дроби
 */
export default {
  directives: {
    numbers
  },
  props: {
    value: {
      type: Object,
      default: () => ({ numerator: '', denominator: '' })
    }
  },
  methods: {
    /**
     * Эвент обновления дроби
     * Вызываеться после форматирования
     * @event updateFraction
     * @type {Object} дробь
     */
    updateNumerator (event) {
      this.$emit('updateFraction', {...this.value, numerator: event.detail})
    },
    updateDenominator (event) {
      this.$emit('updateFraction', {...this.value, denominator: event.detail})
    }
  }
}
</script>

<style lang="scss" scoped>
.fraction {
    display: flex;
    flex-direction: column;
    width: auto;
    margin: 10px;

    &__divider {
        width: auto;
        height: 1px;
        background-color: #666;
        margin: 5px 0px 5px 0px;
    }

    &__input {
        min-width: 30px;
        width: auto;
        height: 30px;
        border-radius: 4px;
        border: solid #666 1px;
        outline: none;
        transition: border-color 0.3s;
        text-align: center
    }
}
</style>
