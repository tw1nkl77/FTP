<template>
  <v-form class="form" v-model="valid">
    <slot> </slot>
  </v-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",

  data() {
    return {
      valid: false,
    };
  },
});
</script>