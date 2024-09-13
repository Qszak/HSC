<template>
<div class="gallery">

  <img :src="photo" alt="boys">
  <img :src="photo" alt="boys">
  <img :src="photo" alt="boys">
  <img :src="photo" alt="boys">
 
</div>
</template>


<script>
import photo from '@/assets/gym-photo.jpg';


export default {
    name: 'ImageGallery',
 
    data() {
        return {
            photo,
        };
    },
  
};

</script>

<style scoped>
.gallery {
  width: calc(100svw - var(--scrollbarWidth));
  display: inline-flex;
align-items: flex-start;
gap: var(--space-100, 0.5rem);
}
img {
  display: block;
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
  overflow: hidden;
}



</style>

