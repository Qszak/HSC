<template>
    <section class="cooperations">
        <div class="claim">Współprace</div>
        <swiper
            :loop="true"
            :autoplay="true"
            :slidesPerView="3"
            :spaceBetween="20"
            modules="[Autoplay]"
            :modules="[Autoplay]"
            class="brands"
        >
            <swiper-slide class="logo">
                <a href="https://www.borkowskiwspolnicy.pl/">
                    <img
                        src="/images/Borkowski logo rgb.png"
                        alt="Logo Borkowski i Wspólnicy"
                    />
                </a>
            </swiper-slide>

            <swiper-slide class="logo">
                <a href="https://cudostudio.pl/">
                    <img src="/images/cudo.png" alt="Logo Studio CUDO" />
                </a>
            </swiper-slide>

            <swiper-slide class="logo">
                <a href="https://iron-gym.pl/">
                    <img src="/images/irongym.jpg" alt="Logo IronGym" />
                </a>
            </swiper-slide>

            <swiper-slide class="logo">
                <a href="https://berserkersteamwroclaw.com/">
                    <img
                        src="/images/berserkers.jpg"
                        alt="Logo Berserkers Team"
                    />
                </a>
            </swiper-slide>

            <swiper-slide class="logo">
                <a href="https://sandras.fit/">
                    <img src="/images/sandras.png" alt="Logo Sandra's" />
                </a>
            </swiper-slide>

            <swiper-slide class="logo">
                <a href="https://imprimature.co/">
                    <img src="/images/imprimature.png" alt="Logo Imprimature" />
                </a>
            </swiper-slide>

            <swiper-slide class="logo">
                <a href="https://ocludo.pl/">
                    <img src="/images/ocludo.png" alt="Logo Ocludo" />
                </a>
            </swiper-slide>
        </swiper>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";

export default {
    name: "Cooperation",
    methods: { Autoplay },
    components: {
        Swiper,
        SwiperSlide,
    },
    modules: [Autoplay],
};
</script>

<style scoped>
.cooperations {
    padding: 50px 20px;
    background-color: #f9f9f9;
    text-align: center;
}

.cooperations .claim {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 30px;
    color: #333;
}

.swiper {
    width: 100%;
    height: auto;
}

.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo {
    width: 180px; /* Dostosuj szerokość logo */
    height: 500px;
    padding: 10px;
    transition: transform 0.3s ease;
}

.logo img {
    max-width: 100%;
    height: 500px;
    object-fit: contain;
    filter: grayscale(100%);
    transition: filter 0.3s ease, transform 0.3s ease;
}

.logo:hover img {
    filter: grayscale(0);
    transform: scale(1.1); /* Powiększenie przy hover */
}

@media (max-width: 640px) {
    section.cooperations {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        padding: 3rem var(--space-200, 1rem);
        flex-direction: column;
        align-items: center;
        gap: var(--space-300, 1.5rem);
        background: var(--Surface-Inverse-primary, #181818);
    }
    .claim {
        align-self: stretch;
        color: var(--Text-Background-text-inverse, #313131);
        text-align: center;

        font-family: Montserrat;
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3rem;
        letter-spacing: 0.04rem;
        text-transform: uppercase;
    }
    .brands {
        display: flex;
        padding: 0rem var(--space-300, 1.5rem);
        justify-content: center;
        align-items: center;
        gap: var(--space-200, 1rem);
        align-self: stretch;
    }
    .logo {
        width: 7rem;
        height: 7rem;
    }

    img {
        width: 100%;
        height: 100%;
    }
}

@media (max-width: 960px) {
    .swiper {
        padding: 20px;
    }

    .swiper-slide {
        width: 120px;
    }

    .logo {
        width: 120px; /* Mniejsza szerokość na mobilnych */
    }
}
@media (min-width: 640px) and (max-width: 960px) {
    section.cooperations {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        padding: 4.5rem var(--space-300, 1.5rem);
        flex-direction: column;
        align-items: center;
        gap: var(--space-300, 1.5rem);
        background: var(--Surface-Inverse-primary, #181818);
    }
    .claim {
        align-self: stretch;
        text-align: center;

        color: var(--Text-Background-text-inverse, #313131);
        font-family: Montserrat;
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3rem;
        letter-spacing: 0.04rem;
        text-transform: uppercase;
    }
    .brands {
        display: flex;
        padding: 0rem var(--space-300, 1.5rem);
        justify-content: center;
        align-items: center;
        gap: var(--space-200, 1rem);
        align-self: stretch;
    }
    .logo {
        width: 12rem;
        height: 12rem;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}

@media (min-width: 960px) {
    section.cooperations {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        padding: 4.5rem;
        flex-direction: column;
        align-items: center;
        gap: 4.5rem;
        background: var(--Surface-Inverse-primary, #181818);
    }
    .claim {
        align-self: stretch;
        text-align: center;

        color: var(--Text-Background-text-inverse, #313131);
        font-family: Montserrat;
        font-size: 3rem;
        font-style: normal;
        font-weight: 700;
        line-height: 4rem;
        letter-spacing: 0.04rem;
        text-transform: uppercase;
    }
    .brands {
        display: flex;
        padding: 0rem var(--space-300, 1.5rem);
        justify-content: center;
        align-items: center;
        gap: 4rem;
        align-self: stretch;
    }
    .logo {
        width: 18rem;
        height: 18rem;
    }
    img {
        width: 100%;
        height: 100%;
    }
}
</style>
