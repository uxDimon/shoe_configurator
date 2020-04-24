<template>
  <div class="customObject">
    <div
      v-for="(viewingAngles, index) in activeCustoObject.viewingAngles"
      :key="index"
      v-show="index == activeViewingAngles"
    >
      <div class="customObject_area" v-for="(arias, indexA) of viewingAngles" :key="indexA">
        <svg
          class="customObject_areaPosition"
          v-for="(position, indexP) of arias.position"
          :key="indexP"
          width="900"
          height="900"
          viewBox="0 0 900 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <mask
            :id="'mask' + index + indexP + indexA"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="900"
            height="900"
          >
            <rect width="900" height="900" :fill="'url(#pattern' + index + indexP + indexA +')'" />
          </mask>
          <g :mask="'url(#mask' + index + indexP + indexA +')'">
            <rect width="900" height="900" :fill="areasColor(indexA, indexP)" />
            <g style="mix-blend-mode: multiply;">
              <rect width="900" height="900" :fill="'url(#pattern' + index + indexP + indexA +')'" />
            </g>
          </g>
          <defs>
            <pattern
              :id="'pattern' + index + indexP + indexA"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use :xlink:href="'#' + index + indexP + indexA" transform="scale(0.00111111)" />
            </pattern>
            <image :id="index + indexP + indexA" :x="position" :xlink:href="arias.url" />
          </defs>
        </svg>
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
  },
  methods: {
    areasColor(indexA, indexP) {
      let positionColor = this.getColor[indexA].positionColor;
      for (let item in positionColor) {
        if (item == indexP) {
          return positionColor[item];
        }
      }
      return this.getColor[indexA].hex;
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
  // background-blend-mode: multiply;
  // transition: background-color 100ms ease-in 0ms;
}
</style>