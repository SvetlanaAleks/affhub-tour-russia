import "slick-carousel";
const Sliders = (function () {
  "use strict";

  return {
    initCitySlider: function () {
      $(".js-city-slider").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        variableWidth: true,
        dots: false,
        prevArrow:
          '<button class="prev"><i class="fico fico-arrow"></i></button>',
        nextArrow:
          '<button class="next"><i class="fico fico-arrow"></i></button>',
      });
    },
    init: function () {
      Sliders.initCitySlider();
    },
  };
})();

export default Sliders;
