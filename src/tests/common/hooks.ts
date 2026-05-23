import {Before,After,setDefaultTimeout} from "@cucumber/cucumber"
import {MyWorld} from "./MyWorld"
import { chromium } from "@playwright/test"

import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: path.resolve(process.cwd(), '.env') })

setDefaultTimeout(60000)

Before(async function(this:MyWorld){

    this.browser=await chromium.launch({headless:true})
    this.page=await this.browser.newPage()
    this.url=process.env.url||''
    this.username=process.env.saucedemo_user||''
    this.password=process.env.saucedemo_pwd||''    
})
After(async function(this:MyWorld){
   await this.page.close()
   await this.browser.close()
})
