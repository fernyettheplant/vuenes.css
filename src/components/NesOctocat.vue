<template>
  <li
    :class="{ 'animate': animate }"
    class="nes-octocat"
  />
</template>

<script>
export default {
  props: {
    animate: Boolean
  }
}
</script>
