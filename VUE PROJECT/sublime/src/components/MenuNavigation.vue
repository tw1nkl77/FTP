<template>
  <ul>
    <MenuNavigationItem
      v-for="item of items"
      :key="item.id"
      :item="item"
      :api="api"
    />
  </ul>
</template>

<script>
import MenuNavigationItem from './items/MenuNavigationItems.vue';

export default {
  name: 'MenuNavigation',
  components: { MenuNavigationItem },

  data() {
    return {
      items: [],
      api: {
        menuApi: 'https://raw.githack.com/SergioElCringe/JS_step_1/main/BASE__PROJECT',
        url: '/api/menu',
      },
    };
  },

  methods: {
    async fetchMenu() {
      try {
        // this.items = await $api.send('https://raw.githubusercontent.com/schultznoan/FTP/main/menu.json', "GET");
        this.items = await fetch('https://raw.githubusercontent.com/schultznoan/FTP/main/menu.json').then(d => d.json());
      } catch (err) {
        console.warn(err);
      }
    },
  },

  created() {
    this.fetchMenu();
  },
};
</script>