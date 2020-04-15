<template>
  <div id="app">
    <h1 class="startH">{{start}}</h1>
    <app-color-change-area></app-color-change-area>
    <app-custom-object></app-custom-object>
  </div>
</template>

<script>
import colorChangeArea from "./components/color-change-area.vue";
import customObject from "./components/custom-object.vue";

export default {
  computed: {
    start() {
      return this.$store.state.startMesague;
    }
  },
  components: {
    "app-color-change-area": colorChangeArea,
    "app-custom-object": customObject
  }
};
</script>

<style lang="scss">
</style>
