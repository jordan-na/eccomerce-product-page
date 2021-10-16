const imgDisplay = document.querySelectorAll(".img-display img");
const lightBox = document.querySelector("#lightbox");
const displayImgs = [
   "/images/image-product-1.jpg",
   "/images/image-product-2.jpg",
   "/images/image-product-3.jpg",
   "/images/image-product-4.jpg",
];
let lightBoxIndex = 4;
let mobileIndex = 0;

export const imageController = (() => {
   const showLightBox = () => {
      lightBox.classList.remove("hidden");
   };

   const lightBoxPrev = () => {
      if (lightBoxIndex < 7) {
         changeImageDisplay(++lightBoxIndex);
         const newSelected = document.querySelector("#lightbox .img-thumb.selected").nextElementSibling;
         changeSelected(newSelected);
      }
   };

   const lightBoxNext = () => {
      if (lightBoxIndex > 4) {
         changeImageDisplay(--lightBoxIndex);
         const newSelected = document.querySelector("#lightbox .img-thumb.selected").previousElementSibling;
         changeSelected(newSelected);
      }
   };

   const removeLightBox = () => {
      lightBox.classList.add("hidden");
   };

   const mobilePrev = () => {
      if (mobileIndex > 0) {
         changeImageDisplay(--mobileIndex);
         const newSelected = document.querySelector("#product-container .img-thumb.selected").previousElementSibling;
         changeSelected(newSelected);
      } else {
         mobileIndex = 3;
         changeImageDisplay(mobileIndex);
         const newSelected = document.querySelector("#product-container .img-thumb-container").lastElementChild;
         changeSelected(newSelected);
      }
   };

   const mobileNext = () => {
      if (mobileIndex < 3) {
         changeImageDisplay(++mobileIndex);
         const newSelected = document.querySelector("#product-container .img-thumb.selected").nextElementSibling;
         changeSelected(newSelected);
      } else {
         mobileIndex = 0;
         changeImageDisplay(mobileIndex);
         const newSelected = document.querySelector("#product-container .img-thumb-container").firstElementChild;
         changeSelected(newSelected);
      }
   };

   const changeImageDisplay = (i) => {
      let src;
      const display = i <= 3 ? imgDisplay[0] : imgDisplay[1];
      i %= 4;
      src = displayImgs[i];
      display.src = src;
   };

   const changeSelected = (btn, i, displayName) => {
      for (const b of btn.parentElement.children) {
         b.classList.remove("selected");
      }
      if (displayName === "lightbox") {
         lightBoxIndex = i;
      } else if (displayName === "mobile") {
         mobileIndex = i;
      }
      btn.classList.add("selected");
   };

   return {
      showLightBox: showLightBox,
      lightBoxPrev: lightBoxPrev,
      lightBoxNext: lightBoxNext,
      mobilePrev: mobilePrev,
      mobileNext: mobileNext,
      removeLightBox: removeLightBox,
      changeImageDisplay: changeImageDisplay,
      changeSelected: changeSelected,
   };
})();
