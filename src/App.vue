<template>
  <div id="app" class="shoeConfig">
    <h1 class="startH">{{start}}</h1>
    <div class="shoeConfig__wrap">
      <div class="shoeConfig__object">
        <app-custom-object></app-custom-object>
        <app-choice-viewing-angles></app-choice-viewing-angles>
      </div>
      <app-color-change-area></app-color-change-area>
    </div>
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
};
</script>

<style lang="scss">
.startH {
  width: 100%;
  font-variation-settings: "wdth" 900, "wght" 98;
}

.shoeConfig__wrap {
  display: flex;
  align-items: stretch;
  height: 900px;
}

.shoeConfig__object {
  width: 900px;
}
</style>
