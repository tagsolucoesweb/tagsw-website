<!-- Please remove this file from your project -->
<template>
  <div class="box book-a-call">
    <h2>Let's book a call?</h2>
    <p>
      Not sure yet if this is what you or your business need. Let’s talk and figure it out. No commitment needed, if I can help you I’ll say. If I can't, I might be able to point out a way for you to solve your necessity.
    </p>
    <ContactModalButton>Book a Call</ContactModalButton>
  </div>
</template>

<script setup>
import ContactModalButton from './ContactModalButton.vue';
</script>

<style lang="scss">
.book-a-call {
  h2 {
    font-size: 28px;
    text-align: center;
  }

  p {
    font-size: 16px;
    margin-bottom: 42px;
    @include breakpoint(lg-tablet) {
      font-size: 18px;
    }
  }
  .button {
    display: flex;
    justify-content: center;
  }
}
</style>
