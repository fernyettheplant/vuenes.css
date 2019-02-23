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
    /**
     * Defines the title of the container
     * @default Empty String
     */
    title: {
      type: String,
      default: () => ''
    },
    /**
     * Define if the container is centered. Will use the `is-centered` class
     * @default false
     */
    center: Boolean,
    /**
     * Define if the container is dark. Will use the `is-dark` class
     * @default false
     */
    dark: Boolean,
    /**
     * Define if the container is a form. Will use the `form` class
     * @default false
     */
    form: Boolean,
    /**
     * Define if the container is for balloons. Will use the `balloon` class
     * @default false
     */
    balloon: Boolean,
    /**
     * Define if the container has rounded corners. Will use the `is-rounded` class
     * @default false
     */
    rounded: Boolean
  },
  computed: {
    /**
     * Computed Property that uses the container classes depending of the props used.
     * @returns {{'with-title': boolean, balloon: BooleanConstructor, 'is-centered': BooleanConstructor, form: BooleanConstructor, 'is-dark': BooleanConstructor, 'is-rounded': BooleanConstructor}}
     */
    containerClasses () {
      return {
        'with-title': !!this.title,
        'is-centered': this.center,
        'is-dark': this.dark,
        'is-rounded': this.rounded,
        'form': this.form,
        'balloon': this.balloon
      }
    }
  }
}
</script>
