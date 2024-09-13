<template>
  <div class="reviews">
                <div class="card">
                    <div class="card-photo">
                        <div class="card-photo-text">A</div>
                    </div>
                    <div class="card-name">Agata</div>
                    <div class="card-text">HSC to nowoczesne, czyste i ładne wnętrze. Profesjonalni, kompetentni i zawsze uśmiechnięci trenerzy tworzą przyjemny klimat tego miejsca, co skutkuje tym, że treningi stają się czystą przyjemnością, a nie tylko smutnym obowiązkiem. Polecam wszystkim z całego serca!</div>
                </div>
            
                <div class="card">
                    <div class="card-photo">
                        <div class="card-photo-text">K</div>
                    </div>
                    <div class="card-name">Katarzyna</div>
                    <div class="card-text">Pierwsze i jedyne takie miejsce we Wrocławiu dla osób, które chcą zadbać o swoje zdrowie i sylwetkę. Profesjonalna kadra, która z należytą starannością zajmuje się Podopiecznymi. Miejsce ze wspaniałą sportową atmosferą , dla każdego. Polecam!. </div>
                </div>
        
                <div class="card">
                    <div class="card-photo">
                        <div class="card-photo-text">G</div>
                    </div>
                    <div class="card-name">Gerard</div>
                    <div class="card-text">Super miejsce do treningu. Nowoczesne i przestronne wnętrze pachnące nowością i świeżością, z osobną salą przeznaczoną do treningów sztuk walki. Wykwalifikowana kadra trenerska. Miejsce spełniające wszelkie niezbędne warunki do „odhaczania” kolejnych celów treningowych. Polecam serdecznie. </div>
                </div>
    </div>
    
    </template>
    
    <script>
   
    
    export default {
        name: 'SwiperReviews',
    }
    </script>
    
    <style scoped>
.reviews{
    display: flex;
align-items: flex-start;
gap: 2rem;
}

    .card {
        display: flex;
        width: 25.6875rem;
        padding: var(--space-300, 1.5rem) var(--space-300, 1.5rem) 3rem var(--space-300, 1.5rem);

        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: var(--space-200, 1rem);
        background: var(--Surface-Primary, #FFF);
box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.08);
    }
    .card-photo {
        display: flex;
        padding: var(--space-150, 0.75rem);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: var(--radius-rounded, 62.5rem);
        background: #FB8903;
    }
    .card-photo-text {
        display: flex;
        width: 2.5rem;
        height: 2.5rem;
        flex-direction: column;
        justify-content: center;
        color: var(--Text-Inverse-primary, #FFF);
        text-align: center;
    
        /* Body/M/Bold */
        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem; /* 150% */
        letter-spacing: -0.005rem;
    }
    .card-name {
        width: 25.8125rem;
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
    .card-text {
        align-self: center;
        color: var(--Text-Secondary, #484848);
        text-align: center;
    
        /* Body/M/Regular */
        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem; /* 150% */
        letter-spacing: -0.005rem;
    }
    
    
    </style>