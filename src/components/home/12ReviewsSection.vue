<template>
    <section class="opinions">
        <div class="section-header">
            <div class="section-title">
                <div class="promo-text">Opinie</div>
                <div class="title">Tak mówią o nas nasi klienci</div>
            </div>
            <div class="text">Na naszej ścieżce trenerskiej pojawiło się wiele osób, które podjęły się współpracy z nami i kontynuują ją od nawet kilkunastu lat. Wiele osób nam zaufało, za co serdecznie dziękujemy, a do zapoznania się z ich opiniami zapraszamy poniżej!</div>
        </div>
        <div class="card-slider">
            <div class="card">
                <div class="card-photo">
                    <div class="card-photo-text">JK</div>
                </div>
                <div class="card-name">Jan Kowalski</div>
                <div class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
            </div>
            <div class="card">
                <div class="card-photo">
                    <div class="card-photo-text">JK</div>
                </div>
                <div class="card-name">Jan Kowalski</div>
                <div class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
            </div>
            <div class="card">
                <div class="card-photo">
                    <div class="card-photo-text">JK</div>
                </div>
                <div class="card-name">Jan Kowalski</div>
                <div class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
            </div>
        </div>


    </section>
</template>

<script>
export default {
    name: 'ReviewsSection',
}
</script>

<style scoped>
@media (max-width: 480px) {
section.opinions {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 3rem var(--space-200, 1rem);
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    background: var(--Surface-Inverse-primary, #181818);
}
.section-header {
    display: flex;
    max-width: 67.125rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    align-self: stretch;
}
.section-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: -2rem;
    align-self: stretch;
}
.promo-text {
    color: var(--Text-Background-text-inverse, #313131);
    text-align: center;
    font-family: Montserrat;
    font-size: 4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 4rem; /* 100% */
    letter-spacing: 0.08rem;
    text-transform: uppercase;
}
.title {
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
    color: var(--Text-Inverse-secondary, #E1E1E1);
    text-align: center;

    /* Body/L/Regular */
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 155.556% */
    letter-spacing: -0.00563rem;
}
.card-slider {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    align-self: stretch;
}
.card {
    display: flex;
    padding: var(--space-300, 1.5rem) var(--space-300, 1.5rem) 3rem var(--space-300, 1.5rem);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--space-200, 1rem);
    align-self: stretch;
    background: var(--Surface-Primary, #FFF);
    box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.08);
}
.card-photo {
    display: flex;
    padding: var(--space-150, 0.75rem);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: var(--radius-rounded, 62.5rem);
    background: #FB8903;
}
.card-photo-text {
    display: flex;
    width: 2.5rem;
    height: 2.5rem;
    flex-direction: column;
    justify-content: center;
    color: var(--Text-Inverse-primary, #FFF);
    text-align: center;

    /* Body/M/Bold */
    font-family: Montserrat;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem; /* 150% */
    letter-spacing: -0.005rem;
}
.card-name {
    width: 25.8125rem;
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
.card-text {
    align-self: stretch;
    color: var(--Text-Secondary, #484848);
    text-align: center;

    /* Body/M/Regular */
    font-family: Montserrat;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 150% */
    letter-spacing: -0.005rem;
}
}

@media (min-width: 481px) {
section.opinions {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 6rem 4.5rem;
    flex-direction: column;
    align-items: center;
    gap: 4.5rem;
    background: var(--Surface-Inverse-primary, #181818);
}
.section-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}
.section-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: -5rem;
    align-self: stretch;
}
.promo-text {
    text-align: center;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: var(--Border-Idle, #C2C2C2);
    font-family: Montserrat;
    font-size: 10rem;
    font-style: normal;
    font-weight: 700;
    line-height: 10rem; /* 100% */
    letter-spacing: 0.2rem;
    text-transform: uppercase;
}
.title {
    align-self: stretch;
    color: var(--Text-Inverse-primary, #FFF);
    text-align: center;

    /* Headings/Desktop/S */
    font-family: Montserrat;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3rem; /* 150% */
    letter-spacing: 0.04rem;
    text-transform: uppercase;
}
.text {
    align-self: stretch;
    color: var(--Text-Inverse-secondary, #E1E1E1);
    text-align: center;

    /* Body/L/Regular */
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 155.556% */
    letter-spacing: -0.00563rem;
}
.card-slider {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
}
.card {
    display: flex;
    width: 25.6875rem;
    padding: var(--space-300, 1.5rem) var(--space-300, 1.5rem) 3rem var(--space-300, 1.5rem);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--space-200, 1rem);
    background: var(--Surface-Primary, #FFF);
    box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.08);
}
.card-photo {
    display: flex;
    padding: var(--space-150, 0.75rem);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: var(--radius-rounded, 62.5rem);
    background: #FB8903;
}
.card-photo-text {
    display: flex;
    width: 2.5rem;
    height: 2.5rem;
    flex-direction: column;
    justify-content: center;
    color: var(--Text-Inverse-primary, #FFF);
    text-align: center;

    /* Body/M/Bold */
    font-family: Montserrat;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem; /* 150% */
    letter-spacing: -0.005rem;
}
.card-name {
    width: 25.8125rem;
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
.card-text {
    align-self: stretch;
    color: var(--Text-Secondary, #484848);
    text-align: center;

    /* Body/M/Regular */
    font-family: Montserrat;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 150% */
    letter-spacing: -0.005rem;
}
}
</style>