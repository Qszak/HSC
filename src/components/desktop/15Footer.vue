<template>
    <footer>
        <div class="section">
            <div class="logo">
               <LogoHSC2/>
            </div>
            <div class="menu">
                <div class="item">
                    Strona Główna
                </div>
                <div class="item">
                    O nas
                </div>
                <div class="item">
                    Oferta
                </div>
                <div class="item">
                    Kadra
                </div>
                <div class="item">
                    Kontakt
                </div>
                <div class="item">
                    Fizjoterapia
                </div>
                <div class="item">
                    Dietetyk
                </div>
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
                                <li>Pon - Pt: 9:00 - 21:00</li>
                                <li>Sob: 9:00 - 14:00</li>
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
import LogoHSC2 from '../icons/LogoHSC2.vue';
import ClockRed from '../icons/clockRed.vue';
import FacebookRed from '../icons/facebookRed.vue';
import InstagramRed from '../icons/instagramRed.vue';
import LocationRed from '../icons/locationRed.vue';
import MailRed from '../icons/mailRed.vue';
import PhoneRed from '../icons/phoneRed.vue';





export default {
    name: 'Footer',
    components: {
    LogoHSC2,
    ClockRed,
    FacebookRed,
    InstagramRed,
    LocationRed,
    MailRed,
    PhoneRed,
    }

    
    

}
</script>

<style scoped>


footer {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 6rem 4.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
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
    flex-shrink: 0;
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

    /* Action Medium/Semibold */
    font-family: Montserrat;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem; /* 150% */
    letter-spacing: 0.01875rem;

}

.contact-data {
    display: flex;
    padding: var(--space-300, 1.5rem) 0rem;
    justify-content: center;
    align-items: flex-start;
    gap: 4.5rem;
    align-self: stretch;
}

.info-bar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-300, 1.5rem);
    flex: 1 0 0;
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
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
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
</style>