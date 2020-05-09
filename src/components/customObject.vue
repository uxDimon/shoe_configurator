<template>
  <div class="customObject">
    <transition-group name="customObjectA" tag="div">
      <div
        class="customObject__wrap"
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
          <g class="customObject__area" v-for="(arias, indexA) of viewingAngles" :key="indexA">
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
                <rect
                  width="900"
                  height="900"
                  :fill="'url(#pattern' + index + indexP + indexA +')'"
                />
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
          <g v-if="index == activeViewingAngles">
            <pattern
              id="patternArea"
              fill="none"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              >
              <g fill="#222222">
                <polygon points="9 0 10 0 0 10 0 9" />
                <polygon points="10 9 10 10 9 10" />
              </g>
            </pattern>
            <g v-for="(arias, indexC) of viewingAngles" :key="indexC">
              <path
                class="customObject__borderArea"
                v-if="arias.vectorP"
                :d="arias.vectorP"
                fill="rgba(0, 0, 0, 0)"
                fill-rule="evenodd"
                @click="addData(activeCustoObject.colors[indexC].colorsArea, indexC)"
              />
            </g>
          </g>
        </svg>
        <div class="customObject__shadow" :class="'shadow_' + index"></div>
      </div>
    </transition-group>
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
    },
    addData(area, key) {
      this.$store.commit("addData", { area, key });
    }
  }
};
</script>

<style lang="scss">
.customObject {
  position: relative;
  width: 900px;
  height: 900px;
  overflow: hidden;
}

.customObjectA-enter-active,
.customObjectA-leave-active {
  transition: all ease 200ms;
}

.customObjectA-enter,
.customObjectA-leave-to {
  opacity: 0;
}

.customObjectA-enter {
  transform: translateX(100px);
}

.customObjectA-leave-to {
  transform: translateX(-100px);
}

.customObject__wrap {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.customObjectSvg__colorLaer {
  transition: fill 50ms ease-in 0ms;
}

.customObjectSvg__multiplyLaer {
  mix-blend-mode: multiply;
}

.customObject__borderArea {
  stroke-width: 1;
  transition: 100ms ease-in 0ms;
  transition-property: fill;
  cursor: pointer;

  &:hover {
    fill: url(#patternArea);
  }
}

.customObject__shadow {
  position: absolute;
  bottom: 0;
  height: 20%;
  background: radial-gradient(
    50% 25.93% at 50% 50%,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(42, 42, 42, 0.1) 25%,
    rgba(82, 82, 82, 0) 100%
  );
}

.shadow_left,
.shadow_right,
.shadow_heel {
  width: 90%;
}

.shadow_anfledView {
  width: 95%;
}

.shadow_fromAbove {
  width: 55%;
  bottom: -5%;
}

.shadow_behind {
  width: 70%;
}
</style>