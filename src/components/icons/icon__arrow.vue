<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" :fill="fill">
    <path
      d="M11 2l-9 9 9 9"
      :stroke="stroke"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: [Number, String],
      default: 13
    },
    height: {
      type: [Number, String],
      default: 22
    },
    fill: {
      type: String,
      default: "none"
    },
    stroke: {
      type: String,
      default: "#666b80"
    },
    strokeWidth: {
      type: [Number, String],
      default: 3
    }
  }
};
</script>