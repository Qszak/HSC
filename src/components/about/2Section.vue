<template>
<section>
    <div class="text">
        <p class="header">Jak to się zaczęło</p>
        <p class="text">Będąc trenerami z długoletnim stażem, w pewnym momencie narodziła się w nas myśl dalszego rozwoju i jedną z dróg było wykreowanie własnego miejsca, w którym będziemy mogli dawać wartość ludziom. W ten sposób w małej kameralnej siłowni w centrum miasta, w której każdy z nas pracował, wspólnie stwierdziliśmy, że to czas najwyższy na wejście na inny wymiar pracy z ludźmi.</p>
    </div>
    <img :src="Photo1" alt="Założyciele">
</section>
<section>
    <div class="text">
        <p class="header">Dokąd zmierzamy</p>
        <p class="text">Chcemy rozwijać nasze wymarzone miejsce do treningów oraz cały nasz zespół, z którym współpracujemy. Działając synergistycznie w naszej ekipie, dążymy wspólnie do silnego zaznaczenia się na mapie Wrocławia jako solidne i jakościowa marka, która będzie kojarzona pozytywnie.</p>
    </div>
    <img :src="Photo1" alt="Założyciele">
</section>
<section>
    <div class="text1">
        <p class="header1">Nasze centrum</p>
        <p class="text1">Naszym założeniem było stworzenie studia kompletnego, tak aby każdy, kto podejmie z nami współpracę, zalazł coś dla siebie. Swoim zaangażowaniem wprowadzamy spory wachlarz możliwości, aby nasi podopieczni mogli rozwijać swoje pasje oraz poznawać nowe. Stale rozwijamy nasze miejsce i wychodzimy naprzeciw oczekiwaniom oraz potrzebom klientów, wprowadzając nowe procesy usprawniające funkcjonowanie Holistic Sport Center.</p>
    </div>
<SwiperAbout/>
</section>
<section>
    <div class="text1">
        <p class="header1">Kadra</p>
        <p class="text1">Na naszej trenerskiej ścieżce pojawiło się wielu specjalistów, którzy wyróżniają się swoim profesjonalnym podejściem do ludzi jako Trener, ale też jako dobry znajomy czy przyjaciel. Każdy z nas ma ciągłą chęć rozwoju i wspólnie wspieramy się w tym aspekcie, tworząc małą "siłownianą rodzinę". Zgrywając się na wielu płaszczyznach, tworzymy w naszym klubie niesamowity i przyjazny klimat, który jest naszym niebywałym atutem, co również odczuwają nasi podopieczni. Zapoznaj się z naszą kadrą!</p>
    </div>
<SwiperTeam/>
<RouterLink to="/kadra" class="meet-crew">Zobacz naszą kadrę</RouterLink>
</section>
</template>

<script>
import photo from '@/assets/team/Michał Kulej.jpg';
import SwiperAbout from '@/components/mobile/SliderAbout.vue';
import SwiperTeam from '@/components/mobile/SliderTeam.vue';
import { RouterLink } from 'vue-router';

export default {
    name: 'Section',
    components: {
        SwiperAbout,
        SwiperTeam,
    },

    data() {
        return {
            Photo1: photo,
        };
      },
}

</script>

<style scoped>
section {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 0rem var(--space-200, 1rem);
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-200, 1rem);
    margin-top: 7vh;
}

div.text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-200, 1rem);
    align-self: stretch;
}

div.text1 {
    display: flex;
    width: 23.5rem;
    padding: 0rem var(--space-200, 1rem);
    flex-direction: column;
    align-items: center;
    gap: var(--space-200, 1rem);
}

p.header {
    align-self: stretch;
    color: var(--Text-Primary, #181818);

    /* Headings/Mobile/S */
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem; /* 133.333% */
    letter-spacing: 0.0225rem;
    text-transform: uppercase;
}

p.header1 {
    align-self: stretch;
    color: var(--Text-Primary, #181818);
    text-align: center;

    /* Headings/Mobile/S */
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem; /* 133.333% */
    letter-spacing: 0.0225rem;
    text-transform: uppercase;
}

p.text {
    align-self: stretch;
    color: var(--Text-Secondary, #484848);

    /* Body/L/Regular */
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 155.556% */
    letter-spacing: -0.00563rem;
}

p.text1 {
    align-self: stretch;
    color: var(--Text-Secondary, #484848);
    text-align: center;

    /* Body/L/Regular */
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 155.556% */
    letter-spacing: -0.00563rem;
}

img {
   
    width: 21.4375rem;
    height: 21.4375rem;
    object-fit: contain;
    margin: 0 5vw;
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
    margin-top: 2vh;
    margin-bottom: 5vh;

    /* Action/Large/Bold */
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem; /* 133.333% */
    text-transform: uppercase;
    text-decoration: none;

}
</style>