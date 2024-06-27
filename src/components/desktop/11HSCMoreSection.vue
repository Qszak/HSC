<template>
    <section class="HscMore">
        <div class="SectionHeader">
            <div class="SectionTitle">
                <div class="PromoText">HSC</div>
                <div class="Title">To nie tylko sport</div>
            </div>
            <div class="Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        </div>
        <div class="Cards">
            <div class="Card">
                <div class="CardHeader">Dietetyka</div>
                <div class="CardPhoto">
                    <img src="" alt="">
                </div>
                <div class="CardInfo">Wieloletni Trener Personalny we Wrocławiu, absolwent wrocławskiego AWF-u, ukończył Zarządzanie Biznesem na WSB oraz Psychologię Sportu.</div>
                <button class="ReadMore">Szczegóły usługi</button>
            </div>
            <div class="Card">
                <div class="CardHeader">Fizjoterapia</div>
                <div class="CardPhoto">
                    <img src="" alt="">
                </div>
                <div class="CardInfo">Wieloletni Trener Personalny we Wrocławiu, absolwent wrocławskiego AWF-u, ukończył Zarządzanie Biznesem na WSB oraz Psychologię Sportu.</div>
                <button class="ReadMore">Szczegóły usługi</button>
            </div>
        </div>



    </section>
</template>

<script>
export default {
    name: 'HSCMoreSection',
}
</script>

<style scoped>
section.HscMore {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 6rem 4.5rem;
    flex-direction: column;
    align-items: center;
    gap: 4.5rem;
}
.SectionHeader {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    align-self: stretch;
}
.SectionTitle {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: -5rem;
    align-self: stretch;
}
.PromoText {
    align-self: stretch;
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
    color: transparent;
}
.Title {
    align-self: stretch;
    color: var(--Text-Primary, #181818);
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
    
    max-width: 50rem;
    align-self: center;
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
.Cards {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 7.5rem;
    align-self: stretch;
}
.Card {
    display: flex;
    width: 25rem;
    flex-direction: column;
    align-items: center;
    gap: var(--space-300, 1.5rem);
}
.CardHeader {
    align-self: stretch;
    color: #000;
    text-align: center;

    /* Body/L/Bold */
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem; /* 155.556% */
    letter-spacing: -0.00563rem;
}
.CardPhoto {
    width: 15rem;
    height: 15rem;
    border-radius: var(--radius-rounded, 62.5rem);
    background: #D9D9D9;
}
.CardInfo {
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
button.ReadMore {
    display: flex;
    padding: 1.25rem 3rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border: 2px solid var(--Border-Primary, #181818);
    color: var(--Text-Primary, #181818);
    text-align: center;

    /* Action/Large/Bold */
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem; /* 133.333% */
    text-transform: uppercase;
    background-color: transparent;
}
</style>