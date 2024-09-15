<template>
<div class="promo">
    <div class="box">
        <div class="title-banner">
            <p class="title">Ci co robią - mogą więcej!</p>
            <p class="subtitle">Działanie rozwiewa wątpliwości</p>
        </div>
        <p class="text">Zrób pierwszy krok i dołącz do naszej holistycznej społeczności! Wspólnie przejdziemy przez te ścieżkę pozytywnej zmiany, wspomagając Twój cały proces treningowy, dietetyczny, rehabilitacyjny oraz mentalny. 
            Zaufaj profesjonalistom!</p>
    </div>
</div>
</template>

<script>
export default {
    name: 'Promo',
}
</script>


<style scoped>
.promo {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 5rem var(--space-200, 1rem);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    background: var(--Surface-Inverse-primary, #181818);
}

.box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    align-self: stretch;
}

.title-banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: -2rem;
}

.title {
    color: var(--Text-Background-text-inverse, #313131);
    text-align: center;
    font-family: Montserrat;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2rem; /* 100% */
    letter-spacing: 0.08rem;
    text-transform: uppercase;
}

.subtitle {
    align-self: stretch;
    color: var(--Text-Inverse-primary, #FFF);
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

.text {
    align-self: stretch;
    color: var(--Text-Inverse-primary, #FFF);
    text-align: center;

    /* Body/M/Regular */
    font-family: Montserrat;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 150% */
    letter-spacing: -0.005rem;
    }

</style>