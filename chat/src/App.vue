<template>
  <v-app class="super-container">
    <v-main>
      <Main />
    </v-main>
  </v-app>
</template>

<script>
import Main from './views/Main.vue';

export default {
  name: 'App',
  components: { Main },
};
</script>

<style>
.super-container {
  margin-top: 50px;
}
</style>
