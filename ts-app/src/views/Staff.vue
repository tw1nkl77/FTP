<template>
  <div class="staff">
    <auth-form class="staff-form">
      <template #header>
        <h1>Создание обращения в техническую поддержку</h1>
      </template>
      <v-text-field
        class="staff-form__name"
        label="ФИО*"
        placeholder="Введите свое ФИО"
        variant="outlined"
        required
      />
      <v-text-field
        class="staff-form__cab"
        label="Кабинет*"
        placeholder="Введите номер кабинета"
        variant="outlined"
        required
      />
      <v-textarea
        class="staff-form__text"
        label="Обращение*"
        placeholder="Введите текст обращения"
        variant="outlined"
        required
      />
      <div class="staff-form__button">
        <v-btn>Отправить</v-btn>
      </div>
    </auth-form>
  </div>
</template>

<!-- <script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      valid: false,
      rules: {
        required: (value) => !!value || "Данное окно должно быть заполнено.",
        max: (value) =>
          value.length <= 150 || "Обращение должно быть не более 150 символов.",
      },
      appeal: {
        id: Date.now(),
        name: '',
        cab: '',
        text: '',
      },
    };
  },

  methods: {
    ...mapActions({
      getAppeal: 'Appeals/getAppeal',
    }),

    sendAppeal() {
      const { id, name, cab, text } = this.appeal;
      this.getAppeal({ id, name, cab, text });
      this.appeal= {
        id: Date.now(),
        name: '',
        cab: '',
        text: '', 
      };
    },
  },
};
</script> -->

<script lang="ts">
import { defineComponent } from "vue";
import AuthForm from "../components/Form.vue";
// import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  name: "App",
  components: { AuthForm },

  //   data() {
  //     return {
  //       token: {
  //         login: "",
  //         password: "",
  //       },
  //     };
  //   },

  //   methods: {
  //     ...mapActions({
  //       getToken: "Login/getToken",
  //       getSessions: "Login/getSessions",
  //     }),
  //   },

  //   computed: {
  //     ...mapGetters({
  //       hasToken: "Login/hasToken",
  //       incorrectData: "Login/incorrectData",
  //     }),
  //   },
});
</script>

<style lang="scss">
.staff {
  width: 800px;
  padding: 50px 0;
  margin: 0 auto;

  .staff-form {
    margin-top: 30px;
    text-align: center;

    &__name {
      height: 80px;
      margin-top: 20px;
    }

    &__cab {
      height: 80px;
    }

    &__text {
      height: 180px;
    }

    &__button {
      text-align: right;
    }
  }
}
</style>