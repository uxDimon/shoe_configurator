<template>
  <div class="choiceViewingAngles">
    <button
      class="viewingButton"
      v-for="(viewingAngles, key) of getActiveCustoObject.viewingAngles"
      :key="key.id"
      @click="choiceActiveViewingAngles(key)"
    >{{key}}</button>
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
  width: 60px;
  height: 60px;
  border: #dddddd 2px solid;
  border-radius: 4px;
  margin-right: 30px;

  &:last-child {
    margin-right: 0;
  }
}
</style>