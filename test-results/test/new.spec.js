const {test,expect} = require('@playwright/test');
test ('new',async({page})=>{
    //await page.goto("https://www.google.com/?zx=1771868791512&no_sw_cr=1");
    await page.goto("https://demo-app2.buildyourindex.com/login");
    //await page.goBack();
    //await page.goForward();
    page.on('dialog',dialog=>dialog)


})