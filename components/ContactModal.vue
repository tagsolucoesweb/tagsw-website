<template>
    <div class="contact-modal-outer">
        <div class="modal-flexbox">
            <ModalSidebar :modal=modalActive.show />
            <ModalMain :modal=modalActive.show /> 
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import ModalSidebar from './ModalSidebar.vue'
import ModalMain from './ModalMain.vue'

const modalActive = reactive({
    show: false
})


onMounted(() => {
    const trigger = document.querySelectorAll('.contact-modal-open')
    const closeModalBtns = document.querySelectorAll('.contact-modal-close')
    
    if(trigger != null){
        trigger.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault()
                openModal()
            })
        });
    }
    
    if(closeModalBtns != null){
        closeModalBtns.forEach( btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault()
                closeModal();
            })
        })
    }
    function openModal(){
          modalActive.show = true

          const modalContent = document.querySelector('.contact-modal-outer')
          const sidebar = modalContent.querySelector('.modal-sidebar')
          if(modalContent.classList.contains('go-to-back')){
            modalContent.classList.remove('go-to-back')
          }
          sidebar.classList.add('active')  
          setTimeout( () => { modalContent.classList.add('active') }, 100 )
          
          
          document.body.classList.add('modal-overlay')
    }
    
    function closeModal(){
          modalActive.show = false
          const modal = document.querySelector('.contact-modal-outer')
          modal.classList.remove('active')
          setTimeout( () => { modal.classList.add('go-to-back') }, 800 )
          const sidebar = modal.querySelector('.modal-sidebar')
          sidebar.classList.remove('active')

          document.body.classList.remove('modal-overlay')
    }
})



</script>

<style lang="scss">
    .contact-modal-outer{
        position: fixed;
        top:0;
        bottom:0;
        left: 0;
        right: 0;
        max-width: 100%;
        overflow: hidden;
        visibility: hidden;
        opacity: 0;
        transition: opacity 1s ease;
        .modal-flexbox{
            display: flex;
            justify-content: space-between;
            transition: all 1s ease;
            height: 105vh;
            gap: 0;
            width: 100%;
            @include breakpoint(sm-tablet){
                width: 110%;
            }
        }
        &.active{
            z-index: 9999;
            visibility: visible;
            opacity: 1;
            .modal-flexbox{
                width: 100%;
            }
        }
        &.go-to-back{
            z-index: -9999;
        }
    }
</style>