const {test,expect} = require("@playwright/test");
const { text } = require("node:stream/consumers");
test("table",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice");
    const val = await page.locator("(//table[@id='product'])[2]").textContent();
    val.split("\n")           /* .split('\n')        // convert to array
                                    .map(v => v.trim()) // remove spaces
                                        .filter(v => v)     // remove empty values */
    .map(v => v.trim()) // remove spaces
    .filter(v => v)     // remove empty
val.forEach(val => {
        const text = val.split(" \n");
        console.log(text);
    });
    
});