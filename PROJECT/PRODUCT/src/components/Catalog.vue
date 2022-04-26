<template>
  <div class="product_grid">
    <CatalogItem
      v-for="item of sortedCatalog"
      :key="item.key"
      :item="item"
      :api="api"
    />
  </div>
</template>

<script>
import CatalogItem from './items/CatalogItem.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Catalog',
  components: { CatalogItem },

  data() {
    return {
      api: {
        productApi: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products',
        url: '/api/catalog',
      },
    };
  },

  methods: {
    ...mapActions({
      getCatalog: 'Catalog/getCatalog',
    }),
  },

  computed: {
    ...mapGetters({
      items: 'Catalog/filteredCatalog',
      sortedCatalog: 'Catalog/sortedCatalog',
    }),
  },

  async created() {
    await this.getCatalog(this.api.url);
  },
};
</script>

<style>
  .list-complete-item {
    transition: all 1s;
    display: inline-block;
    margin-right: 10px;
  }
  .list-complete-enter, .list-complete-leave-to
  /* .list-complete-leave-active до версии 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
  .list-complete-leave-active {
    position: absolute;
  }
</style>