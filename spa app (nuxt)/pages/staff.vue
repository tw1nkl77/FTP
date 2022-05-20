<template>
  <Container>
    <template #header><h1>Создание обращения в тех. поддержку</h1></template>
    <div class="staff-form mt-5">
      <form>
        <div class="mb-3">
          <label class="form-label">ФИО</label>
          <input
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
            v-model="appeal.name"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Номер кабинета</label>
          <input 
            type="password" 
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
        <button type="submit" class="btn btn-primary">ОТПРАВИТЬ ОБРАЩЕНИЕ</button>
      </form>
    </div>
  </Container>
</template>

<script>
import Container from "@/components/Container.vue";

export default {
  name: "Staff",
  components: { Container },
  // middleware: ['auth'],
  data: () => ({
    appeal: {
      name: "",
      cab: "",
      text: "",
    },
  }),

  
};
</script>

<style>
.staff-form {
  text-align: left;
  border: 2px solid lightgray;
  border-radius: 10px;
  box-shadow: 0 0 9px lightgray;
  padding: 30px 60px;
}
</style>