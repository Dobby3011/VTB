//new Swiper('.swiper-container');
document.addEventListener('DOMContentLoaded', () => {
    new ItcSimpleSlider('.itcss', {
        loop: true,
        autoplay: false,
        interval: 5000,
        swipe: true,
    });
});