<template>
  <div id="app">
    <h1 class="startH">{{start}}</h1>
    <app-color-change-area></app-color-change-area>
    <app-choice-viewing-angles></app-choice-viewing-angles>
    <app-custom-object></app-custom-object>
  </div>
</template>

<script>
import colorChangeArea from "./components/color-change-area.vue";
import appCustomObject from "./components/customObject.vue";
import appChoiceViewingAngles from "./components/choiceViewingAngles.vue";

export default {
  computed: {
    start() {
      return this.$store.state.startMesague;
    }
  },
  components: {
    "app-color-change-area": colorChangeArea,
    appCustomObject,
    appChoiceViewingAngles
  }
};
</script>

<style lang="scss">
</style>
