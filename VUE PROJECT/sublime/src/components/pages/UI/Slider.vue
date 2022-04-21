<template>
  <div class="home">
    <div class="home_slider_container">
      <!-- Home Slider -->
      <div class="owl-carousel owl-theme home_slider">
        <SliderItem />  
      </div>

      <!-- Home Slider Dots -->
      <div class="home_slider_dots_container">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="home_slider_dots">
                <ul id="home_slider_custom_dots" class="home_slider_custom_dots">
                  <li class="home_slider_custom_dot active">1</li>
                  <li class="home_slider_custom_dot">2</li>
                  <li class="home_slider_custom_dot">3</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import '../../../assets/plugins/greensock/TweenMax.min.js';
// import '../../../assets/plugins/greensock/TimelineMax.min.js';
// import '../../../assets/plugins/scrollmagic/ScrollMagic.min.js';
// import '../../../assets/plugins/greensock/animation.gsap.min.js';
// import '../../../assets/plugins/greensock/ScrollToPlugin.min.js';
// import '../../../assets/plugins/OwlCarousel2-2.2.1/owl.carousel.js';
// import '../../../assets/plugins/Isotope/isotope.pkgd.min.js';
// import '../../../assets/plugins/easing/easing.js';
// import '../../../assets/plugins/parallax-js-master/parallax.min.js"';
import SliderItem from './items/SliderItem.vue';

export default {
  name: 'Slider',
  components: { SliderItem }
};
</script>

<style>
</style>