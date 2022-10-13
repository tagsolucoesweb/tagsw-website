<!-- Please remove this file from your project -->
<template>
  <div class="default-page-section box-grid container">
    <BookACallBox />
    <PerformanceBox />
  </div>
</template>

<script setup>
import BookACallBox from './BookACallBox.vue'
import PerformanceBox from './PerformanceBox.vue'
</script>

<style lang="scss">
.box-grid {
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  @include breakpoint(sm-tablet){
    justify-content: space-between;
    flex-direction: row;
  }
  .box {
    background-color: $yellow;
    border-radius: 20px;
    width: 80%;
    padding: 30px;
    margin: 0 auto 0;
    @include breakpoint(sm-tablet){
      padding: 27px 66px 0px;
      width: 50%;
    }
  }
}
</style>
