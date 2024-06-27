<template>
    <section class="Contact">
        <div class="SectionHeader">
            <div class="SectionTitle">
                <div class="PromoText">Kontakt</div>
                <div class="Title">Pozostańmy w kontakcie</div>
            </div>
        </div>
        <div class="ContactZone">
            <div class="Contact">
                <div class="ContactText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                <div class="ContactData">
                    <div class="ContactDataPhone">
                        <div class="Icon"><phoneRed/></div>
                        <div class="Text">+48 793 951 015</div>
                    </div>
                    <div class="ContactDataMail">
                        <div class="Icon"><mailRed/></div>
                        <div class="Text">holisticsportcenter@gmail.com</div>
                    </div>
                    <div class="ContactDataAddress">
                        <div class="Icon"><locationRed/></div>
                        <div class="Text">
                            <ul>
                                <li>Holistic Sport Center</li>
                                <li>ul. Krakowska 29C</li>
                                <li>50-424 Wrocław</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button class="ContactUs">Umów się na konsultacje</button>
            </div>
            <div class="Map">
               <img :src="map" alt="mapka">
            </div>
        </div>
        

    </section>
</template>

<script>
import locationRed from '../icons/locationRed.vue';
import mailRed from '../icons/mailRed.vue';
import phoneRed from '../icons/phoneRed.vue';

import map from '@/assets/mapka.jpg';
export default {
    name: 'ContactSection',
    components: {
    locationRed,
    mailRed,
    phoneRed,
    },
    data () {
        return {
            map
        };
    },
    
};
</script>

<style scoped>
section.Contact {
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
    justify-content: center;
    align-items: flex-start;
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
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: var(--Border-Idle, #C2C2C2);
    font-family: "Montserrat";
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
    color: #000;

    /* Headings/Desktop/S */
    font-family: "Montserrat";
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3rem; /* 150% */
    letter-spacing: 0.04rem;
    text-transform: uppercase;
}
.ContactZone {
    display: flex;
    align-items: center;
    gap: 1.0625rem;
    align-self: stretch;
}
.Contact {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.75rem;
    align-self: stretch;
}
.ContactText {
    align-self: stretch;
    color: var(--Text-Secondary, #484848);

    /* Body/L/Regular */
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 155.556% */
    letter-spacing: -0.00563rem;
}
.ContactData {
    display: flex;
    width: 32.5625rem;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-300, 1.5rem);
}
.ContactDataPhone, .ContactDataMail {
    display: flex;
    align-items: flex-start;
    gap: var(--space-150, 0.75rem);
}
.ContactDataAddress {
    display: flex;
    align-items: flex-start;
    gap: var(--space-100, 0.5rem);
}
.Icon {
    width: var(--space-300, 1.5rem);
    height: var(--space-300, 1.5rem);
}
.Text {
    width: 12rem;
    color: var(--Text-Primary, #181818);
    font-family: "Montserrat";
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5rem; /* 150% */
    letter-spacing: 0.01rem;

}
button.ContactUs {
    display: flex;
    padding: 1.25rem 3rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    background: var(--Surface-Brand, #E30613);
    color: #FFF;
    text-align: center;
    font-family: "Montserrat";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem; /* 133.333% */
    text-transform: uppercase;
}

.Map {
    flex: 1 0 0;
    align-self: stretch;
}

img {
    width: 47.375rem;
    height: 30.25rem;
}

ul {
    list-style: none;
}
</style>