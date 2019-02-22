<template>
  <label>
    <input
      type="checkbox"
      class="nes-checkbox"
      :class="checkboxClasses"
      :checked="checked"
      @click="click"
    >
    <span>
      <!-- Default Slot used for the Inside content of the Checkbox -->
      <slot />
    </span>
  </label>
</template>

<script>
/**
 * Vue Component implementation of the Nes Checkbox
 * @author Jesus Fernando Alvarez Franco
 * @license MIT
 */
export default {
  props: {
    /**
     * Define if the checkbox is checked on init
     * @default false
     */
    checked: {
      type: Boolean,
      default: false
    },
    /**
     * Define if the checkbox is dark. Will use the `is-dark` class
     * @default false
     */
    dark: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    /**
     * Computed Property that uses the checkbox classes depending of the props used.
     * @returns {{'is-dark': BooleanConstructor}}
     */
    checkboxClasses () {
      return {
        'is-dark': this.dark
      }
    }
  },
  methods: {
    /**
     * Method that emits the `select` event
     */
    click () {
      /**
       * Fired when someone selects the checkbox
       */
      this.$emit('select')
    }
  }
}
</script>
