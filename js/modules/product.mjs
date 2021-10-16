export const product = (() => {
   class Product {
      #name;
      #price;
      #qty;
      #totalPrice;
      #img;
      #id;

      constructor(name, price, qty, img, id) {
         this.#name = name;
         this.#price = price;
         this.#qty = qty;
         this.#totalPrice = `$${parseFloat(price.substring(1)) * qty}.00`;
         this.#img = img;
         this.#id = id;
      }

      getName() {
         return this.#name;
      }

      getPrice() {
         return this.#price;
      }

      getQty() {
         return this.#qty;
      }

      getTotalPrice() {
         return this.#totalPrice;
      }

      getImg() {
         return this.#img;
      }

      getId() {
         return this.#id;
      }
   }

   return {
      Product: Product,
   };
})();
