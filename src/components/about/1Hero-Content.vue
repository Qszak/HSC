<template>
    <div class="hero">
        <div class="text">
            <p class="text-up">Kilka słów</p>
            <p class="text-down">O nas</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Hero-Content',
}

</script>

<style scoped>
.hero {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    height: 30rem;
    padding: 0rem var(--space-200, 1rem);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;
    background: linear-gradient(0deg, var(--Background-shade-Moderate, rgba(0, 0, 0, 0.60)) 0%, var(--Background-shade-Moderate, rgba(0, 0, 0, 0.60)) 100%), url(/src/assets/o-nas.jpeg) lightgray 50% / cover no-repeat;
}

.text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
}

.text-up {
    align-self: stretch;
    color: var(--Text-Inverse-primary, #FFF);
    text-align: center;

    /* Body/L/Regular */
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 155.556% */
    letter-spacing: -0.00563rem;
    text-transform: uppercase;
}

.text-down {
    align-self: stretch;
    color: var(--Text-Inverse-primary, #FFF);
    text-align: center;

    /* Headings/Mobile/XXL */
    font-family: Montserrat;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3.375rem; /* 135% */
    letter-spacing: 0.05rem;
    text-transform: uppercase;
}

</style>