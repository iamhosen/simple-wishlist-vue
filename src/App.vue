<template>
  <!-- header -->
  <the-header @set-current-tab="setCurrentTab"></the-header>
  <!-- Main -->
  <app-body v-if="getCurrentTab">
    <div v-if="this.wishlists.length == 0">
      <div class="alert alert-primary d-flex align-items-center" role="alert">
        <div>No Item yet! please add new items...</div>
      </div>
    </div>
    <item-wishlist
      v-for="item in wishlists"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :description="item.description"
      :url="item.url"
    ></item-wishlist>
  </app-body>
  <keep-alive>
    <app-body v-if="!getCurrentTab">
      <add-whishlist></add-whishlist>
    </app-body>
  </keep-alive>
</template>

<script>
import AddWhishlist from "./components/addWhishlist.vue";
import ItemWishlist from "./components/itemWishlist.vue";
import TheHeader from "./components/theHeader.vue";
import AppBody from "./components/appBody.vue";
export default {
  name: "App",
  components: { TheHeader, AddWhishlist, ItemWishlist, AppBody },
  data() {
    return {
      wishlists: [
        {
          id: "google",
          title: "A website to find every thing",
          description:
            "it's a website that you can put everything that you want in google.com",
          url: "google.com",
        },
        {
          id: "tvscenter",
          title: "Motor spare part shop",
          description:
            "it's a shop that can find everything he wants every parts of motorcycles in just a single shop",
          url: "tvscenter.com",
        },
      ],
      currentTab: "item-wishlist",
    };
  },
  provide() {
    return {
      addNewItem: this.addNewItem,
      removeItem: this.removeItem,
    };
  },
  computed: {
    getCurrentTab() {
      if (this.currentTab == "item-wishlist") return true;
      else return false;
    },
  },
  methods: {
    setCurrentTab(tab) {
      this.currentTab = tab;
      console.log(this.currentTab);
    },
    addNewItem(title, des, link) {
      const newItem = {
        id: new Date().toISOString(),
        title: title,
        description: des,
        url: link,
      };

      this.wishlists.unshift(newItem);
      this.currentTab = "item-wishlist";
    },
    removeItem(id) {
      const idx = this.wishlists.findIndex((item) => item.id == id);
      this.wishlists.splice(idx, 1);
    },
  },
};
</script>

<style>
</style>
