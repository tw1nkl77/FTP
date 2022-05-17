<template>
  <div class="login">
    <LoginForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginForm from "./components/LoginForm.vue";

export default defineComponent({
  name: "App",
  components: { LoginForm },

  data() {
    return {
      //
    };
  },
});
</script>

<style lang="scss">
.login {
  border: 2px solid #1b1b1b;
  border-radius: 10px;
  padding: 0 30px 20px;
  width: 500px;
  margin: 50px auto;
  box-shadow: 0 0 9px gray;
}
</style>