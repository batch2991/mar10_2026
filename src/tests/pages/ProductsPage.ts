import { Base } from "./Base"
import { locators } from "./Locators";

export class ProductsPage extends Base
{
    async getHeading()
    {
       await this.page.waitForTimeout(3000)
       let status=await this.page.locator(locators.prodheading).isVisible()
       return status

    }
    async logout()
    {
       
        await this.page.locator(locators.bmenu).click()
        await this.page.locator(locators.logout).click()
    }
    async getProductsCount()
    {
        let prods=await this.page.locator(locators.prodtitle).all()
        return prods.length

    }
    async addProdToCart()
    {
        let pname:string
                                   
        Math.random()   
        let n=Math.floor((Math.random()*6)+1)  //n will be any number between 1 and 6          
        pname=await this.page.locator(`(//button[.='Add to cart'])[${n}]/ancestor::div[2]/div/a`).textContent()||''
        await this.page.locator(`(//button[.='Add to cart'])[${n}]`).click();            
        return pname
    }
    public async gotoCartPage()
    {
        await this.page.locator(locators.gotoCart).click();
    }
}