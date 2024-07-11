<template>
<div class="modal" v-if="isVisible">
    <div class="header">
        <div class="close-modal" @click="closeModal"><closeModal/></div>
        <div class="contact-form">Formularz kontaktowy</div>
        <div class="text">Jeśli są Państwo zainteresowani naszą ofertą, prosimy o wypełnienie poniższego formularza kontaktowego.</div>
    </div>
    <div class="form-box"></div>
    <form>
        <div class="input-box">
            <input type="text" id="name" placeholder="Imię i nazwisko" required>
        </div>
        <div class="input-box">
        <input type="email" id="email" placeholder="Adres e-mail (obowiązkowy)" required>
        </div>
        <div class="input-box">
        <input type="number" id="phone" placeholder="Numer telefonu (opcjonalny)">
        </div>
        <div class="input-box2">
        <textarea type="text" id="text" placeholder="Treść wiadomości (obowiązkowe)" style="height: 7rem;"></textarea>
        </div>
    </form>
    <button class="send">Wyślij wiadomość</button>

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
.modal {
    position: fixed;
    z-index: 999;
    right: 0;
    top: 0;
    display: flex;
    width: 57.8125rem;
    height: 56.25rem;
    padding: 3rem 4.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-300, 1.5rem);
    flex-shrink: 0;
    background-color: #fff;
}

.header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-100, 0.5rem);
    align-self: stretch;
}

.contact-form {
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

.close-modal {
    position: absolute;
    right: 5vw;
    top: 5vh;
    width: var(--space-300, 1.5rem);
    height: var(--space-300, 1.5rem);
    background-color: transparent;
    

}

.text {
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

input, textarea {
    flex: 1 0 0;
    color: #545454;

    /* Body/M/Regular */
    font-family: Montserrat;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 150% */
    letter-spacing: -0.005rem;
    border: none;
}

button.send {
    display: flex;
    padding: 1.25rem 3rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    color: var(--Text-Inverse-primary, #FFF);
    text-align: center;
    background: var(--Surface-Brand, #E30613);

    /* Action/Large/Bold */
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem; /* 133.333% */
    text-transform: uppercase;
}
</style>