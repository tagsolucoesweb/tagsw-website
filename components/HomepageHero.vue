<!-- Please remove this file from your project -->
<template>
  <div class="homepage-hero">
    
      <div>
        <h1>We build <strong>Brands</strong></h1>
        <h2>The whole thing without you need to worry about</h2>
        <DefaultButton>Let's book a call</DefaultButton>
      </div>
      <div>
        <Lottie
          :options="defaultOptions"
          :height="600"
          :width="600"
          class="hero-anim" 
          @animCreated="handleAnimation"
        />
      </div>
    
    <div class="bg-hero">
      <img src="images/bg-hero.png" alt="tagsw">
    </div>
    <div class="bg-hero-mobile">
      <img src="images/bg-hero-mobile.png" alt="tagsw">
    </div>
  </div>
</template>

<script>
import Lottie from 'vue-lottie/src/lottie.vue'
import DefaultButton from './DefaultButton.vue'
import * as animationData from '~/assets/animations/tagsw-hero-anim.json'

export default {
  name: 'TagswHomepageHero',
  components: { DefaultButton, Lottie },
  data() {
    return {
      anim: null, // for saving the reference to the animation
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 1,
    }
  },
  methods: {
    handleAnimation(anim) {
      this.anim = anim
    },
  },
}
</script>

<style lang="scss">
.homepage-hero {
  @include container;
  text-align: center;
  .bg-hero{
    position: absolute;
    left:0;
    top:160px;
    z-index: -1;
    display: none;
    @include breakpoint(sm-tablet){
      display: block;
    }
    img{
      object-fit: cover;
      width: 90%;
      height: auto;
    }
  }
  .bg-hero-mobile{
    position: absolute;
    top:160px;
    left: 0;
    width:100%;
    z-index: -1;
    img{
      object-fit: cover;
      width: 100%;
      height: auto;
    }
    @include breakpoint(sm-tablet){
      display: none;
    }
  }
    
  h1,
  h2 {
    text-align: center;
  }

  h1 {
    margin-bottom: 40px;
  }

  h2 {
    font-size: 28px;
    font-weight: 400;
    margin-bottom: 40px;
  }
  .button {
    margin-bottom: 20px;
  }
  .hero-anim{
    max-width: 100%;
    width:600px;
  }
  svg{
    margin-top: -100px;
    max-width: 100%;
  }
}
</style>
