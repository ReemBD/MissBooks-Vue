<template>
  <div class="book-filter flex align-center">
    <form action="" :submit="$emit('filtered', filterBy)"></form>
    <input
      type="text"
      placeholder="Search..."
      v-model="filterBy.txt"
      @input="onFilter"
    />
    <input type="range" v-model="filterBy.price" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterBy: {
        txt: "",
        price: 0,
      },
    };
  },
  methods: {
    onFilter() {
      const action = { type: "setFilter", filterBy: { ...this.filterBy } };
      this.$store.commit(action);
    },
  },
};
</script>