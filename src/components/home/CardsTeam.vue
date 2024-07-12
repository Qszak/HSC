<template>
<div class="coach-card">
    <div class="gallery-image">
        <div class="ratio-image"></div>
    </div>
    <div class="coach-info">
        <div class="coach-name">Michał Kulej</div>
        <div class="coach-position">Trener Personalny</div>
    </div>
</div>
<div class="coach-card">
    <div class="gallery-image">
        <div class="ratio-image"></div>
    </div>
    <div class="coach-info">
        <div class="coach-name">Jakub Kulej</div>
        <div class="coach-position">Trener Personalny</div>
    </div>
</div>
<div class="coach-card">
    <div class="gallery-image">
        <div class="ratio-image"></div>
    </div>
    <div class="coach-info">
        <div class="coach-name">Filip Krasiński</div>
        <div class="coach-position">Trener Personalny</div>
    </div>
</div>
<div class="coach-card">
    <div class="gallery-image">
        <div class="ratio-image"></div>
    </div>
    <div class="coach-info">
        <div class="coach-name">Sandra Cieślik</div>
        <div class="coach-position">Trener Personalny</div>
    </div>
</div>


</template>


<script>
export default {
    name: 'CardsTeam',
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
    height: 30vh;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    background: linear-gradient(0deg, var(--Background-shade-Moderate, rgba(0, 0, 0, 0.60)) 0%, var(--Background-shade-Moderate, rgba(0, 0, 0, 0.60)) 100%);
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