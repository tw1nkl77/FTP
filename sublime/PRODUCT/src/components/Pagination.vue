<template>
  <div class="text-center product_pagination">
    <v-pagination
      v-model="currentPage"
      :length="this.pages"
      circle
    ></v-pagination>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      currentPage: 1
    };
  },

  watch: {
    currentPage(value) {
      this.incrementPage(value);
    },
  },

  methods: {
    incrementPage(value) {
      this.$emit('incrementPage', value);
    },
  },

  computed: {
    ...mapState({
      pages: state => state.Pagination.pages,
    }),
  },
}
</script>