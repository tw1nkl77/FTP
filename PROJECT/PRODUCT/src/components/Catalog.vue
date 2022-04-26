<template>
  <div class="product_grid">
    <CatalogItem
      v-for="item of items"
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
    }),
  },

  async created() {
    await this.getCatalog(this.api.url);
  },
};
</script>