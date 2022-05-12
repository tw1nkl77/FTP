<template>
  <div class="product_grid">
    <CatalogItem
      v-for="item of items"
      :key="item.key"
      :item="item"
      :productApi="productApi"
      :categories="categories"
      @addItem="addItem"
    />
  </div>
  <Pagination 
    v-if="hasPagination"
    @incrementPage="incrementPage"
  />
</template>

<script>
import CatalogItem from "./items/CatalogItem.vue";
import Pagination from "./Pagination.vue";
import { mapActions, mapGetters, mapState, mapMutations } from "vuex";

export default {
  name: "Catalog",
  components: { CatalogItem, Pagination },
  props: {
    query: {
      type: Object,
      default: () => {},
    },

    hasPagination: {
      type: Boolean,
      default: () => null,
    },
  },

  methods: {
    ...mapActions({
      getCatalog: "Catalog/getCatalog",
      addItem: "Cart/addItem",
    }),

    ...mapMutations({
      changePage: 'Pagination/changePage',
    }),

    async incrementPage(value) {
      this.changePage(value);
      await this.getCatalog({...this.query, page: value});
    },
  },

  computed: {
    ...mapState({
      items: (state) => state.Catalog.items,
      productApi: (state) => state.Catalog.productApi,
      categories: (state) => state.Catalog.categories,
      pages: state => state.Pagination.pages,
    }),
    
    ...mapGetters({
      sortedCatalog: "Catalog/sortedCatalog",
    }),
  },

  async created() {
    await this.getCatalog(this.query);
  },
};
</script>