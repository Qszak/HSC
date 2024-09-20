<template>

<div class="section-1">
    <div class="section-1-text">
        <p class="section-1-header">Jak to się zaczęło</p>
        <p class="section-1-text">Będąc trenerami z długoletnim stażem, w pewnym momencie narodziła się w nas myśl dalszego rozwoju i jedną z dróg było wykreowanie własnego miejsca, w którym będziemy mogli dawać wartość ludziom. W ten sposób w małej kameralnej siłowni w centrum miasta, w której każdy z nas pracował, wspólnie stwierdziliśmy, że to czas najwyższy na wejście na inny wymiar pracy z ludźmi.</p>
    </div>
    <img class="single" :src="Photo1" alt="Założyciele">
</div>
<div class="section-2">
    <div class="section-2-text">
        <p class="section-2-header">Dokąd zmierzamy</p>
        <p class="section-2-text">Chcemy rozwijać nasze wymarzone miejsce do treningów oraz cały nasz zespół, z którym współpracujemy. Działając synergistycznie w naszej ekipie, dążymy wspólnie do silnego zaznaczenia się na mapie Wrocławia jako solidne i jakościowa marka, która będzie kojarzona pozytywnie.</p>
    </div>
    <img class="single" :src="Photo1" alt="Założyciele">
</div>
<div class="section-3">
    <div class="section-3-text">
        <p class="section-3-header">Nasze centrum</p>
        <p class="section-3-text">Naszym założeniem było stworzenie studia kompletnego, tak aby każdy, kto podejmie z nami współpracę, zalazł coś dla siebie. Swoim zaangażowaniem wprowadzamy spory wachlarz możliwości, aby nasi podopieczni mogli rozwijać swoje pasje oraz poznawać nowe. Stale rozwijamy nasze miejsce i wychodzimy naprzeciw oczekiwaniom oraz potrzebom klientów, wprowadzając nowe procesy usprawniające funkcjonowanie Holistic Sport Center.</p>
    </div>
   <div class="slider">
    <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'1'"
    :coverflowEffect="{
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
    }"
    :pagination="true"
    :modules="modules"
    :breakpoints="{ 1300:{
      slidesPerView: 2,
      coverflowEffect: {
        rotate: 0,
        stretch: -30,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
    },
    }"
    class="swiper-dynamic">
      <swiper-slide>
        <img class="slide" :src="photos" alt="boys">
      </swiper-slide>
      <swiper-slide>
        <img class="slide" :src="photos" alt="boys">
      </swiper-slide>
      <swiper-slide>
        <img class="slide" :src="photos" alt="boys">
      </swiper-slide>
      <swiper-slide>
        <img class="slide" :src="photos" alt="boys">
      </swiper-slide>
  </swiper>
</div>  
</div>
<div class="section-3">
    <div class="section-3-text">
        <p class="section-3-header">Kadra</p>
        <p class="section-3-text">Na naszej trenerskiej ścieżce pojawiło się wielu specjalistów, którzy wyróżniają się swoim profesjonalnym podejściem do ludzi jako Trener, ale też jako dobry znajomy czy przyjaciel. Każdy z nas ma ciągłą chęć rozwoju i wspólnie wspieramy się w tym aspekcie, tworząc małą "siłownianą rodzinę". Zgrywając się na wielu płaszczyznach, tworzymy w naszym klubie niesamowity i przyjazny klimat, który jest naszym niebywałym atutem, co również odczuwają nasi podopieczni. Zapoznaj się z naszą kadrą!</p>
    </div>
<SwiperTeam/>
</div>
<RouterLink to="/kadra" class="meet-crew">Zobacz naszą kadrę</RouterLink>

</template>

<script>
import photo from '@/assets/team/Michał Kulej.jpg';
import SwiperTeam from '@/components/mobile/SliderTeam.vue';
import { RouterLink } from 'vue-router';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import photos from '@/assets/gym-photo.jpg';

export default {
    name: 'Section',
    components: {
        SwiperTeam,
        RouterLink,
        Swiper,
        SwiperSlide,
    },

    data() {
        return {
            Photo1: photo,
            photos,
        };
      },
    setup() {
      return {
        modules: [EffectCoverflow, Pagination],
      };
    },
  
}

