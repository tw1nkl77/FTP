<template>
  <div class="chat">
    <div class="has-chat" v-if="hasChat">
      <header class="chat-header">
        <div class="chat-header__about">
          <h2 class="chat-header__about__user">{{ selectedChat.name }}</h2>
          <span class="chat-header__about__status">{{
            selectedChat.status
          }}</span>
        </div>
        <div class="chat-header__addition"></div>
      </header>
      <div class="chat-info">
        <div
          class="chat-info__message"
          v-for="messages in selectedChat.messages"
          :key="messages.id"
          :class="messages.own ? 'right-message' : 'left-message'"
        >
          <span>
            {{ messages.message }}
          </span>
        </div>
      </div>
      <div class="chat-send">
        <textarea
          class="chat-send__input"
          placeholder="Enter the message you want to send..."
          v-model="message"
          @keydown.enter.prevent="prepareMessage({ userId: selectedChat.id, message })"
        ></textarea>
        <button
          class="chat-send__submit"
          @click="prepareMessage({ userId: selectedChat.id, message })"
        >
          <img
            :src="require('../assets/telegram.png')"
            class="chat-send__submit__img"
          />
        </button>
      </div>
    </div>
    <div class="hasnt-chat" v-else>
      <span>Choose who you would like to write to</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from "vuex";

export default {
  name: "Chat",
  data() {
    return {
      message: "",
    };
  },

  methods: {
    ...mapMutations({
      sendMessage: "sendMessage",
    }),

    prepareMessage(value) {
        if (value.message) {
        this.sendMessage(value);
      };

      this.message = "";
    },
  },

  computed: {
    ...mapState({
      selectedChat: (state) => state.selectedChat,
    }),

    ...mapGetters({
      hasChat: "hasChat",
    }),
  },
};
</script>

<style lang="scss">
.chat {
  width: 70%;
  height: 500px;
  // border-top: 2px solid #37474f;
  // border-right: 2px solid #37474f;
  // border-bottom: 2px solid #37474f;
  background: url("../assets/fon.png");
  background-repeat: no-repeat;
  background-size: cover;

  .hasnt-chat {
    margin-top: 240px;
    background: rgba(51, 51, 51, 0.5);
    width: 300px;
    margin: 240px auto;
    text-align: center;
    border-radius: 10px;

    span {
      color: #fff;
    }
  }

  .has-chat {
    .chat-header {
      height: 70px;
      display: flex;
      border-bottom: 1px solid #37474f;
      padding: 10px 20px;
      background: #fff;

      .chat-header__about {
        .chat-header__about__user {
          font-size: 20px;
        }

        .chat-header__about__status {
          font-size: 15px;
          color: rgb(79, 194, 233);
        }
      }
    }

    .chat-info {
      height: 375px;
      overflow: scroll;
      padding: 10px;
      border-bottom: 1px solid #37474f;

      .right-message {
        text-align: right;
      }

      .left-message {
        text-align: left;
      }

      .chat-info__message {
        margin-bottom: 15px;

        span {
          background-color: #37474f;
          padding: 5px 10px;
          border-radius: 10px;
          color: #fff;
        }
      }
    }

    .chat-send {
      background-color: #fff;
      height: 55px;
      display: flex;

      .chat-send__input {
        width: 640px;
        outline: none;
        padding: 10px;
        resize: none;
      }

      .chat-send__submit {
        width: 58px;
        display: flex;
        justify-content: center;
        align-items: center;

        .chat-send__submit__img {
          width: 35px;
        }
      }
    }
  }
}
</style>