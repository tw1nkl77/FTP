<template>
  <div class="product_grid">
    <CatalogItem
      v-for="item of items"
      :key="item.key"
      :item="item"
      :api="api"
      :hasCategory="discountProducts ? discountProducts : false"
    />
  </div>
</template>

<script>
import CatalogItem from './items/CatalogItem.vue';

export default {
  name: 'categories',
  components: { CatalogItem },
  props: {
    discountProducts: {
      type: Boolean
    }
  },

  data() {
    return {
      items: [],
      api: {
        productApi: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products',
        url: '/api/catalog',
      },
    };
  },

  methods: {
    async fetchCatalog() {
      try {
        // this.items = await $api.send(this.api.url, "GET");
        this.items = await fetch(
          "https://raw.githubusercontent.com/schultznoan/FTP/main/catalog.json"
        ).then((d) => d.json());
      } catch (err) {
        console.warn(err);
      }
    },
  },

  created() {
    this.fetchCatalog();
  },
};
</script>