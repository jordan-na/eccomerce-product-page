export const cart = (() => {
   class Cart {
      #products = [];

      addProduct(product) {
         this.#products.push(product);
      }

      removeProduct(productId) {
         const removeIndex = this.#products.findIndex((p) => p.id === productId);
         if (removeIndex > -1) {
            this.#products.splice(removeIndex, 1);
         }
      }

      getProducts() {
         return this.#products;
      }

      printProducts() {
         console.log("PRODUCTS IN CART:");
         for (const prod of this.#products) {
            console.log(prod);
         }
      }
   }

   return {
      Cart: Cart,
   };
})();
