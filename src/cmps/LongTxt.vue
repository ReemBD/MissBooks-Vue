<template>
  <p class="long-txt flex align-center" :class="classes">
    {{ shownTxt }}
    <md-button @click="isLongTxtShown = !isLongTxtShown">{{
      expandTxtIndicatorTxt
    }}</md-button>
  </p>
</template>

<script>
export default {
  props: ["txt", "classes"],
  data() {
    return {
      isLongTxtShown: false,
    };
  },
  computed: {
    shownTxt() {
      return this.isLongTxtShown
        ? this.txt
        : this.txt.substring(0, 100) + "...";
    },
    expandTxtIndicatorTxt() {
      return "Show " + (this.isLongTxtShown ? "Less" : "More");
    },
  },
};
</script>

<style scoped lang="scss">
.long-txt {
}
</style>