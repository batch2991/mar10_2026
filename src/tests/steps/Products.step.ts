import {When,Then} from "@cucumber/cucumber"
import { MyWorld } from "../common/MyWorld";
import { CartPage } from "../pages/CartPage";

let p1:any,p2:any

Then('The number of products should be as expected', async function (this:MyWorld) {
   let count=await this.productpage.getProductsCount()
   if(count==6)
      console.log("Pass : Total products are 6 as expected")
    else
      console.log("Fail : The total product coount is not as expected 6")
});

When('add a products to cart', async function (this:MyWorld) {
   p1=await this.productpage.addProdToCart()

});

When('user is on cart page', async function (this:MyWorld) {
    await this.productpage.gotoCartPage()
    this.cartpage=new CartPage(this.page)
});

Then('the product should be added to cart', async function (this:MyWorld) {
     p2= await this.cartpage.getProductsInCart()
     if(p1==p2)
        console.log("Pass : The product added to cart is matching")
     else
        console.log("Fail : The product added to cart Not matching")
});

When('remove the product from cart', async function (this:MyWorld) {
    await this.cartpage.removeProductsFromCart()
});

Then('the product should be removed from cart', async function (this:MyWorld) {
    p2=await this.cartpage.getProductsInCart()
    if(p2==null ||p2=='')
        console.log("Pass :  The product is removed from Cart")
    else
        console.log("Fail : The product is not removed from Cart")

});