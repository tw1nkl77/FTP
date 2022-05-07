<template>
  <v-app class="super-container">
    <Header />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Main from './views/Main.vue';
import Header from './components/UI/Header.vue';

export default {
  name: 'App',
  components: { Main, Header },
};
</script>

<style>
.super-container {
  margin: 150px auto;
  width: 1005px;
  height: 530px;
  border: 2px solid #37474f;
  border-radius: 5px;
}
</style>
