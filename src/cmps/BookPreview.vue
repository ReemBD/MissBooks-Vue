<template>
  <li class="book-preview">
    <div class="img-overlay"></div>
    <h3>{{ volumeInfo.title }}</h3>
    <h5 class="flex align-center">
      {{ price }}
      <svg-icon type="mdi" :path="bookPriceIcon" size="14"></svg-icon>
    </h5>
    <img :src="volumeInfo.imageLinks.thumbnail" />
    <div class="action-btns flex align-center">
      <md-button @click="selected" class="see-more-btn md-accent md-outlined"
        >See more</md-button
      >
      <md-button
        @click="remove"
        class="md-icon-button md-accent md-dense md-raised"
        ><md-icon>delete</md-icon></md-button
      >
    </div>
  </li>
</template>

<script>
// import DollarIcon from "vue-material-design-icons/currency-usd.vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { bookPriceIcon } from "@/mixins.js";
export default {
  props: {
    book: { type: Object, required: true },
  },
  methods: {
    remove() {
      this.$emit("remove", this.book._id);
    },
    selected() {
      this.$router.push(`/book/${this.book._id}`);
    },
  },
  computed: {
    bookPriceIcon,
    price() {
      return this.book.saleInfo.price.amount;
    },
    DeleteIcon() {
      return require("@mdi/js")["mdiTrashCanOutline"];
    },
    volumeInfo() {
      return this.book.volumeInfo;
    },
  },
  components: {
    SvgIcon,
  },
};
</script>