const player = new Plyr("video", { captions: { active: true } });

// Expose player so it can be used from the console
window.player = player;

$(document).ready(function () {
  $(".carousel").slick({
    slidesToShow: 3,
    centerMode: true,
    nextArrow:
      "<button class='next-arrow'><i class='fa-regular fa-chevron-right'></i></button>",
    prevArrow:
      "<button class='prev-arrow'><i class='fa-regular fa-chevron-left'></i></button>",
  });
});

// Slick version 1.5.8
