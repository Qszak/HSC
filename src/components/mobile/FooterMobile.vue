<template>
    <footer>
        <div class="section">
            <div class="logo">
               <LogoHSC2/>
            </div>
            <div class="menu">
                <RouterLink to="/" class="item">Strona Główna</RouterLink>
                <RouterLink to="/o-nas" class="item">O nas</RouterLink>
                <RouterLink to="/oferta" class="item">Oferta</RouterLink>
                <RouterLink to="/kadra" class="item">Kadra</RouterLink>
                <RouterLink to="/fizjoterapia" class="item">Fizjoterapia</RouterLink>
                <RouterLink to="/dietetyka" class="item">Dietetyka</RouterLink>
            </div>
            <div class="contact-data">
                <div class="info-bar">
                    <p class="text">Kontakt</p>
                    <div class="line">
                    <div class="icon"><PhoneRed/></div>
                    <div class="data">+48 793 951 015</div>
                    </div>
                    <div class="line">
                    <div class="icon"><MailRed/></div>
                    <div class="data">holisticsportcenter@gmail.com</div>
                    </div>
                </div>
                <div class="info-bar">
                    <p class="text">Adres</p>
                    <div class="line">
                    <div class="icon"><LocationRed/></div>
                    <div class="data">
                        <ul>
                                <li>Holistic Sport Center</li>
                                <li>ul. Krakowska 29C</li>
                                <li>50-424 Wrocław</li>
                        </ul>
                    </div>
                    </div>
                    <div class="line">
                    <div class="icon"><ClockRed/></div>
                    <div class="data">
                        <ul>
                                <li>Godziny otwarcia</li>
                                <li>Pon - Pt: 6:00 - 22:00</li>
                                <li>Sob: 7:00 - 12:00</li>
                                <li>Nd: indywidualne zapisy</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div class="info-bar">
                    <p class="text">Media Społecznościowe</p>
                    <div class="line">
                        <div class="icon"><FacebookRed/></div>
                    <div class="data">facebook.com/holisticsportcenter</div>
                    </div>
                    <div class="line">
                        <div class="icon"><InstagramRed/></div>
                    <div class="data">@holisticsportcenter</div>
                    </div>

                </div>
            </div>
            <p class="copy">© 2024 Holistic Sport Center</p>
        </div>

    </footer>
    
    
    </template>

<script>
import { RouterLink } from 'vue-router';
import LogoHSC2 from '../icons/LogoHSC2.vue';
import ClockRed from '../icons/clockRed.vue';
import FacebookRed from '../icons/facebookRed.vue';
import InstagramRed from '../icons/instagramRed.vue';
import LocationRed from '../icons/locationRed.vue';
import MailRed from '../icons/mailRed.vue';
import PhoneRed from '../icons/phoneRed.vue';



export default {
    name: 'FooterMobile',
    components: {
    LogoHSC2,
    ClockRed,
    FacebookRed,
    InstagramRed,
    LocationRed,
    MailRed,
    PhoneRed,
    },

};
</script>

<style scoped>

footer {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 3rem var(--space-200, 1rem);
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    background: var(--Surface-Inverse-primary, #181818);
}

.section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    align-self: stretch;
}

.logo {
    width: 6.25rem;
    height: 6.25rem;
    
}

.menu {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 0.5rem var(--space-100, 0.5rem);
    align-self: stretch;
    flex-wrap: wrap;
}

.item {
    display: flex;
    padding: var(--space-150, 0.75rem) var(--space-200, 1rem);
    justify-content: center;
    align-items: center;
    gap: var(--space-100, 0.5rem);
    border-radius: var(--radius-150, 0.75rem);
    color: var(--Text-Inverse-primary, #FFF);

    /* Action/Small/Semibold */
    font-family: Montserrat;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1rem; /* 133.333% */
    text-transform: uppercase;
    text-decoration: none;

}

.contact-data {
    display: flex;
    padding: var(--space-300, 1.5rem) 0rem;
    flex-direction: column;
    align-items: center;
    gap: 4.5rem;
    align-self: stretch;
}

.info-bar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-300, 1.5rem);
    align-self: stretch;
}

p.text {
    color: #FFF;

    /* Body/L/Bold */
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem; /* 155.556% */
    letter-spacing: -0.00563rem;
}

li {
    list-style: none;
}
.line {
    display: flex;
    align-items: flex-start;
    gap: var(--space-150, 0.75rem);
}
.icon {
    width: var(--space-300, 1.5rem);
    height: var(--space-300, 1.5rem);
}

.data {
    color: var(--Text-Inverse-primary, #FFF);

    /* Body/M/Regular */
    font-family: Montserrat;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 150% */
    letter-spacing: -0.005rem;
}

p.copy {
    align-self: stretch;
    color: var(--Text-Inverse-primary, #FFF);
    text-align: center;

    /* caption */
    font-family: Montserrat;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 166.667% */
    letter-spacing: -0.00375rem;
}