<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" scrollable max-width="300px">
      <template v-slot:activator="{ attrs }">
        <v-btn
          v-bind="attrs"
          v-on:click="dialog = !dialog"
          style="height: 20px"
        >
          Отделы...
        </v-btn>
      </template>
      <v-card>
        <v-card-title>Выбрать отдел</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px">
          <v-radio-group v-model="department" column>
            <v-radio label="Отдел тех. обслуживания ПО" value="PO"></v-radio>
            <v-radio label="Отдел тех. обслуживания ПК" value="PK"></v-radio>
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Закрыть
          </v-btn>
          <v-btn color="blue darken-1" text @click="saveDepartment">
            Сохранить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      department: "",
    };
  },

  methods: {
    saveDepartment() {
      this.dialog = false;
      this.$emit("department", this.department);
    },
  },
};
</script>

<style>
.btn {
  height: 20px;
}
</style>