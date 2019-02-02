<template>
  <div class="message -right">
    <div class="nes-balloon from-right">
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
