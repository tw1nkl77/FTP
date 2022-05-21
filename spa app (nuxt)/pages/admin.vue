<template>
  <Container>
    <template #header><h1>Список обращений</h1></template>
    <Table :appeals="appeals">
      <template #header>
        <tr>
          <th scope="col">№</th>
          <th scope="col">ФИО</th>
          <th scope="col">Кабинет</th>
          <th scope="col">Обращение</th>
          <th scope="col">Действия</th>
        </tr>
      </template>
      <template #appeal="{ appeal }">
        <th scope="row">{{ appeal }}</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </template>
    </Table>
  </Container>
</template>

<script>
import Container from "@/components/Container.vue";
import Table from "@/components/Table.vue";

export default {
  name: "Admin",
  components: { Table },
  data: () => ({
    appeals: [
      {
        login: "staff",
        password: "staff12345",
        rights: "staff",
      },
      {
        login: "admin",
        password: "admin12345",
        rights: "admin",
      },
    ],
  }),

//   computed: {
//     indexAppeal() {
//         return this.appeals.
//     }
//   }
};
</script>

<style>
</style>