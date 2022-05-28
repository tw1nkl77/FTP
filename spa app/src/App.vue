<template>
  <v-app>
    <Header />
    <v-main class="container">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/UI/Header.vue';

export default {
  name: "App",
  components: { Header }
};
</script>

<style>
.container {
  width: 1200px;
  margin: 0 auto;
}
</style>
