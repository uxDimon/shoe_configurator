<template>
  <div class="customObject">
    <div
      v-for="(viewingAngles, index) in activeCustoObject.viewingAngles"
      :key="index"
      v-show="index == activeViewingAngles"
    >
      <svg
        width="900"
        height="900"
        viewBox="0 0 900 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g
          class="customObject__area"
          v-for="(arias, indexA) of viewingAngles"
          :key="indexA"
          :filter="f1"
        >
          <g
            class="customObject__areaPosition customObjectSvg"
            v-for="(position, indexP) of arias.position"
            :key="indexP"
            width="900"
            height="900"
            viewBox="0 0 900 900"
          >
            <mask
              :id="'mask' + index + indexP + indexA"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="0%"
              y="0%"
              width="900"
              height="900"
              class="customObjectSvg__masskLaer"
            >
              <rect width="900" height="900" :fill="'url(#pattern' + index + indexP + indexA +')'" />
            </mask>
            <g :mask="'url(#mask' + index + indexP + indexA +')'">
              <rect
                width="900"
                height="900"
                :fill="areasColor(indexA, indexP)"
                class="customObjectSvg__colorLaer"
              />
              <g class="customObjectSvg__multiplyLaer">
                <rect
                  width="900"
                  height="900"
                  :fill="'url(#pattern' + index + indexP + indexA +')'"
                />
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
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
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
// .customObject {
//   position: relative;
// }
// .customObject__area {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 900px;
//   height: 900px;
// }

// .customObject__areaPosition {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 900px;
//   height: 900px;
// }

.customObjectSvg__colorLaer {
  transition: fill 100ms ease-in 0ms;
}

.customObjectSvg__multiplyLaer {
  mix-blend-mode: multiply;
}

.customObjectSvg__masskLaer {
}
</style>