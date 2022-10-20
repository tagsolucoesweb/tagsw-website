<!-- Please remove this file from your project -->
<template>
  <div class="nav-bar">
    <!-- <nuxt-link class="home-btn" to="/">Home</nuxt-link> -->
    <!-- <nuxt-link to="/about">About</nuxt-link> -->
    <ContactModalButton>Chat with us</ContactModalButton>
  </div>
</template>

<script>
import ContactModalButton from './ContactModalButton.vue';
export default {
  name: 'TagswNavbar',
  components: { ContactModalButton },
}
</script>

<style lang="scss">
.nav-bar {
  display: flex;
  gap: 35px;
  align-items: center;
  a,
  span {
    text-transform: uppercase;
    text-decoration: none;
    color: inherit;
    font: 400 16px / 150% $default-text-font;

    &.nuxt-link-active {
      font-weight: bold;
    }

    &:hover {
      text-decoration: underline;
    }
  }
  a.home-btn{
    display: none;
    @include breakpoint(sm-tablet){
      display: block;
    }
  }
}
</style>
