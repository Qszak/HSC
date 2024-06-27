<template>
    <div class="Footer">
        <div class="Section">
            <div class="Logo">
               <LogoHSC2/>
            </div>
            <div class="Menu">
                <div class="Item">
                    Strona Główna
                </div>
                <div class="Item">
                    O nas
                </div>
                <div class="Item">
                    Oferta
                </div>
                <div class="Item">
                    Kadra
                </div>
                <div class="Item">
                    Kontakt
                </div>
                <div class="Item">
                    Fizjoterapia
                </div>
                <div class="Item">
                    Dietetyk
                </div>
            </div>
            <div class="ContactData">
                <div class="InfoBar">
                    <p class="Text">Kontakt</p>
                    <div class="Line">
                    <div class="Icon"><PhoneRed/></div>
                    <div class="Data">+48 793 951 015</div>
                    </div>
                    <div class="Line">
                    <div class="Icon"><MailRed/></div>
                    <div class="Data">holisticsportcenter@gmail.com</div>
                    </div>
                </div>
                <div class="InfoBar">
                    <p class="Text">Adres</p>
                    <div class="Line">
                    <div class="Icon"><LocationRed/></div>
                    <div class="Data">
                        <ul>
                                <li>Holistic Sport Center</li>
                                <li>ul. Krakowska 29C</li>
                                <li>50-424 Wrocław</li>
                        </ul>
                    </div>
                    </div>
                    <div class="Line">
                    <div class="Icon"><ClockRed/></div>
                    <div class="Data">
                        <ul>
                                <li>Godziny otwarcia</li>
                                <li>Pon - Pt: 9:00 - 21:00</li>
                                <li>Sob: 9:00 - 14:00</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div class="InfoBar">
                    <p class="Text">Media Społecznościowe</p>
                    <div class="Line">
                        <div class="Icon"><FacebookRed/></div>
                    <div class="Data">facebook.com/holisticsportcenter</div>
                    </div>
                    <div class="Line">
                        <div class="Icon"><InstagramRed/></div>
                    <div class="Data">@holisticsportcenter</div>
                    </div>

                </div>
            </div>
            <p class="ARR">© 2024 Holistic Sport Center</p>
        </div>

    </div>
    
    
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
    components:
    LogoHSC2,
    ClockRed,
    FacebookRed,
    InstagramRed,
    LocationRed,
    MailRed,
    PhoneRed,

    
    

}
</script>

<style scoped>


.Footer {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 6rem 4.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
    background: var(--Surface-Inverse-primary, #181818);
}

.Section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    align-self: stretch;
}

.Logo {
    width: 6.25rem;
    height: 6.25rem;
    flex-shrink: 0;
}

.Menu {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 0.5rem var(--space-100, 0.5rem);
    align-self: stretch;
    flex-wrap: wrap;
}

.Item {
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

.ContactData {
    display: flex;
    padding: var(--space-300, 1.5rem) 0rem;
    justify-content: center;
    align-items: flex-start;
    gap: 4.5rem;
    align-self: stretch;
}

.InfoBar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-300, 1.5rem);
    flex: 1 0 0;
}

p.Text {
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
.Line {
    display: flex;
    align-items: flex-start;
    gap: var(--space-150, 0.75rem);
}
.Icon {
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
}

.Data {
    color: var(--Text-Inverse-primary, #FFF);

    /* Body/M/Regular */
    font-family: Montserrat;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 150% */
    letter-spacing: -0.005rem;
    }

p.ARR {
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