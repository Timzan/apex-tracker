<template>
  <header>
    <img :src="image" />
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      image: require("@/assets/logo.png"),
    };
  },
};
</script>

<style scoped>
img {
  width: 300px;
  margin-left: 2rem;
}

@media (max-width: 700px) {
  img {
    display: block;
    margin: auto;
  }
}
</style>
