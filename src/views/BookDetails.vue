<template>
  <main
    v-if="book"
    class="book-details-container flex space-between main-layout"
  >
    <section class="flex flex-start column book-details">
      <h1 class="title">{{ volumeInfo.title }}</h1>
      <h3 class="subtitle">{{ volumeInfo.subtitle }}</h3>
      <h4>{{ volumeInfo.language }}</h4>
      <div class="labels">
        <span
          class="reading-label"
          :class="'color-' + pageCountProps.darkenIdx"
          >{{ pageCountProps.txt }}</span
        >
        <span
          class="published-date-label"
          :style="{ backgroundColor: publishedDateProps.bgColor }"
          >{{ publishedDateProps.txt }}</span
        >
        <span v-if="isOnSale" class="sale-label">On Sale!</span>
      </div>
      <div class="price flex align-center">
        {{ price }}
        <svg-icon type="mdi" :path="bookPriceIcon" size="14"></svg-icon>
      </div>
      <long-txt :txt="volumeInfo.description" />
      <ul class="categories clear-list">
        <h3>Categories:</h3>
        <li
          v-for="category in volumeInfo.categories"
          :key="category"
          class="category"
        >
          {{ category }}
        </li>
      </ul>
      <img :src="volumeInfo.imageLinks.thumbnail" />
    </section>
    <div class="review-add">
      <review-add @addReview="onAddReview" />
      <ul v-show="book.reviews" class="review-list clear-list flex column">
        <h1 class="title">What other people thought...</h1>
        <review-preview
          v-for="review in book.reviews"
          :key="review.id"
          :review="review"
          @removeReview="onRemoveReview"
        ></review-preview>
      </ul>
    </div>
  </main>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import LongTxt from "../cmps/LongTxt.vue";
import ReviewAdd from "@/cmps/ReviewAdd.vue";
import bookService from "@/services/book.service.js";
import ReviewPreview from "../cmps/ReviewPreview.vue";
import { bookPriceIcon, price } from "@/mixins.js";

export default {
  data() {
    return {
      isLongTxtShown: false,
      book: null,
    };
  },
  created() {
    this.loadBook();
  },
  methods: {
    async loadBook() {
      const { id } = this.$route.params;
      this.book = await bookService.getById(id);
    },
    async onAddReview(review) {
      const bookCopy = bookService.addReview(review, this.book);
      this.book = bookCopy;
    },
    async onRemoveReview(id) {
      const updatedBook = bookService.removeReview(id, this.book);
      this.book = updatedBook;
    },
  },
  computed: {
    bookPriceIcon,
    price,
    isOnSale() {
      return this.book.saleInfo.saleability !== "NOT_FOR_SALE";
    },
    pageCountProps() {
      const { pageCount } = this.book.volumeInfo;
      console.log("pageCount: ");
      const pageCountProps = { txt: "", darkenIdx: 0 };
      if (pageCount < 100) {
        pageCountProps.txt = "Light Reading";
        pageCountProps.darkenIdx = 1;
      } else if (pageCount >= 100 && pageCount < 200) {
        pageCountProps.txt = "Decent Reading";
        pageCountProps.darkenIdx = 2;
      } else {
        pageCountProps.txt = "Long Reading";
        pageCountProps.darkenIdx = 3;
      }
      return pageCountProps;
    },
    publishedDateProps() {
      const currYear = new Date().getFullYear();
      const { publishedDate } = this.book.volumeInfo;
      const publishedDateProps = {
        txt: "",
        bgColor: "",
      };
      if (publishedDate <= currYear - 1 && publishedDate >= currYear - 10) {
        publishedDateProps.txt = "New!";
        publishedDateProps.bgColor = "#ffcfc4";
      } else {
        publishedDateProps.txt = "Veteran Book";
        publishedDateProps.bgColor = "#bfeadc";
      }
      return publishedDateProps;
    },
    volumeInfo() {
      return this.book.volumeInfo;
    },
  },

  components: {
    SvgIcon,
    LongTxt,
    ReviewAdd,
    ReviewPreview,
  },
};
</script>