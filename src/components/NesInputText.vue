<template>
  <div
    :class="{'is-inline': inline}"
    class="nes-field"
  >
    <label
      v-if="label"
      :for="id"
    >
      {{ label }}
    </label>
    <input
      :id="id"
      v-model="inputValue"
      type="text"
      :class="inputClasses"
      class="nes-input"
      :placeholder="placeholder"
      @input="emitInput"
    >
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: () => ''
    },
    placeholder: {
      type: String,
      default: () => ''
    },
    initValue: {
      type: String,
      default: () => ''
    },
    inline: Boolean,
    success: Boolean,
    warning: Boolean,
    error: Boolean
  },
  data () {
    return {
      inputValue: this.initValue
    }
  },
  computed: {
    inputClasses () {
      return {
        'is-success': this.success,
        'is-warning': this.warning,
        'is-error': this.error
      }
    }
  },
  methods: {
    emitInput () {
      this.$emit('input', this.inputValue)
    }
  }
}
</script>

<style lang="scss">
@import "~typeface-press-start-2p/index.css";
@import "~nes.css/scss/base/index";
@import "~nes.css/scss/form/inputs";
</style>
