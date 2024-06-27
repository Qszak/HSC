<template>
<div class="VideoContainer">

<video
class="VideoAsset"
:src="VideoSrc"
autoplay
loop
muted
playsinline
></video>
</div>
</template>

<script>
  import VideoAsset from '@/assets/VideoAsset.mp4';

export default {
   name: "VideoAsset",
   data() {
   return {
       VideoSrc: VideoAsset,
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
 .VideoAsset {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    
 }



</style>