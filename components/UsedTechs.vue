<!-- Please remove this file from your project -->
<template>
  <div class="default-page-section technologies">
    <h2>{{ content.headline }}</h2>
    <div class="tech-grid-outer">
      <ul class="tech-grid-inner">
        <li v-for="(techObj, key) in content.techs" :key="key">
          <nuxt-img
            :src="techObj.image"
            :alt="techObj.title"
            :title="techObj.title"
            loading="lazy"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { content } from '../data/techs'
</script>

<style lang="scss">
.technologies {
  h2 {
    font-size: 28px;
    text-align: center;
  }
  .tech-grid-outer {
    @include container;
    .tech-grid-inner {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      li{
        width: calc(100% / 3);
        text-align: center;
        img{
          max-width: 100%;
          height: auto;
        }
      }
      @include breakpoint(lg-tablet){
        flex-wrap: nowrap;
        justify-content: space-between;
        li{
          width: auto;
        }
      }
    }
  }
}
</style>
