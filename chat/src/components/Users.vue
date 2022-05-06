<template>
  <div class="users">
    <UserItems 
      v-for="user of users" 
      :key="user.id" 
      :user="user" 
      @selectChat="selectChat"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import UserItems from "./items/UserItems.vue";

export default {
  name: "Users",
  components: { UserItems },
  methods: {
    ...mapMutations({
      selectChat: "selectChat",
      sendMessage: "sendMessage",
    }),
  },

  computed: {
    ...mapState({
      users: (state) => state.users,
    }),
  },
};
</script>

<style lang="scss">
.users {
  width: 30%;
  height: 500px;
  border: 2px solid #37474f;
  padding: 0;
  margin: 0;
  overflow: scroll;
}
</style>