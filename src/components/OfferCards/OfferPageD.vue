<template>
<div class="offer-hero"
:style="{ backgroundImage: `url(${imgSrc})` }">
    <div class="offer-promo">
        <div class="subtitle">{{ subtitle }}</div>
        <div class="service">{{ service }}</div>
    </div>
</div>
<div class="timetable-header">Terminarz zajęć</div>
<div class="timetable">
    <div class="timetable-box">
        <div class="timetable-data">
            <div class="day">{{ day }}</div>
            <div class="coach">Prowadzący: {{ coach }}</div>
            <div class="time">godz. {{ time }}</div>
            <div class="group-type">{{ group }}</div>
        </div>
    </div>
</div>
<div class="class-description">
    <div class="description">
        <div class="description-header">Opis zajęć</div>
        <div class="description-text">{{ description }}</div>
    </div>
    <img class="img-description" :src="imgSrc2" :alt="imgAlt2" />
</div>
<div class="class-user">
    <img class="img-users" :src="imgSrc3" :alt="imgAlt3" />
    <div class="users">
        <div class="users-header">Dla kogo</div>
        <div class="users-text">{{ users }}</div>
    </div>
</div>
<div class="class-coach">Prowadzący</div>
<div class="team-slider">

</div>
<div class="promo">
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
            <button class="primary" @click="showModal">Zapisz się!</button>
            <Modal :isVisible="isModalVisible" @close="closeModal"></Modal>
        </div>

        </div>
    </div>
    <Footer />
</template>

<script>
import { ref } from 'vue';
import Modal from '../home/Modal.vue';
import VideoContent from '@/assets/VideoContent.mp4';
import Footer from '../home/15Footer.vue';


export default {
    name: "OfferPage",
    components: {
        Modal,
        Footer,
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
@media (min-width: 960px){
.offer-hero {
    width: calc(100svw - var(--scrollbarWidth));
    height: 30rem;
    flex-shrink: 0;
}
.offer-promo {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
}
.subtitle {
    width: 39.5rem;
    color: #FFF;
    text-align: center;
    font-family: Montserrat;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 300;
    line-height: 1.8rem;
    letter-spacing: 0.03rem;
    text-transform: uppercase;
}
.service {
    width: 39.5rem;
    color: #FFF;
    text-align: center;
    font-family: Montserrat;
    font-size: 4.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 5.4rem;
    letter-spacing: 0.09rem;
    text-transform: uppercase;
}
.timetable-header {
    width: 81rem;
    color: #000;
    text-align: center;
    font-family: "Montserrat";
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3rem;
    letter-spacing: 0.04rem;
    text-transform: uppercase;
}
.timetable {
    display: flex;
    width: 53.375rem;
    align-items: flex-start;
    gap: 2rem;
}
.timetable-box {
    display: flex;
    padding: var(--space-200, 1rem);
    flex-direction: column;
    align-items: center;
    gap: 0.625rem;
    flex: 1 0 0;
    border-radius: var(--radius-200, 1rem);
    background: var(--Surface-Secondary, #F5F5F5);
}
.timetable-data {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-200, 1rem);
}
.day {
    color: #000;
    font-family: "Montserrat";
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.2rem;
    letter-spacing: 0.02rem;
}
.coach .time .group-type {
    color: #000;
    font-family: "Montserrat";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.05rem;
    letter-spacing: 0.0175rem;
}
.class-description {
    display: inline-flex;
    align-items: flex-start;
    gap: 2rem;
}
.description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-200, 1rem);
}
.description-header .users-header {
    width: 39.5rem;
    color: #000;
    font-family: "Montserrat";
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3rem;
    letter-spacing: 0.04rem;
    text-transform: uppercase;
}
.description-text .users-text {
    width: 39.5rem;
    color: var(--Text-Background-text-inverse, #313131);
    font-family: "Montserrat";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: 0.0225rem;
}
.img-description {
    width: 39.5rem;
    height: 26.3125rem;
    background: lightgray 50% / cover no-repeat;
}
.class-user {
    display: inline-flex;
    align-items: flex-start;
    gap: 2rem;
}
.img-users {
    width: 39.5rem;
    height: 26.3125rem;
    background: lightgray 50% / cover no-repeat;
}
.users {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-200, 1rem);
}
.class-coach {
    width: 53.3125rem;
    color: #000;
    font-family: "Montserrat";
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3rem;
    letter-spacing: 0.04rem;
    text-transform: uppercase;
}
.team-slider {
    display: flex;
    width: 90vw;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    gap: 2rem;
    flex-wrap: wrap;
}
.promo {
    width: calc(100svw - var(--scrollbarWidth));
    background: rgba(7, 7, 7, 0.50);
}
.video-container {
    position: relative;
    width: 100%;
    height: 50vh;
    padding: 0rem var(--space-200, 1rem);
    display: flex;
    justify-content: center; 
    align-items: center;
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
    font-family: Montserrat;
    font-size: 4.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 5.4rem;
    letter-spacing: 0.09rem;
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
  font-family: Montserrat;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  text-transform: uppercase;
  cursor: pointer;
  }
}
</style>