<template>
  <div class="users-cart" @click="selectChat(user.id)">
    <div class="users-cart__img"></div>
    <div class="users-cart__info">
      <h2 class="users-cart__info__name">{{ user.name }}</h2>
      <p class="users-cart__info__text"><b>Me:</b> {{ lastMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserItem",
  props: {
    user: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    selectChat(userId) {
      this.$emit('selectChat', userId);
    },
  },

  computed: {
    lastMessage() {
      return this.user.messages[this.user.messages.length - 1].message;
    },
  },
};
</script>

<style lang="scss">
.users-cart {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 10px;
  padding-right: 10px;
  border-bottom: 1px solid #37474f;
  transition: 0.4s;

  &:hover {
    background-color: lightgray;
    cursor: pointer;
  }

  .users-cart__img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #37474f;
    margin-right: 10px;
  }

  .users-cart__info {
    .users-cart__info__name {
      font-size: 15px;
    }

    .users-cart__info__text {
      font-size: 12px;
    }
  }
}
</style>