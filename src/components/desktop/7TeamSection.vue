<template>
  
    <section class="team">
        <div class="section-header">
            <div class="section-title">
                <div class="promo-text">KADRA</div>
                <div class="title">ZIOMKI Z MORDOWNI</div>
            </div>
            <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</div>
            <div class="team-slider">
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
            </div>
        </div>
        <button class="meet-crew">Poznaj naszą kadrę</button>

    </section>

</template>


<script>
export default {
    name: 'TeamSection',
}

</script>


<style scoped>

section.team {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 6rem 4.5rem;
    flex-direction: column;
    align-items: center;
    gap: 4.5rem;
}
.section-header {
    display: flex;
    max-width: 100%;
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
    color: transparent;
}
.title {
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
.text {
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
.team-slider {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-content: flex-start;
    gap: 2rem;
    align-self: stretch;
    flex-wrap: wrap;
}
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
    background: linear-gradient(0deg, var(--Background-shade-Moderate, rgba(0, 0, 0, 0.60)) 0%, var(--Background-shade-Moderate, rgba(0, 0, 0, 0.60)) 100%), url(/public/images/Offer.jpg) lightgray 50% / cover no-repeat;
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
button.meet-crew {
    display: flex;
    padding: 1.25rem 3rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background: var(--Surface-Brand, #E30613);
    color: var(--Text-Inverse-primary, #FFF);
    text-align: center;

    /* Action/Large/Bold */
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem; /* 133.333% */
    text-transform: uppercase;
}




</style>