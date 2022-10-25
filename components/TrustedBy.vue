<!-- Please remove this file from your project -->
<template>
  <div class="trusted-by">
    <h3>{{ $t(content.headline) }}</h3>
    <div class="costumer-grid-outer">
      <ul class="costumer-grid-inner">
        <li v-for="(costumerObj, key) in content.costumers" :key="key">
          <nuxt-img
            :src="costumerObj.image"
            :alt="costumerObj.title"
            :title="costumerObj.title"
            loading="lazy"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { content } from '../data/trustedBy'

onMounted(() => {
  const screenWidth = window.innerWidth;

  if(screenWidth > 768){
    window.addEventListener('scroll', () => {
      const grid = document.querySelector('.costumer-grid-inner')
      grid.style.left = '-' + window.pageYOffset * 0.3 + 'px'
    })
  }
})
</script>

<style lang="scss">
.trusted-by {
  background-color: $darkGray;
  padding: 60px 0;
  h3 {
    @include container;
    color: #ffffff;
    font-size: 18px;
    font-family: $default-text-font;
  }
  .costumer-grid-outer {
    width: 100%;
    overflow: hidden;
    position: relative;
    height: auto;
    @include breakpoint(sm-tablet){
      height: 150px;
    }
    .costumer-grid-inner {
      display: flex;
      align-items: center;
      gap: 40px;
      flex-wrap: wrap;
      justify-content: center;
      margin-top:20px;
      li{
        width: calc(100%/4);
        img, svg{
          max-width: 100%;
        }
      } 
      @include breakpoint(sm-tablet){
        position: absolute;
        left: 0;
        width: 100%;
        width: 130%;
        justify-content: space-between;
        flex-wrap: nowrap;
        margin-top: unset;
        li{
          width: auto;
          max-width: 120px;
          img, svg{
            max-width: 100%;
          }
        }
      }
      @include breakpoint(sm-desktop){
        width: 115%;
        li{
          img, svg{
            max-width: unset;
          }
        }
      }
    }
  }
}
</style>
