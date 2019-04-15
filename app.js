  $(document).ready(function(){
    $('.hero__carousel__main').slick({
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: $('.hero__carousel_prev'),
        nextArrow: $('.hero__carousel_next'),
        autoplay: true,
        autoplaySpeed: 3000,
    });
  });

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";

}

function redImg(container) {
    // console.log('container: ', container);
    var photo = $(container).find('.teammember__photo__img');
    console.log('src: ', photo.attr('src'));
    photo.attr('src', 'img/team-member-active.svg');
}

function normalImg(container) {
    var photo = $(container).find('.teammember__photo__img');
    console.log('src: ', photo.attr('src'));
    photo.attr('src', 'img/team-member.svg'); 
}