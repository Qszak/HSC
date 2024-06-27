<template>
<div class="Wrap">    
    <section class="Team">
        <div class="SectionHeader">
            <div class="SectionTitle">
                <div class="PromoText">KADRA</div>
                <div class="Title">ZIOMKI Z MORDOWNI</div>
            </div>
            <div class="Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</div>
            <div class="TeamSlider">
                <div class="CoachCard">
                    <div class="GalleryImage">
                        <div class="RatioImage"></div>
                    </div>
                    <div class="CoachInfo">
                        <div class="CoachName">Michał Kulej</div>
                        <div class="CoachPosition">Trener Personalny</div>
                    </div>
                </div>
                <div class="CoachCard">
                    <div class="GalleryImage">
                        <div class="RatioImage"></div>
                    </div>
                    <div class="CoachInfo">
                        <div class="CoachName">Jakub Kulej</div>
                        <div class="CoachPosition">Trener Personalny</div>
                    </div>
                </div>
                <div class="CoachCard">
                    <div class="GalleryImage">
                        <div class="RatioImage"></div>
                    </div>
                    <div class="CoachInfo">
                        <div class="CoachName">Filip Krasiński</div>
                        <div class="CoachPosition">Trener Personalny</div>
                    </div>
                </div>
                <div class="CoachCard">
                    <div class="GalleryImage">
                        <div class="RatioImage"></div>
                    </div>
                    <div class="CoachInfo">
                        <div class="CoachName">Sandra Cieślik</div>
                        <div class="CoachPosition">Trener Personalny</div>
                    </div>
                </div>
            </div>
        </div>
        <button class="MeetCrew">Poznaj naszą kadrę</button>

    </section>
</div> 
</template>


<script>
export default {
    name: 'TeamSection',
}

</script>


<style scoped>
.Wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100svw - var(--scrollbarWidth));
}

section.Team {
    display: flex;
    width: 98vw;
    padding: 6rem 4.5rem;
    flex-direction: column;
    align-items: center;
    gap: 4.5rem;
}
.SectionHeader {
    display: flex;
    max-width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    align-self: stretch;
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
.TeamSlider {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-content: flex-start;
    gap: 2rem;
    align-self: stretch;
    flex-wrap: wrap;
}
.CoachCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--Surface-Secondary, #F5F5F5);
}
.GalleryImage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;

}
.RatioImage {
    display: flex;
    max-width: 43.75rem;
    height: 30vh;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    background: linear-gradient(0deg, var(--Background-shade-Moderate, rgba(0, 0, 0, 0.60)) 0%, var(--Background-shade-Moderate, rgba(0, 0, 0, 0.60)) 100%), url(/public/images/Offer.jpg) lightgray 50% / cover no-repeat;
}
.CoachInfo {
    display: flex;
    padding: var(--space-300, 1.5rem) 0rem;
    flex-direction: column;
    align-items: center;
    gap: var(--space-050, 0.25rem);
    align-self: stretch;
}
.CoachName {
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
.CoachPosition {
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
button.MeetCrew {
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