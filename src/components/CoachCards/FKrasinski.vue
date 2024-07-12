<template>
<div class="coach-card">
    <div class="gallery-image">
        <div class="ratio-image">
            <img :src="MKulej" alt="Michał Kulej">
        </div>
    </div>
    <div class="coach-info">
        <div class="coach-name">Filip Krasiński</div>
        <div class="coach-position">Trener Personalny</div>
    </div>
</div>
    
</template>

<script>
import Mkulej from '@/assets/team/MKulej.png';

export default {
    name: 'FKrasinski',

    data() {
        return {
            MKulej: Mkulej,
        };
},
}

</script>

<style scoped>
.coach-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--Surface-Secondary, #F5F5F5);
}
.gallery-image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;

}
.ratio-image {
    display: flex;
    max-width: 43.75rem;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
}
img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
}
.coach-info {
    display: flex;
    padding: var(--space-300, 1.5rem) 0rem;
    flex-direction: column;
    align-items: center;
    gap: var(--space-050, 0.25rem);
    align-self: stretch;
}
.coach-name {
    width: 18.75rem;
    color: var(--Text-Primary, #181818);
    text-align: center;

    /* Body/L/Bold */
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem; /* 155.556% */
    letter-spacing: -0.00563rem;
}
.coach-position {
    width: 18.75rem;
    color: var(--Text-Tertiary, #747474);
    text-align: center;

    /* Body/S/Regular */
    font-family: Montserrat;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 142.857% */
    letter-spacing: -0.00438rem;
}

</style>