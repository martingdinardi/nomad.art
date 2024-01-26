<template>
  <section class="header__selected-item">
    <Loader v-if="loading" />
    <Card v-else :cardBody="selectedCard" />
  </section>
</template>
<style lang="scss">
@import "../../../styles/global.scss";
</style>
<script setup>
import Card from "../../Card/index.vue";
import Loader from "../../Loader/index.vue";
const props = defineProps(["loading", "selectedCard"]);
</script>
