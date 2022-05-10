<template>
  <v-app>
    <Header />
    <v-main class="container">
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/UI/Header.vue';
import Footer from './components/UI/Footer.vue';

export default {
  name: "App",
  components: { Header, Footer }
};
</script>

<style>
.container {
  width: 1200px;
  margin: 0 auto;
}
</style>
