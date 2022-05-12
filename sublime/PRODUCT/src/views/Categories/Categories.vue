<template>
  <div>
    <CategorySlider 
      :category="this.$route.params.category"
    />
    <div class="products">
      <div class="container">
        <ProductSorting />
        <div class="row">
          <div class="col">
            <Catalog 
              :query="query"
              :hasPagination="true"
            />
          </div>
        </div>
      </div>
    </div>
    <IconBoxs />
    <NewsLetter />
  </div>
</template>

<script>
import CategorySlider from "./components/UI/CategorySlider.vue";
import ProductSorting from "./components/ProductSorting.vue";
import Catalog from "@components/Catalog.vue";
import IconBoxs from "@components/pages/UI/IconBoxs.vue";
import NewsLetter from "@components/pages/UI/NewsLetter.vue";

export default {
  name: 'Categories',
  components: { CategorySlider, ProductSorting, Catalog, IconBoxs, NewsLetter },
  data() {
    return {
      query: {
        page: this.$store.state.Pagination.currentPage,
        shows: this.$store.state.Pagination.shows,
        filter: 'category'
      },
    };
  },
};
</script>

<style>
</style>