<template>
  <div id="app">
    <h1 class="startH">{{start}}</h1>
    <app-color-change-area></app-color-change-area>
    <app-choice-viewing-angles></app-choice-viewing-angles>
    <app-custom-object></app-custom-object>
  </div>
</template>

<script>
import appCustomObject from "./components/customObject.vue";
import appColorChangeArea from "./components/colorChangeArea.vue";
import appChoiceViewingAngles from "./components/choiceViewingAngles.vue";

export default {
  computed: {
    start() {
      return this.$store.state.startMesague;
    }
  },
  components: {
    appColorChangeArea,
    appCustomObject,
    appChoiceViewingAngles
  },
  beforeCreate() {
    this.$store.commit("takeAreasCustoObject");
  }
  // created() {
  //   this.$store.commit("takeAreasCustoObject");
  // }
};
</script>

<style lang="scss">
</style>
