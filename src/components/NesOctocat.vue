<template>
  <li
    :class="{ 'animate': animate }"
    class="nes-octocat"
  />
</template>

<script>
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
