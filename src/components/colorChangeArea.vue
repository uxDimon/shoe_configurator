<template>
  <div class="colorChangeArea_wrap">
    <div class="colorChangeArea" v-show="!showManu">
      <button
        class="colorChangeArea__button areaButton"
        v-for="(area, key) of activeCustoObject.colors"
        :key="key"
        @click="addData(area, key)"
      >{{key}}</button>
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
  cursor: pointer;
  height: 120px;
  border: none;
  font-family: "Inter", sans-serif;
  font-size: 14px;

  &:hover {
    background-color: #ebebeb;
  }
}

.areaButton_100 {
  width: 100%;
}
</style>