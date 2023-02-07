//fullSizeImage set
$(function () {
  $('#image1').click(function () {
    $('#myModal1').css('display', 'block');
  });
  $('#image2').click(function () {
    $('#myModal2').css('display', 'block');
  });
  $('#image3').click(function () {
    $('#myModal3').css('display', 'block');
  });
});

var offset = 50;
var duration = 500;
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
//scrollTop set
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > offset)
      $('.up').fadeIn(duration);
    else
      $('.up').fadeOut(duration);
    if ($(this).scrollTop() > offset)
      $('.top_x').fadeIn(duration);
    else
      $('.top_x').fadeOut(duration);
    /*if ($(this).scrollTop() > offset)
    $('.box').css('display','none');else
    $('.box').css('display','block');*/
  });
  $('.up').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, duration);
  });
});
//closeModal
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

//listSlickSlider set
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  focusOnSelect: true
});
