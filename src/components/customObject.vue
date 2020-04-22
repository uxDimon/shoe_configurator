<template>
  <div class="customObject">
    <div class="customObject_area" v-for="(item, index) of activeViewingAngles" :key="index">
      <app-custom-object-area :index="index" :item="item"></app-custom-object-area>
    </div>
  </div>
</template>

<script>
import appCustomObjectArea from "./customObjectArea.vue";

export default {
  components: {
    appCustomObjectArea
  },
  methods: {},
  computed: {
    activeViewingAngles() {
      return this.$store.getters.getActiveViewingAngles;
    }
  }
};
</script>

<style lang="scss">
.customObject {
  position: relative;
}
.customObject_area {
  position: absolute;
  top: 0;
  left: 0;
  width: 900px;
  height: 900px;
}
.customObject_areaPosition {
  position: absolute;
  top: 0;
  left: 0;
  width: 900px;
  height: 900px;
  background-blend-mode: multiply;
}
</style>