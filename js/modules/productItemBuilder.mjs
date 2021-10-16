export const productItemBuilder = (() => {
   const buildProductElement = (name, price, qty, totalPrice, img) => {
      const item = document.createElement("li");
      item.classList.add("item");
      const itemImage = document.createElement("img");
      itemImage.classList.add("item-image");
      itemImage.src = img;
      itemImage.alt = "item image";
      const itemDetails = document.createElement("div");
      itemDetails.classList.add("item-details");
      const itemName = document.createElement("p");
      itemName.classList.add("item-name");
      itemName.innerText = name;
      const itemPriceDetails = document.createElement("p");
      itemPriceDetails.classList.add("item-price-details");
      const itemPrice = document.createElement("span");
      itemPrice.classList.add("item-price");
      itemPrice.innerText = price + " x ";
      const itemQty = document.createElement("span");
      itemQty.classList.add("item-qty");
      itemQty.innerText = qty + " ";
      const itemTotalPrice = document.createElement("span");
      itemTotalPrice.classList.add("item-total-price");
      itemTotalPrice.innerText = totalPrice;
      const itemDelBtn = document.querySelector(".item-del-btn").cloneNode(true);
      item.append(itemImage, itemDetails, itemDelBtn);
      itemDetails.append(itemName, itemPriceDetails);
      itemPriceDetails.append(itemPrice, itemQty, itemTotalPrice);
      return item;
   };

   return {
      buildProductElement: buildProductElement,
   };
})();
