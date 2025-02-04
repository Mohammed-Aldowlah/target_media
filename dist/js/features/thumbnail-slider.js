import { Fancybox } from "../node_modules/@fancyapps/ui/dist/fancybox/fancybox.esm.js";
import { Carousel } from "../node_modules/@fancyapps/ui/dist/carousel/carousel.esm.js";
import { Thumbs } from "../node_modules/@fancyapps/ui/dist/carousel/carousel.thumbs.esm.js";

new Carousel(
  document.getElementById("myCarousel"),
  {
    // Your custom options
    Dots: false,
    Thumbs: {
      type: "classic",
    },
  },
  { Thumbs }
);

function initCarousel(carousel) {
  carousel.init();
}

function initGallery() {
  Fancybox.bind("[data-fancybox='gallery']", {
    hideScrollbar: false,
    Images: {
      zoom: true,
    },
  });
}

initGallery();
