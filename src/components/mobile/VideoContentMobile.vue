<template>
    <div class="video-container">
    
      <video
      class="video-player"
      :src="VideoSrc"
      autoplay
      loop
      muted
      playsinline
      ></video>
     
    <div class="content">
      <p class="text">Trenuj z nami</p>
      <button class="primary" @click="showModal">Dołącz do nas!</button>
      <Modal :isVisible="isModalVisible" @close="closeModal"></Modal>
    </div>
    
    
    </div> 
    </template>
    
    <script>
      import { ref } from 'vue';
      import Modal from '@/components/home/Modal.vue';
      import VideoContent from '@/assets/VideoContent.mp4';
    
    
      export default {
         name: "VideoContentMobile",
         components: {
          Modal,
         },
         data() {
         return {
             VideoSrc: VideoContent,
           };
        },
        setup() {
            const isModalVisible = ref(false);
            const showModal = () => {
                isModalVisible.value = true;
            };
    
            const closeModal = () => {
                isModalVisible.value = false;
            };
            
            return {
                isModalVisible,
                showModal,
                closeModal,
            };
        },
       };
    </script>
    
    <style scoped>
    
      
      .video-container {
        position: relative;
        width: calc(100svw - var(--scrollbarWidth));
        height: 50svh;
        padding: 10rem var(--space-200, 1rem);
        flex-direction: column;
        align-items: center;
        gap: var(--space-300, 1.5rem);
        
      }
       .video-player {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
       }
      
       .content {
        position: relative;
        z-index: 1;
        text-align: center;
        
       }
      p.text {
        width: 100%;
        color: #FFF;
        text-align: center;
    
        /* Headings/Desktop/S */
        font-family: Montserrat;
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3rem; /* 150% */
        letter-spacing: 0.04rem;
        text-transform: uppercase;
      
      }
      
      button.primary {
      margin-top: 2rem;
      padding: 1.25rem 3rem;
      justify-content: center;
      
      gap: 1rem;
      
      background: var(--Surface-Brand, #E30613);
      color: var(--Text-Inverse-primary, #FFF);
      text-align: center;
    
      /* Action/Large/Bold */
      font-family: Montserrat;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 700;
      line-height: 1.5rem; /* 133.333% */
      text-transform: uppercase;
      cursor: pointer;
      }
      