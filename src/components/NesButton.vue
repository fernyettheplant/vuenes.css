<template>
  <button
    class="nes-btn"
    :class="buttonClasses"
    type="button"
    @click="click"
  >
    <!-- Use this slot for the content Inside the button -->
    <slot />
  </button>
</template>

<script>
/**
 * Vue Component implementation of the Nes Button
 * @author Jesus Fernando Alvarez Franco
 * @license MIT
 */
export default {
  props: {
    /**
     * Prop that define if the Button is type Primary. Will use the `is-primary` class
     * @default false
     */
    primary: Boolean,
    /**
     * Prop that define if the Button is type Success. Will use the `is-success` class
     * @default false
     */
    success: Boolean,
    /**
     * Prop that define if the Button is type Warning. Will use the `is-warning` class
     * @default false
     */
    warning: Boolean,
    /**
     * Prop that define if the Button is type Error. Will use the `is-error` class
     * @default false
     */
    error: Boolean,
    /**
     * Prop that define if the Button is type Disabled. Will use the `is-disabled` class and will not trigger the click event
     * @default false
     */
    disabled: Boolean
  },
  computed: {
    /**
     * Computed Property that uses the button classes depending of the props used.
     * @returns {{'is-primary': BooleanConstructor | *, 'is-error': BooleanConstructor | *, 'is-success': BooleanConstructor | *, 'is-disabled': BooleanConstructor | *, 'is-warning': BooleanConstructor | *}}
     */
    buttonClasses () {
      return {
        'is-primary': this.primary,
        'is-success': this.success,
        'is-warning': this.warning,
        'is-error': this.error,
        'is-disabled': this.disabled
      }
    }
  },
  methods: {
    /**
     * Method that emits the click event
     */
    click () {
      /**
       * Fired when a the user clicks the button and the button is not disabled
       */
      if (!this.disabled) {
        this.$emit('click')
      }
    }
  }
}
</script>
