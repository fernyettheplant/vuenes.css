<template>
  <img
    :src="src"
    :alt="alt"
    class="nes-avatar"
    :class="nesAvatarClasses"
  >
</template>

<script>
/**
 * Vue Component implementation of the Nes Avatar
 * @author Jesus Fernando Alvarez Franco
 * @license MIT
 */
export default {
  props: {
    /**
     * Define the src link of the image just like `<img>`
     */
    src: {
      type: String,
      required: true
    },
    /**
     * Defines the alt text of the `<img>`
     * @default Empty String
     */
    alt: {
      type: String,
      default: () => ''
    },
    /**
     * Define if the Avatar is small. Will use the `is-small` class
     * @default false
     */
    small: Boolean,
    /**
     * Define if the Avatar is medium. Will use the `is-medium` class
     * @default false
     */
    medium: Boolean,
    /**
     * Define if the Avatar is large. Will use the `is-large` class
     * @default false
     */
    large: Boolean,
    /**
     * Define if the Avatar is rounded. Will use the `is-rounded` class
     * @default false
     */
    rounded: Boolean
  },
  computed: {
    /**
     * Calculate CSS Classes to use depending on which prop you use
     * @returns {{'is-medium': BooleanConstructor, 'is-large': BooleanConstructor, 'is-rounded': BooleanConstructor, 'is-small': BooleanConstructor}}
     */
    nesAvatarClasses () {
      return {
        'is-small': this.small,
        'is-medium': this.medium,
        'is-large': this.large,
        'is-rounded': this.rounded
      }
    }
  }
}
</script>
