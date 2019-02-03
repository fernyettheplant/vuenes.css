<template>
  <li
    :class="iconClasses"
    class="nes-icon"
  />
</template>

<script>
/**
 * Vue Component implementation of the Nes Icons
 * @author Jesus Fernando Alvarez Franco
 * @license MIT
 */
export default {
  props: {
    /**
     * Define the type of icon to be used
     */
    name: {
      type: String,
      required: true
    },
    /**
     * Defines if the icon is small by using the `is-small` css class
     * @default false
     */
    small: Boolean,
    /**
     * Defines if the icon is medium by using the `is-medium` css class
     * @default false
     */
    medium: Boolean,
    /**
     * Defines if the icon is large by using the `is-large` css class
     * @default false
     */
    large: Boolean,
    /**
     * Defines if the icon is empty by using the `is-empty` css class
     * @default false
     */
    empty: Boolean,
    /**
     * Defines if the icon is half by using the `is-half` css class
     * @default false
     */
    half: Boolean
  },
  computed: {
    /**
     * Calculate the css classes to be used for the icon depending of the props
     * @returns {{'is-half': BooleanConstructor, 'is-medium': BooleanConstructor, 'is-large': BooleanConstructor, 'is-small': BooleanConstructor, 'is-empty': BooleanConstructor}}
     */
    iconClasses () {
      return {
        [this.name]: true,
        'is-small': this.small,
        'is-medium': this.medium,
        'is-large': this.large,
        'is-empty': this.empty,
        'is-half': this.half
      }
    }
  }
}
</script>
