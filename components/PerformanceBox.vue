<!-- Please remove this file from your project -->
<template>
  <div class="box performance">
    <h2>High Performance</h2>
    
    <p>
      We build everything to not just be beautiful but to achieve the higher
      performance standarts. All websites and apps are lightining fast tested on
      mutiple page load tools.
    </p>

    <div>
      <Lottie
            :options="defaultOptions"
            :height="300"
            :width="300"
            class="hero-anim" 
            @animCreated="handleAnimation"
      />
    </div>
  </div>
</template>

<script>
  import Lottie from 'vue-lottie/src/lottie.vue'
  import * as animationData from '~/assets/animations/tagsw-performance.json'

  export default {
  name: 'TagswPerformanceBox',
  components: { Lottie },
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
.performance {
  h2 {
    font-size: 28px;
    text-align: center;
  }

  p {
    font-size: 16px;
    @include breakpoint(lg-tablet) {
      font-size: 18px;
    }
  }
}
</style>
