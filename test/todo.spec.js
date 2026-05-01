const {test,expect}= require('@playwright/test');
test('opensite', async ({page}) =>{
    const name = page.locator("#userEmail");
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    console.log(await page.title());
    await expect (page).toHaveTitle("Let's Shop");
    if ( page.title() === "Login - Rahul Shetty Academy") {

    console.log("title matched");
    }
   else 
    {
     console.log("title not matched")
   }
   await page.locator("#userEmail").fill("pranav@gmail.com");
    await page.locator("#userPassword").fill("Pranav@123");
    await page.locator("#login").click();
    await name.fill("sathish");
    });
    //
