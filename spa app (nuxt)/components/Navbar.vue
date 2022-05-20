<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5 nav-content">
    <div class="container-fluid d-flex justify-content-between">
      <nuxt-link 
        class="navbar-brand" 
        :to="activeSession ? activeSession : '/authorization'"
      >pragmatik</nuxt-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <nuxt-link 
          class="nav-link" 
          aria-current="page" 
          to="/authorization"
          v-if="activeSession"
        >
          <button class="btn btn-danger" @click="getClearToken">Выйти</button>
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapGetters({
      hasToken: "authorization/token",
    }),

    activeSession() {
      return this.hasToken ? this.hasToken : "";
    },
  },

  methods: {
    ...mapActions({
      getClearToken: "authorization/getClearToken",
    }),
  },
};
</script>

<style>
.nav-content {
  text-transform: uppercase;
  background-color: #0d6efd !important;
  height: 50px;
}

.nav-content a,
.nav-content button {
  color: #fff !important;
  font-weight: 600;
}
</style>