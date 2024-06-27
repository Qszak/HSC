<template>
    <section class="Opinions">
        <div class="SectionHeader">
            <div class="SectionTitle">
                <div class="PromoText">Opinie</div>
                <div class="Title">Tak mówią o nas nasi klienci</div>
            </div>
            <div class="Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
        </div>
        <div class="CardSlider">
            <div class="Card">
                <div class="CardPhoto">
                    <div class="CardPhotoText">JK</div>
                </div>
                <div class="CardName">Jan Kowalski</div>
                <div class="CardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
            </div>
            <div class="Card">
                <div class="CardPhoto">
                    <div class="CardPhotoText">JK</div>
                </div>
                <div class="CardName">Jan Kowalski</div>
                <div class="CardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
            </div>
            <div class="Card">
                <div class="CardPhoto">
                    <div class="CardPhotoText">JK</div>
                </div>
                <div class="CardName">Jan Kowalski</div>
                <div class="CardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
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
section.Opinions {
    display: inline-flex;
    padding: 6rem 4.5rem;
    flex-direction: column;
    align-items: center;
    gap: 4.5rem;
    background: var(--Surface-Inverse-primary, #181818);
}
.SectionHeader {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}
.SectionTitle {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: -5rem;
    align-self: stretch;
}
.PromoText {
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
.Title {
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
.Text {
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
.CardSlider {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
}
.Card {
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
.CardPhoto {
    display: flex;
    padding: var(--space-150, 0.75rem);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: var(--radius-rounded, 62.5rem);
    background: #FB8903;
}
.CardPhotoText {
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
.CardName {
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
.CardText {
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

</style>