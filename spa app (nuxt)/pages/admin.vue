<template>
  <container>
    <template #header><h1>Список обращений</h1></template>
    <Table :appeals="appeals">
      <template #header>
        <tr>
          <th scope="col">ФИО</th>
          <th scope="col">Кабинет</th>
          <th scope="col">Обращение</th>
          <th scope="col">Действия</th>
        </tr>
      </template>
      <template #appeal="{ appeal }">
        <td>{{ appeal.name }}</td>
        <td>{{ appeal.cab }}</td>
        <td style="max-width: 250px; word-wrap: break-word">{{ appeal.text }}</td>
        <td><Modal /></td>
      </template>
    </Table>
  </container>
</template>

<script>
import Container from "@/components/Container.vue";
import Table from "@/components/Table.vue";
import Modal from "@/components/Modal.vue";
import { mapGetters } from "vuex";

export default {
  name: "Admin",
  components: { Container, Table, Modal },
  computed: {
    ...mapGetters({
      appeals: "appeals/appeals",
    }),
  },
};
</script>