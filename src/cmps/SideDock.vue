<template>
  <section class="side-dock">
    <md-button
      @click="$emit('togglePopup', 'chat')"
      class="open-chat-btn side-dock-btn md-icon-button md-size-3x"
      ><md-icon class="open-chat-icon side-dock-icon md-size-2x"
        >chat</md-icon
      ></md-button
    >
    <md-button
      @click="$emit('togglePopup', 'bookAdd')"
      class="open-add-form-btn side-dock-btn md-icon-button md-size-3x"
      ><md-icon class="open-add-form-icon md-size-2x side-dock-icon"
        >add</md-icon
      ></md-button
    >
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>