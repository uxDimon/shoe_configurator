<template>
  <div class="customObject">
    <div
      v-for="(viewingAngles, index) in activeCustoObject.viewingAngles"
      :key="index"
      v-show="index == activeViewingAngles"
    >
      <div class="customObject_area" v-for="(arias, indexA) of viewingAngles" :key="indexA">
        <div
          class="customObject_areaPosition"
          v-for="(position, indexP) of arias.position"
          :key="indexP"
          :style="{
            backgroundImage: 'url(' + arias.url + ')',
            backgroundPosition: position,
            maskImage: 'url(' + arias.url + ')',
            maskPosition: position,
            backgroundColor: getColor[indexA].hex,
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    activeCustoObject() {
      return this.$store.getters.getActiveCustoObject;
    },
    getColor() {
      return this.$store.state.customObject.selectedOptions;
    },
    activeViewingAngles() {
      return this.$store.state.activeViewingAngles;
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