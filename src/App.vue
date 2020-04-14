<template>
  <div id="app">
    <h1 class="startH">{{start}}</h1>
    <app-color-change-area></app-color-change-area>
  </div>
</template>

<script>
import colorChangeArea from "./components/color-change-area.vue";

export default {
  computed: {
    start() {
      return this.$store.state.startMesague;
    }
  },
  components: {
    "app-color-change-area": colorChangeArea
  }
};
</script>

<style lang="scss">
</style>
