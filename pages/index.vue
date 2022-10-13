<template>
  <div class="homepage">
    <HomepageHero />

    <TrustedBy />

    <ProjectsAndCases />

    <UsedTechs />

    <BoxGrid />

    <FaqSection />
  </div>
</template>

<script setup>
import HomepageHero from '../components/HomepageHero.vue'
import TrustedBy from '../components/TrustedBy.vue'
import UsedTechs from '../components/UsedTechs.vue'
import ProjectsAndCases from '~/components/ProjectsAndCases.vue'
import BoxGrid from '~/components/BoxGrid.vue'
import FaqSection from '~/components/FaqSection.vue'
</script>

<style lang="scss">
.default-page-section {
  margin-top: 40px;
  margin-bottom: 40px;
  @include breakpoint(lg-tablet) {
    margin-top: 80px;
    margin-bottom: 80px;
  }
}
</style>
