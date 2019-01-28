<template>
  <section
    :class="containerClasses"
    class="nes-container"
  >
    <h2
      v-if="title"
      class="title"
    >
      {{ title }}
    </h2>
    <!-- Slot used for the Container Content -->
    <slot />
  </section>
</template>

<script>
/**
 * Vue Component implementation of the Nes Container
 * @author Jesus Fernando Alvarez Franco
 * @license MIT
 */
export default {

  props: {
    title: {
      type: String,
      default: () => ''
    },
    center: Boolean,
    dark: Boolean,
    form: Boolean,
    balloon: Boolean
  },
  computed: {
    containerClasses () {
      return {
        'with-title': !!this.title,
        'is-centered': this.center,
        'is-dark': this.dark,
        'form': this.form,
        'balloon': this.balloon
      }
    }
  }
}
</script>

<style lang="scss">
@import "~typeface-press-start-2p/index.css";
@import "~nes.css/scss/base/index";
@import "~nes.css/scss/elements/containers";
</style>
