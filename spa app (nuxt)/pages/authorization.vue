<template>
  <Container>
    <template #header><h1>Авторизация</h1></template>
    <div class="auth-form">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Логин</label>
          <input
            type="email"
            class="form-control"
            v-model="token.login"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Пароль</label>
          <input
            type="password"
            class="form-control"
            v-model="token.password"
          />
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          @click.prevent="authorization(token)"
        >
          ВОЙТИ В СИСТЕМУ
        </button>
      </form>
    </div>
    <sending-success v-if="incorrectData" style="border: 2px solid red">Введены неправильные данные! Проверьте корректность ввода.</sending-success>
  </Container>
</template>

<script>
import Container from "@/components/Container.vue";
import SendingSuccess from "../components/sendingSuccess.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Auth",
  components: { Container, SendingSuccess },
  data: () => ({
    token: {
      login: "",
      password: "",
    },
  }),

  methods: {
    ...mapActions({
      getSessions: "authorization/getSessions",
      getToken: "authorization/getToken",
    }),

    authorization(token) {
      this.getToken(token);
      this.token = {
        login: "",
        password: "",
      };
      this.$router.push(`/${this.hasToken ? this.hasToken : ""}`);
    },
  },

  computed: {
    ...mapGetters({
      hasToken: "authorization/token",
      incorrectData: "authorization/incorrectData",
    }),
  },

  mounted() {
    this.getSessions();
  },
};
</script>

<style>
.auth {
  text-align: center;
}

.auth h1 {
  font-weight: 600;
}

.auth-form {
  width: 400px;
  text-align: left;
  text-transform: uppercase;
  font-weight: 400;
  margin: 40px auto;
  border: 2px solid lightgray;
  padding: 30px 60px;
  border-radius: 10px;
  box-shadow: 0 0 9px lightgray;
}

.btn {
  display: block;
  margin: 0 auto;
}
</style>