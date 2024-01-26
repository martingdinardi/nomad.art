<template lang="">
  <div class="card">
    <div class="card__close-attributes" v-show="seeAttributes">
      <img
        src="https://www.svgrepo.com/show/521564/close.svg"
        alt="Close Button"
        @click="toggleAttributes"
      />
    </div>
    <div class="card__tilt" aria-hidden="true">
      <div class="card__tilt-tracker"></div>
      <div class="card__tilt-tracker"></div>
      <div class="card__tilt-tracker"></div>
      <div class="card__tilt-tracker"></div>
      <div class="card__tilt-tracker"></div>
      <div class="card__tilt-tracker"></div>
      <div class="card__tilt-tracker"></div>
      <div class="card__tilt-tracker"></div>
      <div class="card__tilt-tracker"></div>
    </div>
    <div class="card__content glassmorphic-card">
      <div class="card__content--properties" :class="{ hidden: seeAttributes }">
        <div class="card__content--img">
          <img :src="cardBody.image" alt="Card Image" />
        </div>
        <div class="card__content--owner">
          <img :src="cardBody.ownerImage" alt="Card Owner Image" />
          <p>{{ cardBody.ownerAddress }}</p>
        </div>
        <div class="card__content--name">
          <h3>{{ cardBody.name }}</h3>
        </div>
        <div class="card__content--description" v-if="cardBody.description">
          <p>{{ cardBody.description }}</p>
        </div>
      </div>
      <div
        class="card__content--attributes"
        :class="{ hidden: !seeAttributes }"
        v-if="cardBody.attributes"
      >
        <div class="card__content--attributes-title">
          <img :src="cardBody.ownerImage" alt="Card Owner Image" />
          <h3>Attributes</h3>
        </div>
        <div class="card__content--attributes-content">
          <template v-for="(attribute, index) in cardBody.attributes">
            <div
              v-if="attribute.value.trim() !== ''"
              class="card__content--attributes-attribute"
              :key="index"
            >
              <AttributeBox :attribute="attribute" />
            </div>
          </template>
        </div>
      </div>
    </div>
    <div
      class="card__see-attributes"
      v-if="cardBody.attributes && !seeAttributes"
      @click="toggleAttributes"
    >
      <p>See attributes</p>
      <img
        src="https://www.svgrepo.com/show/533605/arrow-narrow-right.svg"
        alt="Se Attributes Icon"
      />
    </div>
  </div>
</template>
<script>
import AttributeBox from "../AttributeBox/index.vue";
export default {
  components: {
    AttributeBox,
  },
  props: {
    cardBody: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      seeAttributes: false,
    };
  },
  methods: {
    toggleAttributes() {
      this.seeAttributes = !this.seeAttributes;
    },
  },
};
</script>
<style lang="scss">
@import "../../styles/components/Card.scss";
</style>
