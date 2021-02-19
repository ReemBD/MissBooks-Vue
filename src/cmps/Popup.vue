<template>
  <section class="popup" :class="{ open: isOpen }">
    <header><slot name="header"></slot></header>
    <main>
      <chat-app></chat-app>
      <slot></slot>
    </main>
    <footer name="footer"></footer>
  </section>
</template>

<script>
import ChatApp from "./ChatApp";
import { mixin as onClickOutside } from "vue-on-click-outside";

export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  mixins: [onClickOutside],
  components: {
    ChatApp,
  },
};
</script>

<style>
</style>