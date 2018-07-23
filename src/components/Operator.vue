<template>
    <div class="operator">
        <input
            class="operator__input"
            v-operators
            :value="value"
            @filtered="updateOperator($event)"
        >
    </div>
</template>

<script>
import operators from '../directives/onlyOperators'

export default {
  directives: {
    operators
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    updateOperator (event) {
      this.$emit('updateOperator', event.detail)
    }
  }
}
</script>

<style lang="scss" scoped>
.operator {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: auto;
    margin: 10px;

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
