<template>
  <div>
    <NavBar />
    <Nuxt />
  </div>
</template>

<script>
import NavBar from "@/components/Navbar.vue";
export default {
  name: "Staff",
  components: { NavBar },
};
</script>

<style scoped>
div {
  font-family: "Courier New", Courier, monospace;
}
</style>