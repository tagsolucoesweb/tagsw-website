<!-- Please remove this file from your project -->
<template>
  <div class="default-page-section faq">
    <h2>{{ $t(content.headline) }}</h2>
    <ul class="faq-list">
      <li v-for="(faqObj, key) in content.questions" :key="key">
        <FaqItem :faq-item="faqObj" />
      </li>
      <!-- question loop -->
    </ul>
    <div class="bg-faq">
      <nuxt-img src="images/bg-faq.png" alt="Case Background" />
    </div>
  </div>
</template>

<script setup>
import { content } from '../data/faq'
import FaqItem from './FaqItem.vue'
</script>

<style lang="scss">
.faq {
  position: relative;
  h2 {
    text-align: center;
  }
  .faq-list {
    @include container;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .bg-faq{
    position: absolute;
    top:-100px;
    bottom: 0;
    left: 10px;
    width: 50%;
    z-index: -1;
    @include breakpoint(sm-tablet){
      width: 100%;
    }
    img{
      max-width: 100%;
    }
  }
}
</style>
