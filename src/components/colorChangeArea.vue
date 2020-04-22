<template>
  <div>
    <button
      v-for="(area, key) of activeCustoObject.colors"
      :key="key"
      @click="addData(area, key)"
    >{{key}}</button>
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
    }
  },
  components: {
    appColorChangeManu
  }
};
</script>