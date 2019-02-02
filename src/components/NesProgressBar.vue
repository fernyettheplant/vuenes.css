<template>
  <progress
    class="nes-progress"
    :class="progressBarClasses"
    :value="value"
    :max="max"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 1.0
    },
    primary: Boolean,
    success: Boolean,
    warning: Boolean,
    error: Boolean,
    pattern: Boolean
  },
  computed: {
    progressBarClasses () {
      return {
        'is-primary': this.primary,
        'is-success': this.success,
        'is-warning': this.warning,
        'is-error': this.error,
        'is-pattern': this.pattern
      }
    }
  }
}
</script>
