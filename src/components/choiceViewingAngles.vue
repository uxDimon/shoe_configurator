<template>
  <div>
    <button
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