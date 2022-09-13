<template>
  <form class="card p-5" @submit.prevent="newItem()">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">
        Your Favorite website name
      </label>
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="google"
        ref="inputTitle"
      />
    </div>

    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">
        Description
      </label>
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        ref="inputDes"
      ></textarea>
    </div>

    <label for="basic-url" class="form-label">Enter the URL</label>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon3"> https:// </span>
      <input
        type="link"
        class="form-control"
        id="basic-url"
        aria-describedby="basic-addon3"
        ref="inputUrl"
      />
    </div>

    <input type="submit" value="add" class="btn btn-primary" />
  </form>
</template>

<script>
export default {
  inject: ["addNewItem"],
  data() {
    return {
      isInvalid: false,
      invalidModel: {
        title: "Wrong Input",
        description: "please make sure you fill all the fields",
      },
    };
  },
  methods: {
    newItem() {
      const title = this.$refs.inputTitle.value;
      const des = this.$refs.inputDes.value;
      const url = this.$refs.inputUrl.value;

      if (title.trim() == "" || des.trim() == "" || url.trim() == "") {
        alert("Please fill the fields correctly!");
        return;
      }
      this.addNewItem(title, des, url);
    },
  },
};
</script>