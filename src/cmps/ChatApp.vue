<template>
  <section class="chat-app">
    <h3>Welcome to the chat</h3>
    <ul v-if="messages.length" class="message-list">
      <li v-for="(message, idx) in messages" :key="idx">
        {{ message.by }}: {{ message.txt }}
      </li>
    </ul>
    <input type="text" v-model="currMessage.txt" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      currMessage: { txt: "", by: "Neo" },
    };
  },
};
</script>