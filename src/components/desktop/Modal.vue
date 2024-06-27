<template>
<div class="Modal" v-if="isVisible">
    <div class="Header">
        <div class="ContactForm">Formularz kontaktowy</div>
        <div class="closeModal" @click="closeModal"><closeModal/></div>
        <div class="Text">Jeśli są Państwo zainteresowani naszą ofertą, prosimy o wypełnienie poniższego formularza kontaktowego.</div>
    </div>
    <div class="form-box"></div>
    <form>
        <div class="input-box">
            <input type="text" id="name" placeholder="Imię i nazwisko">
        </div>
        <div class="input-box">
        <input type="email" id="email" placeholder="Adres e-mail (obowiązkowy)">
        </div>
        <div class="input-box">
        <input type="number" id="phone" placeholder="Numer telefonu (opcjonalny)">
        </div>
        <div class="input-box2">
        <input type="text" id="text" placeholder="Treść wiadomości (obowiązkowe)">
        </div>
    </form>

</div>


</template>

<script>
import closeModal from '../icons/closeModal.vue';
export default {
  name: 'Modal',
  components: closeModal,
  props: {
    isVisible: {
        type: Boolean,
        required: true
    }
  },
  methods: {
    closeModal() {
        this.$emit('close');
    }
  }
}
</script>


<style scoped>
.Modal {
    display: flex;
    width: 57.8125rem;
    height: 56.25rem;
    padding: 3rem 4.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-300, 1.5rem);
    flex-shrink: 0;
}

.Header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-100, 0.5rem);
    align-self: stretch;
}

.ContactForm {
    align-self: stretch;
    color: #000;

    /* Headings/Desktop/S */
    font-family: Montserrat;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3rem; /* 150% */
    letter-spacing: 0.04rem;
    text-transform: uppercase;
}

.closeModal {
    width: var(--space-300, 1.5rem);
    height: var(--space-300, 1.5rem);
    color: white;

}

.Text {
    max-width: 40rem;
    align-self: stretch;
    color: var(--Text-Background-text-inverse, #313131);

    /* Body/M/Regular */
    font-family: Montserrat;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 150% */
    letter-spacing: -0.005rem;
}

.form-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
    align-self: stretch;
}

form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
    align-self: stretch;
}


.input-box {
    display: flex;
    height: 3.625rem;
    min-width: 20rem;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    align-self: stretch;
    border-bottom: 1px solid #545454;
    background: #FFF;

}

.input-box2 {
    display: flex;
    height: 9rem;
    min-width: 20rem;
    padding: 1rem;
    align-items: flex-start;
    gap: 0.625rem;
    align-self: stretch;
    border-bottom: 1px solid #545454;
    background: #FFF;
}

input {
    flex: 1 0 0;
    color: #545454;

    /* Body/M/Regular */
    font-family: Montserrat;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 150% */
    letter-spacing: -0.005rem;
}
</style>