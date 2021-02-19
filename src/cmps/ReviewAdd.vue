<template>
  <section class="review-add">
    <h1 class="title">Leave a review...</h1>
    <form @submit.prevent="onAddReview" class="review-add-form flex column">
      <label for="username"> Name: </label>
      <input
        type="text"
        class="username"
        v-model="reviewToAdd.username"
        id="username"
        placeholder="Name..."
      />
      <label for="rating">Rate this book</label>
      <select name="rating" id="rating" v-model="reviewToAdd.rating">
        <option v-for="n in 5" :value="n" :key="n">{{ n }}</option>
      </select>
      <label for="readAt">When did you read this book?</label>
      <input type="date" id="readAt" v-model="reviewToAdd.readAt" />
      <label for="freeTxt">Free text...</label>
      <textarea
        name=""
        id="freeTxt"
        cols="30"
        rows="10"
        placeholder="Enter Review Text..."
        v-model="reviewToAdd.freeTxt"
      ></textarea>
      <md-button
        style="margin-inline-start: 0"
        type="submit"
        class="submit-review-btn md-primary md-raised"
        >Submit Review</md-button
      >
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      reviewToAdd: {
        username: "",
        rating: 3,
        readAt: "",
        freeTxt: "",
      },
    };
  },
  methods: {
    onAddReview() {
      this.$emit("addReview", this.reviewToAdd);
      this.reviewToAdd = {
        username: "",
        rating: 3,
        readAt: "",
        freeTxt: "",
      };
    },
  },
};
</script>