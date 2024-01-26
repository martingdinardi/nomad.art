<template>
  <section class="header__search-item">
    <h1>
      Experience the exchange of digital art through our curated NFT
      masterpieces
    </h1>
    <h4>A marketplace featuring globally renowned artists</h4>
    <div class="header__search-item--buttons">
      <RandomSearchButton @set-token-id="setTokenId" />
      <SearchInput @set-token-id="setTokenId" />
    </div>
  </section>
</template>

<script>
import RandomSearchButton from "./RandomSearchButton.vue";
import SearchInput from "./SearchInput.vue";

export default {
  components: {
    SearchInput,
    RandomSearchButton,
  },
  methods: {
    setTokenId(value) {
      this.$emit("update-token-id", value);
    },
  },
};
</script>
<style></style>
