<template>
  <div v-show="showManu" class="colorChangeManu">
    <button class="colorChangeManu__button areaButton areaButton_100" @click="cleanData">Назад</button>
    <button
      class="colorChangeManu__button colorButton"
      v-for="(color, index) in areaData"
      :key="index"
      @click="choiceColor(color, areaKey)"
    >
      <div class="colorButton__color" :style="{'--colorHex': color.hex}">
        <div class="colorButton__borderHover"></div>
        <div class="colorButton__border" v-show="selectedColorArea[areaKey].hex == color.hex"></div>
      </div>
      {{color.name}}
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    cleanData() {
      this.$store.commit("hideManu");
    },
    choiceColor(color, areaKey) {
      this.$store.commit("choiceColor", { color, areaKey });
    }
  },
  computed: {
    areaData() {
      return this.$store.state.colorChoiceManu.areaData;
    },
    showManu() {
      return this.$store.state.colorChoiceManu.showManu;
    },
    areaKey() {
      return this.$store.state.colorChoiceManu.areaKey;
    },
    selectedColorArea() {
      return this.$store.state.customObject.selectedOptions;
    }
  }
};
</script>

<style lang="scss">
.colorChangeManu {
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
}

.colorButton {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 120px;
  border: none;
  width: 50%;

  &:hover .colorButton__borderHover {
    border-color: #d1d1d1;
  }
}

.colorButton__color {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--colorHex);
  width: 50px;
  height: 50px;
  border-radius: 50px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
}

.colorButton__border,
.colorButton__borderHover {
  position: absolute;
  width: calc(100% + 8px);
  height: calc(100% + 8px);
  border-radius: 100px;
  border: rgba(0, 0, 0, 0) 3px solid;

  transition: border-color 70ms ease-in 0ms;
}

.colorButton__border {
  border-color: var(--colorHex);
}
</style>