</script>

<style scoped>
@media (max-width: 640px) {
.section-1 {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 0rem var(--space-200, 1rem);
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-200, 1rem);
}

.section-2 {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 0rem var(--space-200, 1rem);
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-200, 1rem);
}

.section-3 {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 0rem var(--space-200, 1rem);
    flex-direction: column;
    align-items: center;
    gap: var(--space-200, 1rem);
}

div.section-1-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-200, 1rem);
    align-self: stretch;
}

div.section-2-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-200, 1rem);
    align-self: stretch;
}


div.section-3-text {
    display: flex;
    width: 23.5rem;
    padding: 0rem var(--space-200, 1rem);
    flex-direction: column;
    align-items: center;
    gap: var(--space-200, 1rem);
}

p.section-1-header {
    align-self: stretch;
    color: var(--Text-Primary, #181818);
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem;
    letter-spacing: 0.0225rem;
    text-transform: uppercase;
    margin-top: 5vh;
}

p.section-2-header {
    align-self: stretch;
    color: var(--Text-Primary, #181818);
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem;
    letter-spacing: 0.0225rem;
    text-transform: uppercase;
    margin-top: 5vh;
}

p.section-3-header {
    align-self: stretch;
    color: var(--Text-Primary, #181818);
    text-align: center;
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem;
    letter-spacing: 0.0225rem;
    text-transform: uppercase;
    margin-top: 5vh;
}

p.section-1-text {
    align-self: stretch;
    color: var(--Text-Secondary, #484848);
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
    letter-spacing: -0.00563rem;
}

p.section-2-text {
    align-self: stretch;
    color: var(--Text-Secondary, #484848);
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
    letter-spacing: -0.00563rem;
}

p.section-3-text {
    align-self: stretch;
    color: var(--Text-Secondary, #484848);
    text-align: center;
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
    letter-spacing: -0.00563rem;
}

img.single {
    display: flex;
    width: 21.4375rem;
    height: 21.4375rem;
    object-fit: contain;
    margin: 5vh auto 0 auto;

}

.meet-crew {
    display: flex;
    padding: 1.25rem 3rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    align-self: stretch;
    background: var(--Surface-Brand, #E30613);
    color: var(--Text-Inverse-primary, #FFF);
    max-width: 350px;
    margin: 2vh auto 5vh auto;

    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
}

.slider {
    display: flex;
    align-items: center;
    gap: var(--space-300, 1.5rem);
}

img.slide {
  max-width: 80vw;
  max-height: 80vh;
  object-fit: contain;

}

.swiper-slide {
    align-self: flex-start;
    justify-self: flex-start;
    text-align: center;
    font-size: 18px;
   
  
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}  

}

@media (min-width: 640px) and (max-width: 960px) {
.section-1 {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 4.5rem var(--space-300, 1.5rem) 0rem var(--space-300, 1.5rem);
    align-items: flex-start;
    gap: 1rem;
}

.section-2 {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 3rem var(--space-300, 1.5rem) 4.5rem var(--space-300, 1.5rem);
    align-items: flex-start;
    flex-direction: row-reverse;
    gap: 1rem;
}

.section-3 {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 4.5rem 0rem;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
}

div.section-1-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-200, 1rem);
    flex: 1 0 0;
}

div.section-2-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-200, 1rem);
    flex: 1 0 0;
}


div.section-3-text {
    display: flex;
    padding: 0rem var(--space-200, 1rem);
    flex-direction: column;
    align-items: center;
    gap: var(--space-200, 1rem);
    align-self: stretch;
}

p.section-1-header {
    align-self: stretch;
    color: var(--Text-Primary, #181818);
    font-family: Montserrat;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3rem;
    letter-spacing: 0.04rem;
    text-transform: uppercase;
}

p.section-2-header {
    align-self: stretch;
    color: var(--Text-Primary, #181818);
    font-family: Montserrat;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3rem;
    letter-spacing: 0.04rem;
    text-transform: uppercase;
}

p.section-3-header {
    align-self: center;
    color: var(--Text-Primary, #181818);
    font-family: Montserrat;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3rem;
    letter-spacing: 0.04rem;
    text-transform: uppercase;
}

p.section-1-text {
    align-self: stretch;
    color: var(--Text-Secondary, #484848);
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
    letter-spacing: -0.00563rem;
}

p.section-2-text {
    align-self: stretch;
    color: var(--Text-Secondary, #484848);
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
    letter-spacing: -0.00563rem;
}

p.section-3-text {
    max-width: 35rem;
    align-self: center;
    color: var(--Text-Secondary, #484848);
    text-align: center;
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
    letter-spacing: -0.00563rem;
}

img.single {
    display: flex;
    width: 22.3125rem;
    height: 23.8125rem;
    flex-shrink: 0;;
    object-fit: contain;


}

.meet-crew {
    display: flex;
    padding: 1.25rem 3rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    align-self: stretch;
    background: var(--Surface-Brand, #E30613);
    color: var(--Text-Inverse-primary, #FFF);
    text-align: center;
    max-width: 350px;
    margin: 2vh auto 5vh auto;

    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem;
    text-transform: uppercase;
    text-decoration: none;
}

.slider {
    display: flex;
    align-items: center;
    gap: var(--space-300, 1.5rem);
}

img.slide {
  max-width: 80vw;
  max-height: 80vh;
  object-fit: contain;

}

.swiper-slide {
    align-self: flex-start;
    justify-self: flex-start;
    text-align: center;
    font-size: 18px;
   
  
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}  

}

@media (min-width: 960px) {
.section-1 {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 4.5rem var(--space-300, 1.5rem) 0rem var(--space-300, 1.5rem);
    align-items: flex-start;
    gap: 1rem;
}

.section-2 {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 3rem var(--space-300, 1.5rem) 4.5rem var(--space-300, 1.5rem);
    align-items: flex-start;
    flex-direction: row-reverse;
    gap: 1rem;
}

.section-3 {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 4.5rem 0rem;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
}

div.section-1-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-200, 1rem);
    flex: 1 0 0;
}

div.section-2-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-200, 1rem);
    flex: 1 0 0;
}


div.section-3-text {
    display: flex;
    padding: 0rem var(--space-200, 1rem);
    flex-direction: column;
    align-items: center;
    gap: var(--space-200, 1rem);
    align-self: stretch;
}

p.section-1-header {
    align-self: stretch;
    color: var(--Text-Primary, #181818);
    font-family: Montserrat;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3rem;
    letter-spacing: 0.04rem;
    text-transform: uppercase;
}

p.section-2-header {
    align-self: stretch;
    color: var(--Text-Primary, #181818);
    font-family: Montserrat;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3rem;
    letter-spacing: 0.04rem;
    text-transform: uppercase;
}

p.section-3-header {
    align-self: center;
    color: var(--Text-Primary, #181818);
    font-family: Montserrat;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3rem;
    letter-spacing: 0.04rem;
    text-transform: uppercase;
}

p.section-1-text {
    align-self: stretch;
    color: var(--Text-Secondary, #484848);
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
    letter-spacing: -0.00563rem;
}

p.section-2-text {
    align-self: stretch;
    color: var(--Text-Secondary, #484848);
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
    letter-spacing: -0.00563rem;
}

p.section-3-text {
    max-width: 60rem;
    align-self: center;
    color: var(--Text-Secondary, #484848);
    text-align: center;
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
    letter-spacing: -0.00563rem;
}

img.single {
    display: flex;
    width: 22.3125rem;
    height: 23.8125rem;
    flex-shrink: 0;;
    object-fit: contain;


}

.meet-crew {
    display: flex;
    padding: 1.25rem 3rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    align-self: stretch;
    background: var(--Surface-Brand, #E30613);
    color: var(--Text-Inverse-primary, #FFF);
    text-align: center;
    max-width: 350px;
    margin: 2vh auto 5vh auto;

    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem;
    text-transform: uppercase;
    text-decoration: none;
}

.slider {
    display: flex;
    align-items: center;
    gap: var(--space-300, 1.5rem);
}

img.slide {
  max-width: 80vw;
  max-height: 80vh;
  object-fit: contain;

}

.swiper-slide {
    align-self: flex-start;
    justify-self: flex-start;
    text-align: center;
    font-size: 18px;
   
  
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}  

}
</style>