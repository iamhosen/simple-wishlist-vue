<template>
  <nav class="navbar navbar-expand-lg bg-light py-3 px-5">
    <div class="container-fluid">
      <a class="navbar-brand"><strong> Wishlist Project</strong></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item" @click="setCurrentTab('item-wishlist')">
            <a class="nav-link active all" aria-current="page">
              All Wishlists
            </a>
          </li>
        </ul>

        <button
          class="btn btn-outline-primary"
          type="submit"
          @click="setCurrentTab('add-wishlist')"
        >
          + Add new item
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      currentTab: "item-wishlist",
    };
  },
  methods: {
    setCurrentTab(tab) {
      this.$emit("set-current-tab", tab);
    },
  },
};
</script>

<style>
nav .container-fluid {
  width: 50%;
  margin: 0 auto;
}

a.all {
  cursor: pointer;
}
</style>