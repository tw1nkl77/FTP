<template>
  <div class="header">
    <router-link to="/" v-slot="{ isActive }"><span :class="isActive ? 'active' : ''"><b>Home</b></span></router-link>
    <router-link to="/main" v-slot="{ isActive }"><span :class="isActive ? 'active' : ''"><b>Messenger</b></span></router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.header {
  height: 26px;
  background-color: #37474f;

  .active {
    color: rgb(238, 141, 141);
    border-bottom: 2px solid rgb(238, 141, 141);
  }

  span {
    color: #fff;
    margin: 0 20px;
    transition: .3s;
    
    &:hover {
      color: rgb(238, 141, 141);
      cursor: pointer
    }
  }
}
</style>