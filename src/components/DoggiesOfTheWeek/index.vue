<template>
  <div class="doggies-of-the-week">
    <h2>Doggies of the week</h2>
    <div class="doggies-of-the-week__cards">
      <Card
        v-for="(doggieCard, index) in doggiesCards"
        :key="index"
        :cardBody="doggieCard"
      />
    </div>
  </div>
</template>

<script setup>
import Card from "../Card/index.vue";

let tokenIds = ["1", "100", "999"];
let doggiesCards = [
  {
    name: "Doggy #4478",
    image: "https://contracts.sandbox.game/snoopdogg-revealed/4478.jpg",
    ownerImage: "https://contracts.sandbox.game/snoopdogg-revealed/4478.jpg",
    ownerAddress: "0x72fDE4D8f571a6ebdc1d6509e19A3A1e9ebEA963",
  },
  {
    name: "Doggy #0233",
    image: "https://contracts.sandbox.game/snoopdogg-revealed/233.jpg",
    ownerImage: "https://contracts.sandbox.game/snoopdogg-revealed/233.jpg",
    ownerAddress: "0xA8e54b46ae93E14eedaE486a9EFCD4c7B5a5be20",
  },
  {
    name: "Doggy #4504",
    image: "https://contracts.sandbox.game/snoopdogg-revealed/4504.jpg",
    ownerImage: "https://contracts.sandbox.game/snoopdogg-revealed/4504.jpg",
    ownerAddress: "0x862364E32C4A03fc84c612040657E94927Fc3E81",
  },
];
</script>
<style lang="scss">
@import "../../styles/components/DoggiesOfTheWeek";
</style>
