<template>
  <li
    :class="{ 'animate': animate }"
    class="octocat"
  />
</template>

<script>
export default {
  props: {
    animate: Boolean
  }
}
</script>
