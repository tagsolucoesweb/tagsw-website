<!-- Please remove this file from your project -->
<template>
  <div class="default-page-section projects-and-cases">
    <h2>{{ $t(content.headline) }}</h2>
    <div class="projects-grid-outer">
      <div class="projects-grid-inner">
        <div class="grid">
          <div
            v-for="(project, key) in content.projects"
            :key="key"
            class="grid-item"
          >
            <a href="tagsw-portifolio.pdf" target="_blank">
              <nuxt-img
                :src="project.image"
                :title="project.title"
                :alt="project.title"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-wrap">
      <DefaultButton :target="'tagsw-portifolio.pdf'">
        {{ $t("See more projects") }}
      </DefaultButton>
    </div>
    <div class="bg-case">
      <nuxt-img src="images/bg-cases.png" alt="Case Background" />
    </div>
  </div>
</template>

<script setup>
import { content } from '../data/projects'
</script>

<style lang="scss">
.projects-and-cases {
  position: relative;
  h2 {
    text-align: center;
  }
  .projects-grid-outer {
    @include container;

    .projects-grid-inner {
      .grid {
        display: grid;
        width: 100%;
        grid-template-columns: 1fr;
        gap: 40px 0;
        text-align: center;
        justify-content: center;
        @include breakpoint(sm-tablet){
          gap: 20px;
          grid-template-columns: 1fr 1fr 1fr;
        }
        .grid-item {
          position: relative;
          transition: transform 0.5s ease;
          img {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
          &:nth-child(2),
          &:nth-child(3) {
            grid-column: span 2;
          }
          &:hover {
            transform: scale(1.05);
          }
        }
      }
    }
  }
  .btn-wrap {
    text-align: center;
    margin: 40px 0;
  }
  .bg-case{
    position: absolute;
    top:-250px;
    left:0;
    width: 100%;
    z-index: -1;
    display: none;
    @include breakpoint(lg-tablet){
      display: block;
    }
    img{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
