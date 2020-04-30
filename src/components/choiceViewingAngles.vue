<template>
  <div class="choiceViewingAngles">
    <button
      class="viewingButton"
      v-for="(viewingAngles, key) of getActiveCustoObject.viewingAngles"
      :key="key.id"
      :style="{'--viewingPreview': 'url(' + getActiveCustoObject.viewingAnglesPreview[key] + ')'}"
      @click="choiceActiveViewingAngles(key)"
    ></button>
  </div>
</template>

<script>
export default {
  methods: {
    choiceActiveViewingAngles(key) {
      this.$store.commit("choiceActiveViewingAngles", key);
    }
  },
  computed: {
    getActiveCustoObject() {
      return this.$store.getters.getActiveCustoObject;
    }
  }
};
</script>

<style lang="scss">
.choiceViewingAngles {
  display: flex;
  justify-content: center;
}

.viewingButton {
  cursor: pointer;
  width: 80px;
  height: 80px;
  padding: 0;
  border: none;
  border-radius: 4px;
  margin-right: 30px;
  background: var(--viewingPreview) no-repeat center;
  background-size: 120%;

  &:hover {
    background-color: #ebebeb;
  }

  &:last-child {
    margin-right: 0;
  }
}
</style>