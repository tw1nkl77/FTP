<template>
  <div class="super_container">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/pages/Header.vue';
export default {
  name: 'app',
  components: { Header } 
}
</script>

<style lang="scss">

</style>
