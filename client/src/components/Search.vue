<template>
  <section class="search">
    <h1>Find Your Apex Stats</h1>
    <form v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <label for="platform">Platform</label>
        <select name="platform" id="platform" v-model="platform">
          <option value="origin">Origin</option>
          <option value="psn">Playstation</option>
          <option value="xbl">Xbox</option>
        </select>
      </div>
      <div class="form-group">
        <label for="userid">Profile Name</label>
        <input
          type="text"
          name="userid"
          v-model="userid"
          id="userid"
          placeholder="Origin ID, Xbox Live gamertag, PSN ID"
        />
      </div>
      <div class="form-group">
        <input type="submit" value="Submit" class="btn" />
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      platform: "origin",
      userid: "",
    };
  },
  beforeCreate() {
    document.body.className = "body-bg-image";
  },
  methods: {
    onSubmit() {
      if (!this.userid) {
        this.$toasted.show("Please enter a profile name", {
          duration: 3000,
        });
      } else {
        this.$router.push(`/profile/${this.platform}/${this.userid}`);
      }
    },
  },
};
</script>

<style></style>
