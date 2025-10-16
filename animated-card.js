//elementy rzedu kart
let cardsColumn = document.querySelectorAll('.cards-column');
let animatedCard = document.querySelectorAll('.animated-card');
let animatedRow = document.querySelector('.animated-row');
let cards = document.querySelector('.cards');

// elementy karty
let cardImage = document.querySelectorAll('.card-image');
let info = document.querySelectorAll('.info');
let infoH = document.querySelectorAll('.info h3');
let infoP = document.querySelectorAll('.info p');
let infoButton = document.querySelectorAll('.info-button');



function mousemove(index, indexOnMobile) {
    cardsColumn[index].addEventListener('mousemove', function(e) {
        // animacja ruchu
        let margin = (document.body.clientWidth - animatedRow.clientWidth) / 2;
        let xAxis = ((margin + (cardsColumn[index].clientWidth * indexOnMobile) + (cardsColumn[index].clientWidth / 2)) * (-1) + e.pageX) / 20;
        let topBrowserMargin = (cards.offsetTop + cardsColumn[index].offsetTop) - document.documentElement.scrollTop;
        console.log(topBrowserMargin);
        let yAxis = (((topBrowserMargin + (cardsColumn[index].clientHeight / 2)) * (-1)) + (e.pageY - document.documentElement.scrollTop)) / 20;
        animatedCard[index].style.transform=`rotateY(${xAxis * (-1)}deg) rotateX(${yAxis * (-1)}deg)`;
    });

    // wylaczenie transition przy wejsciu myszy na obiekt, zeby transition dzialala tylko przy zejsciu
    cardsColumn[index].addEventListener('mouseenter', function(e) {
        animatedCard[index].style.transition="none";
        // efekt popout elementow karty
        if (cardImage[index]) {
            cardImage[index].style.transform = "translateZ(80px)";
        }
        infoH[index].style.transform = "translateZ(100px)";
        infoP[index].style.transform = "translateZ(60px)";
        infoButton[index].style.transform = "translateZ(60px)";
    });

    // powrot do pozycji spoczynkowej
    cardsColumn[index].addEventListener('mouseleave', function(e) {
        animatedCard[index].style.transition="transform 0.5s ease";
        animatedCard[index].style.transform="rotateY(0deg) rotateX(0deg)";

        if (cardImage[index]) {
            cardImage[index].style.transform = "translateZ(0)";
        }
        infoH[index].style.transform = "translateZ(0)";
        infoP[index].style.transform = "translateZ(0)";
        infoButton[index].style.transform = "translateZ(0)";
    });
}

if (window.innerWidth > 992) {
    console.log('duzy ekran');
    for (i = 0; i < animatedCard.length; i++) {
        mousemove(i, i);
    }
} else {
    console.log('maly ekran');
    for (i = 0; i < animatedCard.length; i++) {
        mousemove(i, 0);
    }
}