<template>
  <header class="container">
    <HeaderLogo />
    <NavBar />
  </header>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
  name: 'TagswSiteHeader',
  components: { NavBar },
}
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0;
  align-items: center;
}
</style>
