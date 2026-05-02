const {test,expect}= require('@playwright/test');
test("calc",async({page})=>{
await page.goto("https://rahulshettyacademy.com/");

const s = await page.locator("(//a[contains(@class,'items-center justify-center')])[2]");

const[child] = await Promise.all([
  page.waitForEvent('popup'),
  s.click(),
    ])
    await child.waitForLoadState('networkidle');
    await child.screenshot({path: "01-child.png"});
    const m =await child.locator("//h2[contains(@class,'BrowseProductsTitle text-2xl')]").textContent({ timeout: 60000 });
    console.log(m);
});
code is working fine and it is taking the screenshot of child page and also printing the text content of h2 tag in child page.
  ok looks fine
//child created//
