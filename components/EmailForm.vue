<!-- Please remove this file from your project -->
<template>
    <div class="email-form-wrap">
        <h4>{{$t("Fill your e-mail above and, if you want to, give some details of what are your needs. I'll answer to you in a heart bit.")}}</h4>
        <form ref="form" class="form" @submit.prevent="sendMail">
            <div class="form-group">
                <input name="email" placeholder="E-mail" type="email" :value="inputFieldReset" required>
            </div>
            <div class="form-group">
                <textarea class="text-area" name="message" :placeholder="$t('Message')" type="text" :value="inputFieldReset"></textarea>
            </div>
            <div class="form-group">
            <input class="submit" type="submit" name="send" :value="$t('Submit')" />
            </div>
        </form>
    </div>
</template>
  
<script>
    import {ref} from 'vue';
    import emailjs from '@emailjs/browser';

    export default {
        emits: [ 'submit-form' ],

        setup() {
            const inputFieldReset = ref(null);
            
            return{
                inputFieldReset,
            }
        },
        
        methods: {
            sendMail() {                
                emailjs.sendForm('service_9uu6iii', 'template_pk8dmj2', this.$refs.form, '9WBwKWhI1bWTnCz--')
                .then(() => {
                    this.$emit('submit-form', true)
                }, () => {
                    this.$emit('submit-form', false)
                }); 
            }
        }

    }
</script>
  
<style lang="scss">
  .email-form-wrap{
      margin: 20px auto;
      max-width: 100%;
      padding: 20px 0;
      background-color: $yellow;
      @include breakpoint(sm-tablet){
          max-width: 600px;
      }
      h4{
        max-width: 500px;
        font: 400 22px/120% $default-text-font;
        margin: 40px 20px;
        text-align: center;
        @include breakpoint(sm-tablet){
            margin: 40px auto;
        }
      }
      form{
        display: flex;
        flex-direction: column;
        gap:40px;
        align-items: center;
        @include breakpoint(sm-tablet){
            align-items: center;    
        }
        .form-group{
            width:75%;
            @include breakpoint(sm-tablet){
                width: auto;
            }
            input[type=email], textarea{
                max-width: 100%;
                width: 100%;
                padding: 10px;
                border-radius: 5px;
                border: 1px solid $darkGray;
                font: 400 16px/120% $default-text-font; 
                @include breakpoint(sm-tablet){
                    min-width: 300px;
                    width: auto;
                }
            }
            input[type=submit]{
                background-color: #d9d9d9;
                color: #000000;
                font-size: 16px;
                border-radius: 5px;
                padding: 10px 27px;
                display: inline-block;
                font: 400 16px / 150% $default-text-font;
                border: none;
                cursor: pointer;
                @include breakpoint(lg-tablet) {
                    font: 400 18px / 150% $default-text-font;
                }
            }
        }
      }
  }
</style>
  