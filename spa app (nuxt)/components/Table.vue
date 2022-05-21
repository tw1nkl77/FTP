<template>
  <table class="table">
    <thead>
      <slot name="header"></slot>
    </thead>
    <tbody>
      <tr v-for="(appeal, idx) in appeals" :key="idx">
        <slot name="appeal" :appeal="appeal"></slot>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Table",
  props: {
    appeals: {
      type: Array,
      default: () => [],
    },
  },
};
</script>