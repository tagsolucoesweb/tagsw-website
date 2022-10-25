<!-- Please remove this file from your project -->
<template>
  <div class="nav-bar">
    <!-- <nuxt-link class="home-btn" to="/">Home</nuxt-link> -->
    <!-- <nuxt-link to="/about">About</nuxt-link> -->
    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)">
        {{ locale.code }}
      </nuxt-link>
    <ContactModalButton>{{ $t("Chat with us") }}</ContactModalButton>
  </div>
</template>

<script>
import ContactModalButton from './ContactModalButton.vue';
export default {
  name: 'TagswNavbar',
  components: { ContactModalButton },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
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
