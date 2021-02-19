<template>
  <div id="app">
    <app-header></app-header>
    <side-dock @togglePopup="togglePopup"></side-dock>
    <popup :isOpen="popups.chat.isOpen"></popup>

    <router-view />
  </div>
</template>

<script>
import AppHeader from "@/cmps/AppHeader.vue";
import SideDock from "./cmps/SideDock.vue";
import Popup from "@/cmps/Popup";
export default {
  data() {
    return {
      popups: {
        chat: { isOpen: false },
        bookAdd: { isOpen: false },
      },
    };
  },
  methods: {
    togglePopup($event) {
      console.log(this.popups[$event]);
      this.popups[$event].isOpen = !this.popups[$event].isOpen;
    },
    closePopup($event) {
      this.popups[$event].isOpen = false;
    },
  },
  components: {
    AppHeader,
    SideDock,
    Popup,
  },
};
</script>

