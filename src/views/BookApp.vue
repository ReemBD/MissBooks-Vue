<template>
  <section class="book-app main-layout">
    <book-filter @filtered="onFilter" />
    <book-list :books="booksToShow" @remove="removeBook"></book-list>
  </section>
</template>

<script>
import BookList from "@/cmps/BookList";
import BookFilter from "@/cmps/BookFilter";

export default {
  methods: {
    async loadBooks() {
      await this.$store.dispatch({ type: "loadBooks" });
    },
    async removeBook(bookId) {
      const action = { type: "removeBook", bookId };
      await this.$store.dispatch(action);
    },
    togglePopup() {
      this.isPopupOpen = !this.isPopupOpen;
    },
  },
  created() {
    this.loadBooks();
  },
  computed: {
    booksToShow() {
      return this.$store.getters.booksToShow;
    },
  },

  components: {
    BookList,
    BookFilter,
  },
};
</script>