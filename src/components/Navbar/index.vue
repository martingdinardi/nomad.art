<script setup>
import NavbarLogo from "./NavbarLogo.vue";
import NavbarLinks from "./NavbarLinks.vue";
import NavbarSocialMedia from "./NavbarSocialMedia.vue";
</script>

<template>
  <nav class="navbar">
    <NavbarLogo />
    <NavbarLinks />
    <NavbarSocialMedia />
  </nav>
  <nav class="responsive-navbar">
    <NavbarLinks />
  </nav>
</template>

<style lang="scss">
@import "../../styles/components/Navbar.scss";
</style>
