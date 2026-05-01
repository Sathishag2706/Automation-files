const {test,expect}= require('@playwright/test');
test('openurl', async ({page}) =>{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("input[type='email']").fill("sathishag2706@gmail.com");
await page.locator("input[type='password']").fill("Test@123");
await page.locator("input[name='login']").click();
await page.waitForSelector("(//div[@class='row'])[3]");
const productname = "iphone 13 pro";
const product = await page.locator(".card-body").count();
expect (product).toBeTruthy();
console.log(product);
for(let i=0;i>=3;++i)
    {
   if(await product.nth(i).locator("b").textcontent() === productname){
    console.log("ok");
   }
}
})




