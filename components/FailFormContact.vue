<template>
    <div class="contact-thanks">
        <h3>{{$t("Ops! Something went wrong. You can try again or choose some other way to contact us.")}}</h3>
        <span @click="$emit('reset-form', true)">Start a new contact</span>
    </div>
</template>
<script setup>
    defineEmits(["reset-form"])
    
</script>
<style lang="scss">
    .contact-thanks{
        h3{
            max-width: 500px;
            font: 400 22px/120% $default-text-font;
            margin: 40px auto 40px;
            text-align: center;
        }
        span{
            display: block;
            text-align: center;
            font: 400 16px/120% $default-text-font;
            text-decoration: underline;
            cursor: pointer;
        }
    }
</style>