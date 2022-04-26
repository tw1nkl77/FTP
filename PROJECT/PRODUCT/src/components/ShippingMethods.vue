<template>
  <div class="delivery">
    <div class="section_title">Shipping method</div>
    <div class="section_subtitle">Select the one you want</div>
    <div class="delivery_options" id="shipping">
      <ShippingMethodsItem 
        v-for="item of items"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import ShippingMethodsItem from "./items/ShippingMethodsItem.vue";
import { mapActions, mapState } from 'vuex';

export default {
  name: "ShippingMethods",
  components: { ShippingMethodsItem },
  data() {
    return {
      url: "/api/shipping",
    };
  },

  methods: {
    ...mapActions({
      getMethods: 'ShippingMethods/getMethods',
    }),
  },

  computed: {
    ...mapState({
      items: state => state.ShippingMethods.methods,
    }),
  },

  async created() {
    await this.getMethods(this.url);
  },
};
</script>