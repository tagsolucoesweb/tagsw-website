<!-- Please remove this file from your project -->
<template>
  <div class="button">
    <div class="default-button contact-modal-open">
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.button {
  .default-button {
    font-size: 16px;
    border: 2px solid #000;
    border-radius: 5px;
    padding: 10px 27px;
    display: inline-block;
    font: 500 16px / 150% $default-text-font;
    cursor: pointer;
    color: #000;
    background-color: $yellow;
    transition: all .7s ease;
    @include breakpoint(lg-tablet) {
      font: 400 18px / 150% $default-text-font;
    }
    &:hover{
      color: $yellow;
      background-color: #000;
    }
  }
}
</style>
