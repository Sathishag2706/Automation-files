const {test,expect}= require('@playwright/test');
test('openurl', async ({page}) =>{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
                 //register//
  await page.locator("p.login-wrapper-footer-text").click();               
await page.locator("#firstName").fill("sathish");
  await page.locator("#lastName").fill("kumar");
  await page.locator("#userEmail").fill("sathishag2706@gmail.com");
  await page.locator("#userMobile").fill("7358259702");
  const dropdown = await page.locator("select[formcontrolname='occupation']");
 await dropdown.selectOption("Scientist");
await page.locator("input[value='Male']").click();
await page.locator("input[type='checkbox']").click();
await page.locator("input[name='login']").click();
await page.locator("input[formcontrolname='userPassword']").fill("Test@123");
await page.locator("input[formcontrolname='confirmPassword']").fill("Test@123");
await page.locator("input[type='checkbox']").click();
await page.locator("input[name='login']").click();
await page.locator("p.login-wrapper-footer-text").click();
await page.locator("input[type='email']").fill("sathishag2706@gmail.com");
await page.locator("input[type='password']").fill("Test@123");
console.log (await page.locator("label.blink_me").textContent());
await page.locator("input[name='login']").click();
//await page.pause();
await page.screenshot({path:'screenshot.png',});
    //product seklection
   console.log (await page.locator("(//div[@class='card-body']//button)[1]").textContent());
      //all text split
     console.log(await page.locator("section#products>div>div:nth-of-type(2)").textContent());
   const s = await page.locator("//b[normalize-space(text())='iphone 13 pro']").textContent();
   const a = s.split("view add to cart");
   console.log(a);
await page.locator("(//button[contains(@class,'btn w-40')])[3]").click();
if(await page.locator("button.btn.btn-primary").isVisible())
{
 await page.locator("button.btn.btn-primary").click();
console.log("product added to cart");
}
await page.locator(".continue").click();
await page.locator("(//button[contains(@class,'btn w-10')])[2]").click();
await page.locator("(//i[@class='fa fa-shopping-cart'])[3]").click();
await page.locator("(//button[@class='btn btn-custom'])[3]").click();
// cross checking the total amount
const total= await page.locator("(//span[@class='value'])[2]").textContent();
console.log(total);
if(total==="$66500"){
  console.log("total is correct");
  await page.locator("(//button[@type='button'])[2]").click();
}else{
  console.log("total is incorrect");
}
/// personal information
await page.locator("(//input[contains(@class,'input txt')])[1]").clear();
const m = await page.locator("(//input[contains(@class,'input txt')])[1]");
await m.fill("sathish");
const e = await m.inputValue();
console.log(e);
 //ep
 const ep = await page.locator("(//select[@class='input ddl'])[1]");
 await ep.selectOption("08");
 const ep2 = await page.locator("(//select[@class='input ddl'])[2]");
 await ep2.selectOption("18");
 await page.locator("(//input[@class='input txt'])[1]").fill("123456");
 console.log(await page.locator("(//input[@class='input txt'])[2]").fill("sat"));

 
})


