<template>
  <header>
    <div>
      <img :src="require('@/assets/logo-116.png')" />
      <router-link to="/">
        <v-btn @click="clearToken" v-if="hasToken">Выйти</v-btn>
      </router-link>
    </div>
  </header>
</template>

<script lang="ts">
import { mapActions, mapGetters } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  methods: {
    ...mapActions({
      clearToken: "Login/clearToken",
    }),
  },

  computed: {
    ...mapGetters({
      hasToken: "Login/hasToken",
    }),
  },
});
</script>

<style lang="scss" scoped>
header {
  background: url("http://orgcomnet.ru/wp-content/themes/scalia/images/footer-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 70px;

  div {
    padding: 15px 40px;
    display: flex;
    justify-content: space-between;

    a {
      text-transform: uppercase;
      text-decoration: none;
      color: #1b1b1b;
    }
  }
}
</style>