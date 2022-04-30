<template>
<<<<<<< HEAD:PROJECT/PRODUCT/src/components/items/ShippingMethodsItem.vue
  <label class="delivery_option clearfix" @click="setShippingMethod(item)">{{ item.method }}
    <input type="radio" checked="checked" name="radio" v-if="item.standart" >
=======
  <label class="delivery_option clearfix"
    > {{ item.method }}
    <input type="radio" checked="checked" name="radio" v-if="item.id == 1">
>>>>>>> 2b1d14553068f4033c6fbfebdf72db20f790364b:s/PRODUCT/src/components/items/ShippingMethodsItem.vue
    <input type="radio" name="radio" v-else>
    <span class="checkmark"></span>
    <span class="delivery_price">${{ item.price }}</span>
  </label>
</template>

<script>
<<<<<<< HEAD:PROJECT/PRODUCT/src/components/items/ShippingMethodsItem.vue
import { mapMutations } from 'vuex';

=======
>>>>>>> 2b1d14553068f4033c6fbfebdf72db20f790364b:s/PRODUCT/src/components/items/ShippingMethodsItem.vue
export default {
  name: 'ShippingMethodsItem',
  props: {
    item: {
      type: Object,
    },
  },
<<<<<<< HEAD:PROJECT/PRODUCT/src/components/items/ShippingMethodsItem.vue

  methods: {
    ...mapMutations({
      setShippingMethod: 'Cart/setShippingMethod',
    }),
  },

  created() {
    if (this.item.standart) {
      this.setShippingMethod(this.item);
    };
  },
=======
>>>>>>> 2b1d14553068f4033c6fbfebdf72db20f790364b:s/PRODUCT/src/components/items/ShippingMethodsItem.vue
};
</script>

<style>
</style>