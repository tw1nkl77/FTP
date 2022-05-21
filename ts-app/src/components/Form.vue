<template>
  <v-form class="form">
    <slot name="header"></slot>
    <hr />
    <slot></slot>
  </v-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  props: {
    valid: {
      type: Boolean, 
      default: () => null,
    },
  },
});
</script>