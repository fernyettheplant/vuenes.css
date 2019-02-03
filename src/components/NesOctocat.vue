<template>
  <li
    :class="{ 'animate': animate }"
    class="nes-octocat"
  />
</template>

<script>
/**
 * Vue Component implementation of the Nes Octocat
 * @author Jesus Fernando Alvarez Franco
 * @license MIT
 */
export default {
  /**
   * Define if the Octocat is animated
   * @default false
   */
  props: {
    animate: Boolean
  }
}
</script>
