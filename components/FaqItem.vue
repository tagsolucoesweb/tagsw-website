<!-- Please remove this file from your project -->
<template>
  <div class="faq-item">
    <div class="question" @click="expanded = !expanded">
      <span class="question">{{ $t(props.faqItem.question) }}</span>
      <span
        :class="expanded ? 'content-open' : 'content-close'"
        class="icon-wrap"
        ><svg
          clip-rule="evenodd"
          fill-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
            fill-rule="nonzero"
          /></svg
      ></span>
    </div>
    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div v-if="expanded" class="answer">{{ $t(props.faqItem.answer) }}</div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  faqItem: {
    type: Object,
    required: true,
    default() {
      return {}
    },
  },
})

const expanded = ref(false)

function start(el) {
  el.style.height = el.scrollHeight + 'px'
}

function end(el) {
  el.style.height = ''
}
</script>

<style lang="scss">
.faq {
  .faq-list {
    .faq-item {
      display: flex;
      flex-direction: column;
      gap: 20px;
      background-color: $lightGray;
      border-radius: 15px;
      padding: 20px;
      .question {
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        align-items: center;
        .question{
          max-width: 75%;
          @include breakpoint(sm-tablet){
            max-width: 90%;
          }
        }
        .icon-wrap {
          width: 25px;
          height: auto;
          transition: transform 0.5s ease;
          &.content-close {
            transform: rotate(0deg);
          }

          &.content-open {
            transform: rotate(45deg);
          }
        }
      }
      .accordion-enter-active,
      .accordion-leave-active {
        will-change: height, opacity;
        transition: height 0.3s ease, opacity 0.3s ease;
        overflow: hidden;
      }

      .accordion-enter,
      .accordion-leave-to {
        height: 0 !important;
        opacity: 0;
      }
    }
  }
}
</style>
