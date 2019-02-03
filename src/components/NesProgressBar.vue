<template>
  <progress
    class="nes-progress"
    :class="progressBarClasses"
    :value="value"
    :max="max"
  />
</template>

<script>
/**
 * Vue Component implementation of the Nes Progress Bar
 * @author Jesus Fernando Alvarez Franco
 * @license MIT
 */
export default {
  props: {
    /**
     * Define the current value of the progress bar
     * @default 0
     */
    value: {
      type: Number,
      default: 0
    },
    /**
     * Define the max value of the progress bar
     * @default 1.0
     */
    max: {
      type: Number,
      default: 1.0
    },
    /**
     * Define if the progress bar is using the `is-primary` css class
     * @default false
     */
    primary: Boolean,
    /**
     * Define if the progress bar is using the `is-success` css class
     * @default false
     */
    success: Boolean,
    /**
     * Define if the progress bar is using the `is-warning` css class
     * @default false
     */
    warning: Boolean,
    /**
     * Define if the progress bar is using the `is-error` css class
     * @default false
     */
    error: Boolean,
    /**
     * Define if the progress bar is using the `is-pattern` css class
     * @default false
     */
    pattern: Boolean
  },
  computed: {
    /**
     * Computed Property that calculate the css classes depending of the props used.
     * @returns {{'is-primary': BooleanConstructor, 'is-error': BooleanConstructor, 'is-pattern': BooleanConstructor, 'is-success': BooleanConstructor, 'is-warning': BooleanConstructor}}
     */
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
