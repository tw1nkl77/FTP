<template>
  <Container>
    <template #header><h1>Создание обращения в тех. поддержку</h1></template>
    <div class="staff-form mt-5">
      <form>
        <div class="mb-3">
          <label class="form-label">ФИО</label>
          <input
            class="form-control"
            aria-describedby="emailHelp"
            v-model="appeal.name"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Номер кабинета</label>
          <input
            class="form-control"
            v-model="appeal.cab" 
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Обращение</label>
          <textarea
            class="form-control"
            rows="3"
            v-model="appeal.text"
          />
        </div>
        <button 
          type="submit" 
          class="btn btn-primary"
          @click.prevent="sendAppeal(appeal)"
        >ОТПРАВИТЬ ОБРАЩЕНИЕ</button>
      </form>
    </div>
    <sending-success 
      style="border: 2px solid green"
      v-show="success"
    >Обращение успешно отправлено!</sending-success>
  </Container>
</template>

<script>
import Container from "@/components/Container.vue";
import SendingSuccess from "@/components/sendingSuccess.vue";
import { mapActions } from "vuex";

export default {
  name: "Staff",
  components: { Container, SendingSuccess },
  data: () => ({
    appeal: {
      id: Date.now(),
      name: "",
      cab: "",
      text: "",
    },
    success: false,
  }),

  methods: {
    ...mapActions({
      getAppeal: "appeals/getAppeal",
    }),

    sendAppeal(appeal) {
      this.getAppeal(appeal);
      this.appeal = {
        id: Date.now(),
        name: "",
        cab: "",
        text: "",
      };
      this.checkForSuccess();
    },

    checkForSuccess() {
      this.success = true;
      setTimeout(() => {
        this.success = false;
      }, 2500)
    },
  },
};
</script>

<style>
.staff-form {
  text-align: left;
  border: 2px solid lightgray;
  border-radius: 10px;
  box-shadow: 0 0 9px lightgray;
  padding: 30px 60px;
  margin-bottom: 40px;
}
</style>