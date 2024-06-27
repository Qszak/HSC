<template>
    <section class="Cooperations">
        <div class="Claim">Współprace</div>
        <div class="Brands">
            <div class="logo"></div>
            <div class="logo"></div>
            <div class="logo"></div>
            <div class="logo"></div>
            <div class="logo"></div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Cooperation',
}
</script>

<style scoped>
section.Cooperations {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 4.5rem;
    flex-direction: column;
    align-items: center;
    gap: 4.5rem;
    background: var(--Surface-Inverse-primary, #181818);
}
.Claim {
    align-self: stretch;
    text-align: center;

    /* Headings/Desktop/S */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #FFF;
    font-family: Montserrat;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3rem; /* 150% */
    letter-spacing: 0.04rem;
    text-transform: uppercase;
    color: transparent;
}
.Brands {
    display: flex;
    padding: 0rem var(--space-300, 1.5rem);
    justify-content: center;
    align-items: center;
    gap: 4.5rem;
    align-self: stretch;
}
.logo {
    width: 7.5rem;
    height: 7.5rem;
    background: url(/LOGO/Offer.jpg) lightgray 50% / cover no-repeat;
}

</style>