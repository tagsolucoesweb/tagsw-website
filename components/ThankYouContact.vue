<template>
    <div class="contact-thanks">
        <h3>Thanks for contacting us! You'll heard about us in a short time. =)</h3>
        <span @click="$emit('reset-form')">New Contact</span>
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
    }
</style>