import { Base } from "./Base";
import { locators } from "./Locators";

export class CartPage extends Base 
{
  
    async getProductsInCart()
    {
      let pname
      try{
       if(await this.page.locator(locators.prods).isVisible())
           pname=await this.page.locator(locators.prods).textContent()
        }
        catch(error)
        {
            pname=''
        }
        return pname   

    }
    async removeProductsFromCart()
    {
          await this.page.locator(locators.removebtn).click()
    }   
    async checkprice()
    {
        console.log("validate price")
        console.log("checking - git hub validate price")
    }
    async f1()
    {
        
    }
async validateprice()
{
    
}
}