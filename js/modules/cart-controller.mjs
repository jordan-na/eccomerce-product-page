import { product } from "./product.mjs";
import { productItemBuilder } from "./productItemBuilder.mjs";
import { cart } from "./cart.mjs";

const virtualCart = new cart.Cart();
const cartElement = document.querySelector("#cart");
const cartStatus = document.querySelector("#cart-status");

export const cartController = (() => {
   const showCart = function () {
      cartElement.classList.toggle("show-cart");
   };

   const unshowCart = function () {
      cartElement.classList.remove("show-cart");
   };

   const addToCartElement = function () {
      const name = document.querySelector("#product-name").innerText;
      const price = document.querySelector("#price").innerText;
      const qty = parseInt(document.querySelector("#num-products").innerText);
      const img = document.querySelector(".img-thumb img").src;
      if (qty === 0) {
         showWarning();
         return false;
      } else {
         if (virtualCart.getProducts().length === 0) {
            cartElement.classList.remove("empty");
            cartElement.classList.add("not-empty");
         }
         const prod = new product.Product(name, price, qty.toString(), img, Date.now());
         addToCart(prod);
         cartStatus.classList.add("show-status");
         showConfirmation();
         virtualCart.addProduct(prod);
         // * FOR DEBUGGIN PURPOSES (REFER TO CONSOLE IN BROWSER)
         virtualCart.printProducts();
         // ***********************
         updateCartStatus();
         return true;
      }
   };

   const addToCart = (product) => {
      const name = product.getName();
      const price = product.getPrice();
      const qty = product.getQty();
      const totalPrice = product.getTotalPrice();
      const img = product.getImg();
      const productElement = productItemBuilder.buildProductElement(name, price, qty, totalPrice, img);
      document.querySelector("#items").append(productElement);
   };

   const showWarning = () => {
      const mssg = document.querySelector("#feedback-mssg");
      mssg.innerText = "Make sure to choose number of items";
      mssg.classList.add("warning");
   };

   const showConfirmation = () => {
      const mssg = document.querySelector("#feedback-mssg");
      mssg.innerText = "Item(s) added to cart";
      mssg.classList.add("confirmation");
   };

   const removeFromCartElement = async function () {
      await fadeOut(0.3, this.parentElement);
      this.parentElement.parentElement.removeChild(this.parentElement);
      virtualCart.removeProduct(product.getId);
      // * FOR DEBUGGIN PURPOSES (REFER TO CONSOLE IN BROWSER)
      virtualCart.printProducts();
      // ***********************
      if (virtualCart.getProducts().length === 0) {
         cartElement.classList.remove("not-empty");
         cartElement.classList.add("empty");
         cartStatus.classList.remove("show-status");
      }
      updateCartStatus();
   };

   const fadeOut = (duration, productItem) => {
      return new Promise((resolve, reject) => {
         productItem.style.webkitAnimation = `delete ${duration}s`;
         setTimeout(() => {
            resolve();
         }, duration * 1000);
      });
   };

   const darkenDelBtn = function () {
      this.classList.add("darken");
   };

   const lightenDelBtn = function () {
      this.classList.remove("darken");
   };

   const updateCartStatus = () => {
      cartStatus.innerText = `${virtualCart.getProducts().length}`;
   };

   return {
      showCart: showCart,
      unshowCart: unshowCart,
      addToCartElement: addToCartElement,
      removeFromCartElement: removeFromCartElement,
      darkenDelBtn: darkenDelBtn,
      lightenDelBtn: lightenDelBtn,
   };
})();
