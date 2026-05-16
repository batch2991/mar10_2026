import { Base } from "./Base";
import { locators } from "./Locators";


export class LoginPage extends Base
{
    async login(userid:string, passwd:string)
    {
        await this.page.getByPlaceholder(locators.username).fill(userid)
        await this.page.getByPlaceholder(locators.password).fill(passwd)
        await this.page.locator(locators.loginbutton).click()

    }
    async getErrormsg()
    {
       let msg=await this.page.locator(locators.errmsg).textContent()
       return msg
    }
}