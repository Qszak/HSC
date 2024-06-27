<template>
<div class="VideoContainer">

  <video
  class="VideoPlayer"
  :src="VideoSrc"
  autoplay
  loop
  muted
  playsinline
  ></video>
 
<div class="Content">
  <p class="Text">Trenuj z nami</p>
  <button class="Primary">Lorem Ipsum</button>
</div>


</div> 
</template>

<script>
  import VideoContent from '@/assets/VideoContent.mp4';

  export default {
     name: "VideoContent",
     data() {
     return {
         VideoSrc: VideoContent,
       };
    },
   };
</script>

<style scoped>
.VideoContainer {
  position: relative;
  width: calc(100svw - var(--scrollbarWidth));
  height: 50svh;
  padding: 10rem;
  flex-direction: column;
  align-items: center;
  gap: 1.4375rem;
  overflow: hidden;
  
}
 .VideoPlayer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
 }

 .Content {
  position: relative;
  z-index: 1;
  text-align: center;
  
 }
p.Text {
  
  width: 100%;
  color: #FFF;
  text-align: center;
  font-family: Montserrat;
  font-size: 4.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 5.4rem */
  letter-spacing: 0.09rem;
  text-transform: uppercase;

}

button {
  margin-top: 3rem;
  padding: 1.25rem 3rem;
  gap: 0.625rem;
  background: var(--Surface-Brand, #E30613);
  color: #FFF;
  text-align: center;
  font-family: "Montserrat";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem; /* 133.333% */
  text-transform: uppercase;
}
</style>