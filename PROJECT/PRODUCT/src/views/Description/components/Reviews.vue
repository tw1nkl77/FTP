<template>
  <div class="row description_row">
    <div class="col">
      <div class="description_title_container">
        <div
          class="description_title"
          @click="description = false"
          :class="!description ? '' : 'color'"
        >
          Reviews <span>(1)</span>
        </div>
      </div>

      <ReviewsItem 
        v-for="item of reviews"
        :key="item.id"
      />

    </div>
  </div>
</template>

<script>
import ReviewsItem from './items/ReviewsItem.vue';

export default {
  name: "Reviews",
  components: { ReviewsItem },
  props: {
    reviews: {
      type: Array,
      default: () => [],
    },
  },
};
</script>