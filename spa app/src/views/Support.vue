<template>
  <div class="main">
    <h1>Список обращений в техническую поддержку</h1>
    <hr />
    <div class="filter">
      <h2>Выбор отдела</h2>
      <div class="filter-complete">
        <v-autocomplete
          v-model="selectedSort"
          :items="department"
          dense
          filled
          label="Выберите отдел..."
        />
        <v-btn @click="clearFilter">Очистить отдел</v-btn>
      </div>
    </div>
    <div class="admin" v-if="items.length">
      <v-table density="compact">
        <thead>
          <tr>
            <th class="text-center">№</th>
            <th class="text-center">ФИО</th>
            <th class="text-center">Обращение</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(appeal, idx) of items" :key="idx">
            <td class="text-center">{{ idx + 1 }}</td>
            <td class="text-center">{{ appeal.name }}</td>
            <td class="text text-center">{{ appeal.text }}</td>
            <td class="text-center"></td>
          </tr>
        </tbody>
      </v-table>
    </div>
    <div v-else><p>Пока что список обращений пуст.</p></div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "Admin",
  data() {
    return {
      selectedSort: null,
      department: ["PK", "PO"],
    };
  },

  methods: {
    ...mapActions({
      getTranslatedAppeals: "TranslatedAppeals/getAppeals",
    }),

    ...mapMutations({
        selectDepartment: "TranslatedAppeals/selectDepartment",
    }),

    clearFilter() {
      this.selectedSort = null;
      this.selectDepartment(this.selectedSort);
    },
  },

  watch: {
    selectedSort(value) {
      this.selectDepartment(value);
    },
  },

  computed: {
    ...mapGetters({
      items: "TranslatedAppeals/getDepartment",
    }),
  },
};
</script>

<style lang="scss" scoped>
.main {
  margin: 50px auto;

  h1 {
    text-align: center;
  }

  .filter {
    margin: 20px auto;

    h2 {
      margin-bottom: 5px;
    }

    &-complete {
      display: flex;
      justify-content: center;

      button {
        margin-left: 10px;
        height: 56px;
      }
    }
  }

  .admin {
    border: 2px solid #1b1b1b;
    border-radius: 10px;
    box-shadow: 0 0 9px gray;

    th {
      text-align: center;
    }

    td {
      button {
        height: 20px;
      }
    }

    .text {
      max-width: 400px;
    }
  }
}
</style>