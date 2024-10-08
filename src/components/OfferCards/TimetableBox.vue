<template>
    <div>
        <p class="day">{{ day }}</p>
        <time class="time">{{ time }}</time>
        <p class="coach">{{ coach }}</p>
        <p class="group-type">{{ groupType }}</p>
    </div>
</template>

<script>
export default {
    props: {
        day: {
            type: String,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        coach: {
            type: String,
            required: true,
        },
        groupType: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
@media (max-width: 640px) {
    .day {
        color: var(--Text-Primary, #181818);
        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem;
        letter-spacing: -0.005rem;
    }

    .coach,
    .time,
    .group-type {
        color: var(--Text-Primary, #181818);
        font-family: Montserrat;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.25rem;
        letter-spacing: -0.00438rem;
    }
}

@media (min-width: 640px) and (max-width: 960px) {
    .day {
        color: var(--Text-Primary, #181818);
        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem;
        letter-spacing: -0.005rem;
    }

    .coach,
    .time,
    .group-type {
        color: var(--Text-Primary, #181818);
        font-family: Montserrat;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.25rem;
        letter-spacing: -0.00438rem;
    }
}

@media (min-width: 960px) {
    .day {
        color: var(--Text-Primary, #181818);
        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem;
        letter-spacing: -0.005rem;
    }

    .coach,
    .time,
    .group-type {
        color: var(--Text-Primary, #181818);
        font-family: Montserrat;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.25rem;
        letter-spacing: -0.00438rem;
    }
}
</style>
