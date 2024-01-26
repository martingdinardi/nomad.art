<template>
  <div class="attribute-box">
    <p>{{ attribute.trait_type }}</p>
    <strong>{{ attribute.value }}</strong>
  </div>
</template>

<script>
export default {
  props: {
    attribute: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "../../styles/global.scss";
.attribute-box {
  background: $color-box;
  border-radius: 6px;
  padding: 10px;
  text-align: center;
  width: 100%;
  height: 100%;
  font-size: 12px;
  p {
    color: $color-secondary;
    text-transform: uppercase;
  }
}
</style>
