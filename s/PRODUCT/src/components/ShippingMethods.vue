<template>
  <div class="delivery">
    <div class="section_title">Shipping method</div>
    <div class="section_subtitle">Select the one you want</div>
    <div class="delivery_options">
      <ShippingMethodsItem 
        v-for="item of items"
        :key="item.name"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import ShippingMethodsItem from "./items/ShippingMethodsItem.vue";

export default {
  name: "ShippingMethods",
  components: { ShippingMethodsItem },
<<<<<<< HEAD:PROJECT/PRODUCT/src/components/ShippingMethods.vue
  
  methods: {
    ...mapActions({
      getMethods: 'ShippingMethods/getMethods',
    }),
  },

  computed: {
    ...mapState({
      items: state => state.ShippingMethods.items,
    }),
  },

  async created() {
    await this.getMethods();
  }
=======
  data() {
    return {
      items: [],
      url: "/api/shipping",
    };
  },

  methods: {
    async fetchMethods() {
      try {
        this.items = await $api.send(this.url, "GET");
      } catch (err) {
        console.warn(err);
      };
    },
  },

  created() {
    this.fetchMethods();
  },
>>>>>>> 2b1d14553068f4033c6fbfebdf72db20f790364b:s/PRODUCT/src/components/ShippingMethods.vue
};
</script>

<style>
</style>