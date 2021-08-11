const Controls = (function () {
  "use strict";

  return {
    showGallery: function () {
      $(".js-show-gallery").click(function (e) {
        e.preventDefault();
        const _this = $(this);
        $(".js-gallery").toggleClass("active");
        _this.toggleClass("active");
      });
    },
    init: function () {},
  };
})();

export default Controls;
