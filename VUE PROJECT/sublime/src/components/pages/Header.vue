<template>
  <header class="header">
    <div class="header_container">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="header_content d-flex flex-row align-items-center justify-content-start">
              <div class="logo"><a href="#">Sublime.</a></div>
              <nav class="main_nav">
                  <MenuNavigation />
              </nav>
              <div class="header_extra ml-auto">

                <!-- CART -->

                <div class="search">
                  <div class="search_icon">
                    <img src="https://raw.githack.com/SergioElCringe/JS_step_1/main/students/Eminov/Project/Eminov-hw-8/src/assets/img/glass.svg" />
                  </div>
                </div>
                <div class="hamburger">
                  <i class="fa fa-bars" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Search Panel -->
    <div class="search_panel trans_300">
      <div class="container">
        <div class="row">
          <div class="col">
            <div
              class="
                search_panel_content
                d-flex
                flex-row
                align-items-center
                justify-content-end
              "
            >
              <form action="#">
                <input
                  type="text"
                  class="search_input"
                  placeholder="Search"
                  required="required"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Social -->
    <div class="header_social">
      <ul>
        <li>
          <a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
        </li>
        <li>
          <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
        </li>
        <li>
          <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
        </li>
        <li>
          <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import MenuNavigation from '../MenuNavigation.vue';
export default {
  name: 'Header',
  components: { MenuNavigation }
};
</script>

<style>
</style>