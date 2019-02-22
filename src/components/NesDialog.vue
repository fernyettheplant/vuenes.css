<template>
  <dialog
    :class="dialogClasses"
    class="nes-dialog"
    :open="openCloseToggle"
  >
    <!-- Slot used for the Dialog Content -->
    <slot />
  </dialog>
</template>

<script>
/**
 * Vue Component implementation of the Nes Dialog
 * @author Jesus Fernando Alvarez Franco
 * @license MIT
 */
export default {
  props: {
    /**
     * Define if the dialog has rounded corners. Will use the `is-rounded` class
     * @default false
     */
    rounded: Boolean,
    /**
     * Define if the dialog is dark. Will use the `is-dark` class
     * @default false
     */
    dark: Boolean,
    /**
     * Define when the dialog is going to be opened. Will use the native open dialog property
     * @default false
     */
    open: Boolean
  },
  computed: {
    /**
     * Computed Property that uses the container classes depending of the props used.
     * @returns {{'is-rounded': BooleanConstructor, 'is-dark': BooleanConstructor}}
     */
    dialogClasses () {
      return {
        'is-rounded': this.rounded,
        'is-dark': this.dark
      }
    },
    openCloseToggle: {
      get () {
        return this.open
      },
      set (value) {
        this.$emit('update:open', value)
      }
    }
  }
}
</script>
