import "select2/dist/js/select2.full";
import layout from "./global/layout";
import objectFitImages from "object-fit-images";
import Sliders from "./modules/Sliders";
import Controls from "./modules/Controls";
import Popup from "./modules/Popup";
import Submit from "./modules/Submit";

$(function () {
  objectFitImages();
  Sliders.init();
  Controls.init();
  Popup.init();
  Submit.init();

  const customTemplate = (state) => {
    if (!state.id) {
      return state.text;
    }
    return $(
      "<span>" +
        state.text +
        "</span>" +
        '<span class="form__select-desc">' +
        state.element.dataset.desc +
        "</span>"
    );
  };
  layout.layoutHandler({
    onInit: (layout) => {
      if (layout.WIN_WIDTH <= 639) {
        Controls.showGallery();
      }
      $(".js-select").select2({
        minimumResultsForSearch: Infinity,
        placeholder: " ",
        templateResult: customTemplate,
      });
    },
    afterResize: (layout) => {
      $(".js-select").select2({
        minimumResultsForSearch: Infinity,
        placeholder: " ",
        templateResult: customTemplate,
      });
    },
  });
});
