<template>
  <div>
    <button v-for="(color, index) in area" :key="index">{{color.name}}</button>
  </div>
</template>

<script>
export default {
  props: ["area"]
};
</script>