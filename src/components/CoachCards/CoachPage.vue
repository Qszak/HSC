<template>
    <div class="coach-promo">
        <div class="photo">
            <img/>
        </div>
        <div class="coach-info">
            <div class="coach-data">
                <p class="coach-position"> Trener Personalny</p>
                <p class="coach-name">Michał Kulej</p>
            </div>
        </div>
    </div>
    <div class="coach-section">
        <div class="coach-section-header">
            <div class="coach-section-header-title">Profil Trenera</div>
            <p class="coach-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, fugiat dolorum. Rerum, laudantium velit? Rerum dolorum reprehenderit, iure, commodi corrupti fugiat quo repellendus recusandae minima tenetur possimus magnam illo illum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet modi maiores a labore sed culpa aperiam similique, vel ea fugit laborum sequi totam ullam incidunt, repellat exercitationem quam veritatis perspiciatis!</p>
        </div>
    </div>
    <div class="coach-section-offer">
        <div class="coach-section-offer-header">
        <p class="offer-header-text">Oferowane usługi</p>
        </div>
        <div class="coach-slider">

        </div>
    </div>

</template>

<style scoped>

@media (max-width: 640px) {

.coach-promo {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 0rem var(--space-200, 1rem) 3rem var(--space-200, 1rem);
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: var(--space-300, 1.5rem);
    background: var(--Surface-Inverse-secondary, #000);
}
.photo {
    width: 21.4375rem;
    height: 21.4375rem;
    background: lightgray 0px -0.106px / 100% 149.982% no-repeat;
}
.coach-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-300, 1.5rem);
    align-self: stretch;
}
.coach-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-050, 0.25rem);
    align-self: stretch;
}
.coach-position {
    align-self: stretch;
    color: #FFF;
    font-family: Montserrat;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: -0.005rem;
}
.coach-name {
    align-self: stretch;
    color: #FFF;
    font-family: Montserrat;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3rem;
    letter-spacing: 0.04rem;
    text-transform: uppercase;
}
.coach-section {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 3rem var(--space-200, 1rem);
    flex-direction: column;
    align-items: center;
    gap: 4.5rem; 
}
.coach-section-header {
    display: flex;
    max-width: 67.125rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--space-200, 1rem);
    align-self: stretch;
}
.coach-section-header-title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: -5rem;
    align-self: stretch;
}
.coach-description {
    align-self: stretch;
    color: var(--Text-Secondary, #484848);
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
    letter-spacing: -0.00563rem;
}
.coach-section-offer {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 3rem var(--space-200, 1rem);
    flex-direction: column;
    align-items: center;
    gap: var(--space-200, 1rem);
}
.coach-section-offer-header {
    display: flex;
    max-width: 67.125rem;
    flex-direction: column;
    align-items: center;
    gap: var(--space-300, 1.5rem);
    align-self: stretch;
}
.offer-header-text {
    align-self: stretch;
    color: var(--Text-Primary, #181818);
    text-align: center;
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem;
    letter-spacing: 0.0225rem;
    text-transform: uppercase;
}
.coach-slider {
    display: flex;
    max-width: 67.125rem;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    gap: 2rem;
    align-self: stretch;
    flex-wrap: wrap;
}



}
</style>