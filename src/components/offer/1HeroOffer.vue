<template>
    <div class="hero-offer">
        <div class="video-container">
    
    <video
    class="video-player"
    :src="VideoSrc"
    autoplay
    loop
    muted
    playsinline
    ></video>
            <div class="text-box">
                <div class="text-box-top">Nasza</div>
                <div class="text-box-bottom">oferta</div>
            </div>
        </div>
        <div class="offer-slider">
        <KickboxingCard/>
        <BoksCard/>
        <MMACard/>
    </div>
    </div>

</template>

<script>
import VideoContent from '@/assets/VideoHero.mp4';
import KickboxingCard from '../OfferCards/kickboxing.vue';
import BoksCard from '@/components/OfferCards/boks.vue';
import MMACard from '@/components/OfferCards/mma.vue';

export default {
    name: 'HeroOffer',
    components: {
        KickboxingCard,
        BoksCard,
        MMACard,
    },

    data() {
         return {
             VideoSrc: VideoContent,
           };
        },
}
</script>

<style scoped>

.hero-offer {
    width: calc(100svw - var(--scrollbarWidth));
    height: 30rem;
    flex-shrink: 0;
}

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
.text-box {

        position: relative;
        z-index: 1;
        text-align: center;
        left: 30%;
}
.text-box-top {
    width: 39.5rem;
    color: #FFF;
    text-align: center;
    font-family: Montserrat;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 300;
    line-height: 120%; /* 1.8rem */
    letter-spacing: 0.03rem;
    text-transform: uppercase;
}

.text-box-bottom {
    width: 39.5rem;
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