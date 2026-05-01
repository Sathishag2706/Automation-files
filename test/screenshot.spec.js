const {test,expect} = require("@playwright/test");
const { match } = require("node:assert/strict");
const { snapshot } = require("node:test");
const baseurl = ("https://rahulshettyacademy.com/AutomationPractice");
test("@web location screenshot",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice");
    await page.locator("#radio-btn-example").screenshot({path: "./Screenshots/radio.png"});});
                           //fullpage//
test("@web fullpage",async({page})=>{
    await page.goto(baseurl);
   await page.screenshot({path: "./Screenshots/full.png",fullPage:true});

}
);
                         //screenshot comparing//
test("@web screenshot compare",async({page})=>{
await page.goto (baseurl);
try{
expect(await page.screenshot()).toMatchSnapshot('l.png');
}catch(e){
    console.log("screenshot is not matching".message);
     sssss
//aaaaaaa eeeee / all received //
}})

