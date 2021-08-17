$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

const $botao = document.querySelector('.-plusInfo')
const $wrapInfo = document.querySelector('.wrap-info')

$botao.addEventListener('click', ()=>{
    console.log('feliz!!! clicou!!!' + $wrapInfo);
    $wrapInfo.classList.add('-click')

})