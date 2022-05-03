<template>
  <!-- <div class="owl-item home_slider_item"> -->
    <div class="carousel-item active" data-bs-interval="1000">
    <div class="home_slider_background"></div>
    <div class="home_slider_content_container">
      <div class="container">
        <div class="row">
          <div class="col">
            <div
              class="home_slider_content"
              data-animation-in="fadeIn"
              data-animation-out="animate-out fadeOut"
            >
              <div class="home_slider_title">{{ item.title }}</div>
              <div class="home_slider_subtitle">{{ item.body }}</div>
              <div class="button button_light home_button">
                <router-link to="/categories">Shop Now</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SliderItem',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
};
</script>