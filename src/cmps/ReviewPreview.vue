<template>
  <article class="review-preview">
    <button @click="removeReview" class="delete-review-btn clear-btn">
      <md-icon class="close-x-icon">close</md-icon>
    </button>
    <h3>
      By <span>{{ review.username }}</span>
    </h3>
    <p>{{ review.freeTxt }}</p>
    <span>Rating: {{ review.rating }}</span>
    <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
      <img
        class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        src="/sarah-dayan.jpg"
        alt=""
        width="384"
        height="512"
      />
      <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p class="text-lg font-semibold">
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </blockquote>
        <figcaption class="font-medium">
          <div class="text-cyan-600">Sarah Dayan</div>
          <div class="text-gray-500">Staff Engineer, Algolia</div>
        </figcaption>
      </div>
    </figure>
  </article>
</template>
<script>
export default {
  props: ["review"],
  methods: {
    removeReview() {
      this.$emit("removeReview", this.review.id);
    },
  },
};
</script>