<template>
  <div class="card mb-4">
    <h2 class="card-header">{{ title }}</h2>
    <div class="card-body">
      <p class="card-text">{{ description }}</p>
      <a :href="'https://' + url" class="btn btn-primary me-2">Open Link</a>
      <button
        type="button"
        class="btn btn-outline-danger"
        @click="removeItem(id)"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["removeItem"],
  props: ["id", "title", "description", "url"],
  data() {
    return {};
  },
};
</script>