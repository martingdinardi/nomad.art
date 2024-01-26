<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  max-width: 65rem;
  width: 100%;
  margin: 0 auto;
  left: 0;
  right: 0;
  padding: 0 2rem;
  position: absolute;
  z-index: 99;
}
</style>
