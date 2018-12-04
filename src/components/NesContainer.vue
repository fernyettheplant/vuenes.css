<template>
  <Component
    :is="tag"
    :class="containerClasses"
    class="container"
  >
    <Component
      :is="titleTag"
      v-if="containsTitleProps"
      class="title"
    >
      {{ title }}
    </Component>
    <slot />
  </Component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: () => 'div'
    },
    title: {
      type: String,
      default: () => ''
    },
    titleTag: {
      type: String,
      default: () => 'h2'
    },
    center: Boolean,
    dark: Boolean,
    form: Boolean
  },
  computed: {
    containerClasses () {
      return {
        'with-title': !!this.title,
        'is-center': this.center,
        'is-dark': this.dark,
        'form': this.form
      }
    },
    containsTitleProps () {
      return !!this.title && !!this.titleTag
    }
  }
}
</script>
