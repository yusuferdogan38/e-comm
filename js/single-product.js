import { thumbsActiveFunc } from "./singleProduct/thumbsActive.js";
import { singleThumb } from "./glide.js";
import { zoomFunc } from "./singleProduct/zoom.js";
import colorsFunc from "./singleProduct/colors.js";
import valuesFunc from "./singleProduct/values.js";


const productId = localStorage.getItem("productId")
  ? JSON.parse(localStorage.getItem("productId"))
  : localStorage.setItem("productId", JSON.stringify(1));

const products = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : localStorage.setItem("products", JSON.stringify([]));

const findProduct = products.find((item) => item.id === Number(productId));

/* product title */
const productTitle = document.querySelector(".product-title");

productTitle.innerHTML = findProduct.name;
/* product title end */

/* product price  Start */
const newPriceDOM = document.querySelector(".new-price");
const oldPriceDOM = document.querySelector(".old-price");

newPriceDOM.innerHTML = findProduct.price.newPrice.toFixed(2);
oldPriceDOM.innerHTML = findProduct.price.oldPrice.toFixed(2);
/* product price  End */


const singleImageDOM = document.querySelector("#single-image");
singleImageDOM.src = findProduct.img.singleImage;


const galleryThumbs = document.querySelector(".gallery-thumbs");

let result ="";
findProduct.img.thumbs.forEach((item
)=>{
    result+=`
    <li class="glide__slide">
    <img
      src="${item}"
      alt=""
      class="img-fluid"
    />
  </li>
    `;
});


galleryThumbs.innerHTML = result;
/* product gallery end*/


/*Add to cart */
let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")):[];

const findCart = cart.find((item)=>item.id===findProduct.id)

const bntAddToCart=document.getElementById("add-to-cart");
const quantityDom=document.getElementById("quantity");
let cartItems=document.querySelector(".header-cart-count");

if (findCart) {
  bntAddToCart.setAttribute("disabled","disabled")
} else {
  bntAddToCart.addEventListener("click",function(){
  cart.push({...findProduct ,quantity:Number(quantityDom.value)});
  localStorage.setItem("cart",JSON.stringify(cart));
  bntAddToCart.setAttribute("disabled","disabled");
  cartItems.innerHTML=cart.length;
  })
}



singleThumb();
thumbsActiveFunc();

