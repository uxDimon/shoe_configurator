<template>
  <div>
    <button
      v-for="(area, key) of activeCustoObject.colors"
      :key="key"
      @click="addData(area)"
    >{{key}}</button>
    <app-color-change-manu :area="areaData"></app-color-change-manu>
  </div>
</template>

<script>
import appColorChangeManu from "./colorChangeManu.vue";

export default {
  data() {
    return {
      areaData: ""
    };
  },
  methods: {
    addData(area) {
      return (this.areaData = area);
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