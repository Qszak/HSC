<template>
<div class="Gallery">
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
            photo
        };
    },
};

</script>

<style scoped>

.Gallery {
    height: 50svh;
    max-width: calc(100svw - var(--scrollbarWidth));
    display: inline-flex;
    align-items: center;
    gap: var(--space-100, 0.5rem);
    object-fit: cover;
    overflow: hidden;
    
}

img {
    width: 50%;

}



</style>