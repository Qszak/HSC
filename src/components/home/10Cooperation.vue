<template>
    <section class="cooperations">
        <div class="claim">Współprace</div>
        <div class="brands">
            <div class="logo"></div>
            <div class="logo"></div>
            <div class="logo"></div>
            <div class="logo"></div>
            <div class="logo"></div>
            <div class="logo"></div>
            <div class="logo"></div>
            <div class="logo"></div>
            <div class="logo"></div>
            <div class="logo"></div>
            <div class="logo"></div>
            <div class="logo"></div>
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
@media (max-width: 640px) {
section.cooperations {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 3rem var(--space-200, 1rem);
    flex-direction: column;
    align-items: center;
    gap: var(--space-300, 1.5rem);
    background: var(--Surface-Inverse-primary, #181818);
}
.claim {
    align-self: stretch;
    color: var(--Text-Background-text-inverse, #313131);
    text-align: center;

    
    font-family: Montserrat;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3rem;
    letter-spacing: 0.04rem;
    text-transform: uppercase;
}
.brands {
    display: flex;
    padding: 0rem var(--space-300, 1.5rem);
    justify-content: center;
    align-items: center;
    gap: var(--space-200, 1rem);
    align-self: stretch;
}
.logo {
    width: 4.5rem;
    height: 4.5rem;
    background: url(/LOGO/Offer.jpg) lightgray 50% / cover no-repeat;
}
}


@media (min-width: 640px) and (max-width: 960px) {
section.cooperations {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 4.5rem var(--space-300, 1.5rem);
    flex-direction: column;
    align-items: center;
    gap: var(--space-300, 1.5rem);
    background: var(--Surface-Inverse-primary, #181818);
}
.claim {
    align-self: stretch;
    text-align: center;

    color: var(--Text-Background-text-inverse, #313131);
    font-family: Montserrat;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3rem; 
    letter-spacing: 0.04rem;
    text-transform: uppercase;
    
}
.brands {
    display: flex;
    padding: 0rem var(--space-300, 1.5rem);
    justify-content: center;
    align-items: center;
    gap: var(--space-200, 1rem);
    align-self: stretch;
}
.logo {
    width: 4.5rem;
    height: 4.5rem;
    background: url(/LOGO/Offer.jpg) lightgray 50% / cover no-repeat;
}
}

@media (min-width: 960px) {
section.cooperations {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 4.5rem;
    flex-direction: column;
    align-items: center;
    gap: 4.5rem;
    background: var(--Surface-Inverse-primary, #181818);
}
.claim {
    align-self: stretch;
    text-align: center;

    color: var(--Text-Background-text-inverse, #313131);
    font-family: Montserrat;
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    line-height: 4rem; 
    letter-spacing: 0.04rem;
    text-transform: uppercase;
    
}
.brands {
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
}
</style>