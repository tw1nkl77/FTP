<template>
  <header>
    <div>
      <img :src="require('@/assets/logo-116.png')" />
      <v-btn @click="clearSession" v-if="hasToken">
        <router-link to="/">Выйти</router-link>
      </v-btn>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      hasToken: JSON.parse(localStorage?.hasToken || "''"),
    }
  },
  methods: {
    clearSession() {
      localStorage.removeItem("token");
      localStorage.setItem("hasToken", JSON.stringify(false));
      console.log(localStorage)
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background: url("http://orgcomnet.ru/wp-content/themes/scalia/images/footer-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 70px;
  font-family: "Courier New";

  div {
    padding: 15px 40px;
    display: flex;
    justify-content: space-between;

    button {
      color: white;
      text-transform: uppercase;
      padding: 10px;
      border: 2px solid white;
    }
  }
}
</style>