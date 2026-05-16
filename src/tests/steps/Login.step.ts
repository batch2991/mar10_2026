import {Given,When,Then }from "@cucumber/cucumber"
import { MyWorld } from "../common/MyWorld";   
import {LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";

Given('user is on login page', async function (this:MyWorld) {
  this.loginpage=new LoginPage(this.page)
  await this.loginpage.openUrl(this.url)
});

When('enter valid userid and valid pwd and click login', async function (this:MyWorld) {
  await this.loginpage.login(this.username,this.password)
});

Then('user is on products page', async function (this:MyWorld) {
    this.productpage=new ProductsPage(this.page)
    let status=await this.productpage.getHeading()
    if(status)
        console.log("Pass : Login is successful for valid login credentials")        
    else
        console.log("Fail : Login is failed for valid credentials")
});

When('enter invalid {string} or invalid {string} and click login', async function (this:MyWorld,userid, passwd) {
      await this.loginpage.login(userid,passwd)
});

Then('error message should be displayed', async function (this:MyWorld) {
     let errmsg=await this.loginpage.getErrormsg()
     if(errmsg?.includes("do not match any user in this service"))
        console.log("Pass : Login is failed for invalid login credentials")
     else
        console.log("Fail : Error messsgae for invalid login is not as expected")
});

