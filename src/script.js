{
  /* <script
  src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"
  type="text/javascript"
></script>;
var $;
var autoplay = true;
var autosl;
var activeSlideNo = 0; // keep track of the current slide nb
var lastSlideNo = 0; // number of slides

function slide_left() {
  if ($(".holder").is(":animated")) return; //do not animate it an animation is already in motion
  if (activeSlideNo === 0) return; //do not animate backwards if at beginning

  activeSlideNo -= 1;

  autosl;

  $(".holder")
    .stop()
    .animate(
      //animate!
      { "margin-left": "+=" + $(".slide").width() },
      1000
    );

  $(".holder_demonstr")
    .stop()
    .animate(
      //demonstration animation
      { "margin-left": "+=" + $(".slide").width() },
      1000
    );
}

function slide_right() {
  if ($(".holder").is(":animated")) return; //do not animate it an animation is already in motion
  if (activeSlideNo === lastSlideNo) return; //do not animate forward if at the end
  autoplay = true;
  activeSlideNo += 1; //keep track of the current slide nb

  $(".holder")
    .stop()
    .animate(
      //animate!
      { "margin-left": "-=" + $(".slide").width() },
      1000
    );

  $(".holder_demonstr")
    .stop()
    .animate(
      //demonstration animation
      { "margin-left": "-=" + $(".slide").width() },
      1000
    );
}

function quick_demo() {
  var i = -1;
  var iterID = setInterval(function () {
    i++ < 1 ? slide_right() : slide_left();
    if (i > 2) window.clearInterval(iterID);
  }, 3000);
}

$(document).ready(function () {
  lastSlideNo = $("#holder").children().length - 1;

  $("#arrow_left").click(function () {
    slide_left();
  });

  $("#arrow_right").click(function () {
    slide_right();
  });
  quick_demo();
});

//on resize, recalibrate margin to point to desired (current) slide
$(window).resize(function () {
  $(".holder").css({ marginLeft: -1 * activeSlideNo * $(".slide").width() });
  $(".holder_demonstr").css({
    marginLeft: -1 * activeSlideNo * $(".slide").width() - 3,
  });
}); */
}
