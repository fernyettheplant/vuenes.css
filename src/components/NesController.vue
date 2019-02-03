<template>
  <li :class="controllerClasses" />
</template>

<script>
/**
 * Vue Component implementation of the Nes Controller
 * @author Jesus Fernando Alvarez Franco
 * @license MIT
 */
export default {
  props: {
    type: {
      /**
       * Define the type of controller. It must be `nes` or `snes`
       */
      type: String,
      required: true,
      validate (input) {
        return ['nes', 'snes'].includes(input)
      }
    },
    /**
     * Define if the controller is the japanese one
     */
    jp: Boolean
  },
  computed: {
    /**
     * Calculates the class to be used for the controlled depending of the props
     * @returns {{[p: string]: boolean}}
     */
    controllerClasses () {
      const cssClass = `${this.type}-${this.jp ? 'jp-' : ''}logo`

      return {
        [cssClass]: true
      }
    }
  }
}
</script>
