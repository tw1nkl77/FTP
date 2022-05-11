<template>
  <div class="main">
    <h1>Список обращений в техническую поддержку</h1>
    <hr />
    <div class="filter">
      <span class="filter_head">Фильтрация:</span>
      <v-autocomplete
        class="filter_input"
        label="Выберите тип фильтрации..."
        :items="['Country1', 'Country2', 'Country3', 'Country4']"
        variant="outlined"
      />
    </div>
    <div class="admin">
      <v-table density="compact">
        <thead>
          <tr>
            <th class="text-center">№</th>
            <th class="text-center">ФИО</th>
            <th class="text-center">Обращение</th>
            <th class="text-center">Выбор отдела</th>
            <th class="text-center">Действия</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(appeal, idx) of appeals" :key="idx">
            <td class="text-center">{{ idx + 1 }}</td>
            <td class="text-center">{{ appeal.name }}</td>
            <td class="text text-center">{{ appeal.text }}</td>
            <td class="text-center"><v-btn>Отделы...</v-btn></td>
            <td class="text-center"><v-btn>Отправить</v-btn></td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Admin",
  computed: {
    ...mapGetters({
      appeals: "Staff/getAppeal",
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
    display: flex;
    
    &_head {
      font-weight: 600;
      font-size: 20px;
      margin-right: 20px;
    }

    &_input {
      width: 150px;
    }
  }

  .admin {
    margin: 20px auto;
    border: 2px solid #1b1b1b;
    border-radius: 10px;
    // text-align: justify;
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