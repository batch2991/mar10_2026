import {World,setWorldConstructor} from "@cucumber/cucumber"
import {Browser,Page} from "@playwright/test"
import {LoginPage} from "../pages/LoginPage"
import { ProductsPage } from "../pages/ProductsPage"
import { CartPage } from "../pages/CartPage"

export class MyWorld extends World
{
   page!:Page
   browser!:Browser
   loginpage!:LoginPage
   productpage!:ProductsPage
   cartpage!:CartPage
   url!:string
   username!:string
   password!:string 

}

setWorldConstructor(MyWorld)