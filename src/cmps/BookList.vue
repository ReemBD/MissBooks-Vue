<template>
  <ul class="book-list clear-list flex wrap space-between">
    <book-preview
      v-for="book in books"
      :key="book._id"
      :book="book"
      @remove="remove"
    />
  </ul>
</template>

<script>
import BookPreview from "./BookPreview";

export default {
  props: {
    books: {
      type: Array,
      required: true,
    },
  },
  methods: {
    remove(bookId) {
      this.$emit("remove", bookId);
    },
  },
  components: {
    BookPreview,
  },
};
</script>
