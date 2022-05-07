<template>
  <div class="users">
    <div class="searchDialog">
      <input type="text" 
        class="searchInput" 
        placeholder="Search dialog..."
        v-model="searchDialog"
      >
    </div>
    <UserItems 
      v-for="user of searchedChat" 
      :key="user.id" 
      :user="user" 
      @selectChat="selectChat"
    />
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import UserItems from "./items/UserItems.vue";

export default {
  name: "Users",
  components: { UserItems },
  data() {
    return {
      searchDialog: ''
    }
  },
  methods: {
    ...mapMutations({
      selectChat: "selectChat",
      sendMessage: "sendMessage",
      searchChat: "searchChat",
    }),
  },

  watch: {
    searchDialog(val) {
      this.searchChat(val);
    },
  },

  computed: {
    ...mapState({
      users: (state) => state.users,
    }),

    ...mapGetters({
      searchedChat: "searchedChat",
    }),
  },
};
</script>

<style lang="scss">
.users {
  width: 30%;
  height: 500px;
  border-right: 2px solid #37474f;
  padding: 5px 0 0 0;
  margin: 0;
  overflow: scroll;
}

.searchDialog {
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  .searchInput {
    background-color: rgb(230, 228, 228);
    border: 1px solid #37474f;
    border-radius: 10px;
    width: 100%;
    margin: 0 5px;
    padding-left: 10px;
    padding-right: 10px;

    &::-webkit-input-placeholder {
      padding: 5px;
      font-size: 15px;
    }
  }
}
</style>