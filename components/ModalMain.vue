<template>
<div class="modal-main" :class="props.modal ? 'active' : ''">
    <div>
        <h2>Helping your company<br /> reach the next level</h2>
        <div v-if="step.current == 0">
            <h3>Where do you preffer to talk?</h3>
            <ul class="contact-list">
                <li><a class="wpp-link contact-list-item" href="" target="_blank" @click="GoToStep(2)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                    <span class="txt">Whatsapp</span>
                </a></li>
                <li><span class="email-button contact-list-item" @click="NextStep()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                    <span class="txt">E-mail</span>
                </span></li>
            </ul>
        </div>
        <EmailForm v-else-if="step.current == 1" @submit-form=HandleSubmitForm(result) />
        <ThankYouContact v-else-if="step.current == 2" @reset-form=HandleResetForm() />
        <FailFormContact v-else @reset-form=HandleResetForm() />
    </div> 
    <div class="contact-modal-close">
        back
    </div>
</div>
</template>

<script setup>
    import {reactive} from "vue";
    import EmailForm from './EmailForm.vue';
    import FailFormContact from "./FailFormContact.vue";

    const props = defineProps({
        modal: {
            type: Boolean,
            required: true,
        }
    })

    const step = reactive({
        current: 0,
        next: 1,
        previous: null
    });

    function HandleSubmitForm(result){
        if(result){
            NextStep()
        }else{
            GoToFail()
        }
    }

    function HandleResetForm(){
        step.previous = false
        step.current = 0    
        step.next = step.current + 1
    }

    function NextStep(){
        step.previous = step.current
        step.current ++
        step.next = step.current + 1
    }

    function GoToStep(n){
        step.previous = step.current
        step.current = n
        step.next = step.current + 1
    }

    function GoToFail(){
        step.previous = step.current
        step.current = null
        step.next = null
    }
</script>

<style lang="scss">


        .modal-main{
            position: relative;
            opacity: 0;
            transition: all 1s ease;
            background-color: #fff;
            flex-basis: 100%;
            padding: 10px;
            bottom: 0;
            top: 0;
            z-index: 1;
            @include breakpoint(sm-tablet){
                flex-basis: 70%;
                padding: 0;
            }
            @include breakpoint(lg-tablet){
                flex-basis: 80%;
                padding: 0;
            }
            h2{
                text-align: center;
                font: 600 36px/120% $default-title-font;
                @include breakpoint(lg-tablet){
                    font: 600 48px/120% $default-title-font;
                }
            }
            h3{
                text-align: center;
                font: 400 22px/120% $default-title-font;
                @include breakpoint(lg-tablet){
                    font: 400 28px/120% $default-title-font;
                }
            }
            .contact-list{
                margin: 80px 0 40px;
                display: flex;
                justify-content: center;
                gap: 40px;
                @include breakpoint(sm-tablet){
                    gap: 80px;
                }
                li{
                    .contact-list-item{
                        display: block;
                        padding: 40px 50px;
                        background: $yellow;
                        border-radius: 15px;
                        -webkit-box-shadow: 5px 5px 15px 5px #C7C7C7; 
                        box-shadow: 5px 5px 15px 5px #C7C7C7;
                        text-align: center;
                        cursor: pointer;
                        svg{
                            width: 40px;
                            height: auto;
                        }
                        span.txt{
                            font: 400 12px/120% $default-text-font;
                            display: block;
                            text-align: center;
                        }
                    }
                }
            }
            &.active{
                opacity: 1;
            }
            .contact-modal-close{
                position: absolute;
                right: 15px;
                bottom: 35px;
                cursor: pointer;
                text-decoration: underline;
            }
        }
    
</style>