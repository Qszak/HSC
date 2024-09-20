<template>

    <div class="offer-slider">
        <KickboxingCard/>
        <BoksCard/>
        <MMACard/>
    </div>

</template>

<script>
import KickboxingCard from '../OfferCards/kickboxing.vue';
import BoksCard from '@/components/OfferCards/boks.vue';
import MMACard from '@/components/OfferCards/mma.vue';

export default {
    name: 'OfferSlider',
    components: {
        KickboxingCard,
        BoksCard,
        MMACard,
    }
}
</script>


<style scoped>

.offer-slider {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    align-items: center;
    align-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    margin: 0 5vw;
    overflow: hidden;
}

</style>