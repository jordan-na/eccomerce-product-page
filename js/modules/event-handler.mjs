import { imageController } from "./image-controller.mjs";
import { cartController } from "./cart-controller.mjs";

export const eventHandler = (() => {
   const setupNavSlideBtns = () => {
      const navLinks = document.querySelector("#nav-links");
      const navToggle = document.querySelector("#nav-toggle");
      const navCloseBtn = document.querySelector("#nav-close-btn");
      const darkBg = document.querySelector("#dark-bg");
      navToggle.addEventListener("click", () => {
         navLinks.style.webkitAnimation = "slideIn 0.6s forwards";
         darkBg.style.display = "block";
      });
      navCloseBtn.addEventListener("click", () => {
         navLinks.style.webkitAnimation = "slideOut 0.6s forwards";
         darkBg.style.display = "none";
      });
   };

   const setupDisplayLightBoxBtn = () => {
      const lightBoxDisplayBtn = document.querySelector(".img-display");
      lightBoxDisplayBtn.addEventListener("click", imageController.showLightBox);
   };

   const setupImgThumbBtns = () => {
      const imgThumbBtns = document.querySelectorAll(".img-thumb");
      for (let i = 0; i < imgThumbBtns.length; i++) {
         const btn = imgThumbBtns[i];
         if(i < 4) {
            btn.addEventListener("click", () => {
               imageController.changeImageDisplay(i);
               imageController.changeSelected(btn, i, "mobile");
            });
         } else {
            btn.addEventListener("click", () => {
               imageController.changeImageDisplay(i);
               imageController.changeSelected(btn, i, "lightbox");
            });
         }
      }
   };

   const setupLightBoxTransitionBtns = () => {
      const prevBtn = document.querySelector("#lightbox-prev");
      const nextBtn = document.querySelector("#lightbox-next");
      prevBtn.addEventListener("click", imageController.lightBoxNext);
      nextBtn.addEventListener("click", imageController.lightBoxPrev);
   };

   const setupCloseLightBoxBtn = () => {
      const lightBoxCloseBtn = document.querySelector("#lightbox-close");
      lightBoxCloseBtn.addEventListener("click", imageController.removeLightBox);
   };

   const setupMobileTransitionBtns = () => {
      const prevBtn = document.querySelector("#mobile-prev");
      const nextBtn = document.querySelector("#mobile-next");
      prevBtn.addEventListener("click", imageController.mobilePrev);
      nextBtn.addEventListener("click", imageController.mobileNext);
   }

   const setupAmountController = () => {
      const numProducts = document.querySelector("#num-products");
      const decrement = document.querySelector("#decrement");
      const increment = document.querySelector("#increment");
      decrement.addEventListener("click", function () {
         const qty = parseInt(numProducts.innerText);
         if (qty != 0) {
            numProducts.innerText = `${qty - 1}`;
         }
      });
      increment.addEventListener("click", function () {
         const qty = parseInt(numProducts.innerText);
         numProducts.innerText = `${qty + 1}`;
      });
   };

   const setupCartListeners = () => {
      const cartBtn = document.querySelector("#cart-btn");
      const cartElement = document.querySelector("#cart");
      cartBtn.addEventListener("click", cartController.showCart);
      cartBtn.addEventListener("mouseenter", cartController.showCart);
      cartElement.addEventListener("mouseleave", cartController.unshowCart);
   };

   const setupAddToCartBtn = () => {
      const addToCartBtn = document.querySelector("#add-to-cart-btn");
      addToCartBtn.addEventListener("click", () => {
         if(cartController.addToCartElement()) {
            setupDelBtn();
         }
      });
   };

   const setupDelBtn = () => {
      const itemAdded = document.querySelector("#items").lastChild;
      const delBtn = itemAdded.lastChild;
      delBtn.addEventListener("click", cartController.removeFromCartElement);
      delBtn.addEventListener("mouseenter", cartController.darkenDelBtn);
      delBtn.addEventListener("mouseleave", cartController.lightenDelBtn);
   };

   const removeClassesOnAnimationFinish = () => {
      const mssg = document.querySelector("#feedback-mssg");
      mssg.addEventListener("animationend", function () {
         this.classList.remove("warning");
         this.classList.remove("confirmation");
      });
   };

   const setupEventListeners = () => {
      setupNavSlideBtns();
      setupDisplayLightBoxBtn();
      setupCloseLightBoxBtn();
      setupLightBoxTransitionBtns();
      setupMobileTransitionBtns();
      setupImgThumbBtns();
      setupCartListeners();
      setupAddToCartBtn();
      setupAmountController();
      removeClassesOnAnimationFinish();
   };

   return {
      setupEventListeners: setupEventListeners,
   };
})();
