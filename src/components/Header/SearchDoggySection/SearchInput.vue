<template lang="">
  <section class="header__search-item--input">
    <input type="text" placeholder="Enter a Doggie ID" v-model="inputValue" />
    <button
      type="submit"
      @click="setToken"
      :disabled="inputValue === '' || isNaN(Number(inputValue))"
    >
      <img
        src="https://www.svgrepo.com/show/532555/search.svg"
        alt="Search Icon"
      />
    </button>
  </section>
</template>
<style lang="scss"></style>
<script>
export default {
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    setToken() {
      this.$emit("set-token-id", this.inputValue);
    },
  },
};
</script>
