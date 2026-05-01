const{test,expect}=require('@playwright/test');
test('first playwright test', async ({page}) =>
{
    await page.goto("https://www.flipkart.com/");
    //for getting tittle
  console.log(await page.title());
    await expect (page).toHaveTitle("Online Shopping India Mobile, Cameras, Lifestyle & more Online @ Flipkart.com");
    // for click on login button
   // await page.locator("//span[normalize-space(text())='Login']").click();
   await page.locator(".ol1oIH").click();
    await page.locator('input.c3Bd2c.yXUQVt').fill('sathishag2706@gmail.com');
    await page.locator('button.dSM5Ub.Kv3ekh').click();
});