const{test , expect}= require('@playwright/test');
test('goto',async({page})=>{
await page.goto("https://rahulshettyacademy.com/AutomationPractice");
await expect(page.locator("#show-textbox")).toBeVisible();
await page.locator("#hide-textbox").click();
await expect(page.locator("#displayed-text")).toBeHidden();
                    //ALERT//
await page.pause();
page.on("dialog", dialog => dialog.accept());
await page.locator("#alertbtn").click();
await page.locator("#name").fill("sathish");
await page.locator("#confirmbtn").click();
await page.pause();
await page.screenshot({path: "02-alert.png"});
await page.locator("#mousehover").hover();
await page.getByText('Top').click();
//s.selectOption("Top");
                          //handling frames //
const childframe = page.frameLocator("#courses-iframe");
await childframe.locator("li a[href*='lifetime-access']:visible").click();
const text = await childframe.locator(".text h2").textContent();
console.log(text.split(" ")[0]);
////ssssss///







})