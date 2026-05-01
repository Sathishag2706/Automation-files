const {test,expect}= require('@playwright/test');
const { text } = require('node:stream/consumers');
test("calc",async({page})=>{
    const date = "2";
    const month = "June";
    const year = 2024;
    const epectedlist = [month,year];
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");
   const s = await page.locator("//a[normalize-space(text())='Top Deals']");
    const[child] = await Promise.all([
   page.waitForEvent('popup'),
    s.click(),
    ]);
    await child.waitForLoadState('networkidle');
    await child.screenshot({path: "01-calc.png"});
await child.locator("(//button[@type='button']/following-sibling::button)[1]").click();
await child.locator("//span[@class='react-calendar__navigation__label__labelText react-calendar__navigation__label__labelText--from']").click();
await child.locator("//span[@class='react-calendar__navigation__label__labelText react-calendar__navigation__label__labelText--from']").click();
await child.getByRole('button', { name: year }).click();
//await child.locator("div.react-calendar__year-view__months__month").nth(Number(month)-1).click();
await child.getByText(month).click();
await child.locator("abbr[aria-label='June 2, 2024']").click();
const input = page.locator(".react-date-picker__inputGroup__input");
for(let i =0;i<epectedlist.length;i++){
    const val = await input.nth(i).inputValue();
    expect(val).toEqual(epectedlist[i]);
}

/*await child.locator("//abbr[@aria-label='April 10, 2024']").click();
const allmonth = await child.locator(".react-calendar").textContent();
const amonth = allmonth.trim().split(/\s+/);
console.log(amonth);
amonth.forEach(amonth => console.log(amonth));
         /*convert string → array
         const amonth = allmonth.trim().split("/\s+/ ");
console.log(amonth);
amonth.forEach(amonth => {
    console.log(amonth);*/
})
//9445635454//
    


