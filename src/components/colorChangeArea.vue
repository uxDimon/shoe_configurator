<template>
  <div class="colorChangeArea_wrap">
    <div class="colorChangeArea" v-show="!showManu">
      <button
        class="colorChangeArea__button areaButton"
        v-for="(area, key) of activeCustoObject.colors"
        :key="key"
        @click="addData(area.colorsArea, key)"
      >
        <div class="areaButton__preview" :style="{'--previewArea': 'url(' + area.previewUrl + ')'}"></div>
        <span>{{area.name}}</span>
        <div class="areaButton__colorArea" :style="{'--colorArea': selectedColorArea[key].hex}"></div>
      </button>
    </div>
    <app-color-change-manu></app-color-change-manu>
  </div>
</template>

<script>
import appColorChangeManu from "./colorChangeManu.vue";

export default {
  methods: {
    addData(area, key) {
      this.$store.commit("addData", { area, key });
    }
  },
  computed: {
    activeCustoObject() {
      return this.$store.getters.getActiveCustoObject;
    },
    showManu() {
      return this.$store.state.colorChoiceManu.showManu;
    },
    selectedColorArea() {
      return this.$store.state.customObject.selectedOptions;
    }
  },
  components: {
    appColorChangeManu
  }
};
</script>

<style lang="scss">
.colorChangeArea_wrap {
  flex-grow: 1;
  overflow-y: scroll;
}

.colorChangeArea {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-grow: 1;
}

.areaButton {
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;
  border: none;
  font-family: "Inter", sans-serif;
  font-size: 14px;

  &:hover {
    background-color: #ebebeb;
  }
}

.areaButton__preview {
  width: 100px;
  height: 50px;
  background: var(--previewArea) no-repeat;
}

.areaButton__colorArea {
  position: absolute;
  top: 15px;
  left: calc(50% - 50px);
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: var(--colorArea);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
}

.areaButton_100 {
  width: 100%;
}
</style>