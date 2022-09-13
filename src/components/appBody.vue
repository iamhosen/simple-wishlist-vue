<template>
  <div class="container mt-4">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.container {
  width: 50%;
}

@media (max-width: 800px) {
  .container {
    width: 100%;
  }
}
</style>