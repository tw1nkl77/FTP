<template>
  <div class="main">
    <div class="main-info">
      <Users />
      <Chat />
    </div>
  </div>
</template>

<script>
import Users from "../components/Users.vue";
import Chat from "../components/Chat.vue";

export default {
  name: "Main",
  components: { Users, Chat },
};
</script>

<style lang="scss">
.main {
  width: 1000px;
  margin: 0 auto;
  
  .main-info {
    display: flex;
  }
}
</style>