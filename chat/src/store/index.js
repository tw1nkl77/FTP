import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [
      {
        "id": 1,
        "name": "Ellada Paraskevova",
        "status": "online",
        "messages": [
          {
            "message": "Hello! What are you doing?",
            "own": false,
            "data": "11:44"
          },
          {
            "message": "Hello! I'm designing a new web-site :)",
            "own": true,
            "data": "11:45"
          }
        ]
      },
      {
        "id": 2,
        "name": "Maxim Shebanov",
        "status": "online",
        "messages": [
          {
            "message": "Hello! What are you doing?",
            "own": false,
            "data": "11:44"
          },
          {
            "message": "Hello! I'm fucking my girlfriend",
            "own": true,
            "data": "11:45"
          }
        ]
      }
    ],
    selectedChat: {},
  },
  getters: {
    hasChat(state) {
      return !!(Object.keys(state.selectedChat).length);
    },
  },
  mutations: {
    selectChat(state, value) {
      const chat = state.users.find(item => item.id === value);
      state.selectedChat = chat;
    },

    sendMessage(state, value) {
      const { userId, message } = value;
      const findUser = state.users.find(user => user.id === userId);
      findUser.messages.push({ message, own: true, data: Date.now });
    }
  },
  actions: {
  }
});
