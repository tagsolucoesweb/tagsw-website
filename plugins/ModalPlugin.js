import Vue from "vue";

Vue.mixin({
    methods: {
        openModal(modalActive){
            modalActive.show = true
  
            const modalContent = document.querySelector('.contact-modal-outer')
            const sidebar = modalContent.querySelector('.modal-sidebar')
            if(modalContent.classList.contains('go-to-back')){
              modalContent.classList.remove('go-to-back')
            }
            sidebar.classList.add('active')  
            modalContent.classList.add('active')
            
            document.body.classList.add('modal-overlay')
        },

        closeModal(modalActive){
            modalActive.show = false
            const modal = document.querySelector('.contact-modal-outer')
            modal.classList.remove('active')
            setTimeout( () => { modal.classList.add('go-to-back') }, 800 )
            const sidebar = modal.querySelector('.modal-sidebar')
            sidebar.classList.remove('active')
  
            document.body.classList.remove('modal-overlay')
        }
    }
})