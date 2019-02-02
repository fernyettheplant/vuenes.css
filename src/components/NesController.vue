<template>
  <li :class="controllerClasses" />
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
      validate (input) {
        return ['nes', 'snes'].includes(input)
      }
    },
    jp: Boolean
  },
  computed: {
    controllerClasses () {
      const cssClass = `${this.type}-${this.jp ? 'jp-' : ''}logo`

      return {
        [cssClass]: true
      }
    }
  }
}
</script>
