<template>
<div class="modal-sidebar">
    <div class="modal-sidebar-inner">
        <div class="modal-sb-components">
            <h3>Tested Components</h3>
            <p>We develop reusable chunks of code and compose a library of components. This allow us to reuse the code, with a custom layout, and make sure that the functionality doesn't break.</p>
            <svg width="462" height="462" viewBox="0 0 462 462" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M115.254 57.6268V115.254H57.6269V57.6268H115.254ZM28.8135 28.8134V144.067H144.067V28.8134H28.8135Z" fill="black"/>
                <path d="M259.321 100.847V158.474H201.694V100.847H259.321ZM172.88 72.0336V187.287H288.134V72.0336H172.88Z" fill="black"/>
                <path d="M115.254 230.507V288.134H57.6269V230.507H115.254ZM28.8135 201.694V316.948H144.067V201.694H28.8135Z" fill="black"/>
                <path d="M316.947 144.067V230.507H230.507V316.948H144.067V432.201H432.201V144.067H316.947ZM259.321 259.321H316.947V316.948H259.321V259.321ZM230.507 403.388H172.88V345.761H230.507V403.388ZM316.947 403.388H259.321V345.761H316.947V403.388ZM403.388 403.388H345.761V345.761H403.388V403.388ZM403.388 316.948H345.761V259.321H403.388V316.948ZM345.761 230.507V172.881H403.388V230.507H345.761Z" fill="black"/>
            </svg>
        </div>
        <div>
            <h3>High Performance</h3>
            <p>Achieve high performance on your web project with top technology and proven code</p>
            <div>
              <Lottie
                    :options="defaultOptions"
                    :height="300"
                    :width="300"
                    class="performance-anim" 
                    @animCreated="handleAnimation"
              />
            </div>
        </div>
    </div>
</div>
</template>

<script>
  import Lottie from 'vue-lottie/src/lottie.vue'
  import * as animationData from '~/assets/animations/tagsw-performance.json'

  export default {
    name: 'TagswModalSideBar',
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

        .modal-sidebar{
            opacity: 0;
            background-color: $yellow;
            transition: all 1s ease;
            top: 0;
            bottom: 0;
            z-index: 2;
            width: 0;
            padding: 0;
            overflow: hidden;
            @include breakpoint(sm-tablet){
                margin-left: -100px;
                flex-basis: 30%;
                padding: 20px;
                width: auto;
            }
            @include breakpoint(lg-tablet){
                flex-basis: 20%;
            }
            h3{
                font: 600 22px/120% $default-title-font;
                margin-bottom: 20px;
            }
            p{
                font: 400 16px/120% $default-text-font;
            }

            &.active{
                opacity: 1;
                margin-left: 0;   
            }

            .modal-sidebar-inner{
                display: flex;
                flex-direction: column;
                gap: 20px;
                .modal-sb-components{
                    text-align: center;
                    h3, p{
                        text-align: left;
                    }
                    svg{
                        width: 150px;
                        max-width: 100%;
                        height: auto;
                        margin: 20px auto 0;
                    }
                }
            }
        }
    
</style>