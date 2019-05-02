  $(document).ready(function(){
    $('.hero__carousel__main').slick({
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: $('.hero__carousel_prev'),
        nextArrow: $('.hero__carousel_next'),
        // autoplay: true,
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
    var photo = $(container).find('.teammember__photo__img');
    photo.attr('src', 'img/team-member-active.svg');
    var fbIcon = $(container).find('.social__fb');
    fbIcon.css({'background':'#4068a1'});
    var twIcon = $(container).find('.social__tw');
    twIcon.css({'background':'#22c8d7'});
    var gplusIcon = $(container).find('.social__gplus');
    gplusIcon.css({'background':'#ff5c64'});
    var lnIcon = $(container).find('.social__ln');
    lnIcon.css({'background':'#2061b3'});
    var imgBorder = $(container).find('.teammember__photo');
    imgBorder.css({'border': '4px solid #ff5c64'});
    container.style.background = "#524350";
}

function normalImg(container) {
    var photo = $(container).find('.teammember__photo__img');
    photo.attr('src', 'img/team-member.svg');
    var fbIcon = $(container).find('.social__fb');
    fbIcon.css({'background':'#a1859e'});
    var twIcon = $(container).find('.social__tw');
    twIcon.css({'background':'#a1859e'});
    var gplusIcon = $(container).find('.social__gplus');
    gplusIcon.css({'background':'#a1859e'});
    var lnIcon = $(container).find('.social__ln');
    lnIcon.css({'background':'#a1859e'});
    var imgBorder = $(container).find('.teammember__photo');
    imgBorder.css({'border': '4px solid #a1859e'});
    container.style.background = "#5c4b5a";

}

$("#commentForm").validate();

