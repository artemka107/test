$(".tab--1 .tab__item").not(":first").hide();
$(".tab--1 .tab__toggle").click(function(evt) {
  evt.preventDefault();
  $(".tab--1 .tab__toggle").removeClass("tab__toggle--active").eq($(this).index()).addClass("tab__toggle--active");
  $(".tab--1 .tab__item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("tab__toggle--active");

$(".tab--2 .tab__item").not(":first").hide();
$(".tab--2 .tab__toggle").click(function(evt) {
  evt.preventDefault();
  $(".tab--2 .tab__toggle").removeClass("tab__toggle--active").eq($(this).index()).addClass("tab__toggle--active");
  $(".tab--2 .tab__item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("tab__toggle--active");
