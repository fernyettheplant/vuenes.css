<template>
  <div class="message -left">
    <div class="nes-balloon from-left">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: () => ''
    }
  }
}
</script>
