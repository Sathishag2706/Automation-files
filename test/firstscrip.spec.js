const {test , expect} = require('@playwright/test');
const { TIMEOUT } = require('node:dns');
const { Network } = require('node:inspector/promises');
const baseurl = ("https://rahulshettyacademy.com/AutomationPractice/");
test("@smoke loginfunction",async({page})=>{
    await page.goto(baseurl);
          //crosscheck practice page//
    const tittle = await page.title();
    expect (tittle).toBe("Practice Page");
     await page.getByRole('button',{name:'practice'}).click();
     await page.getByRole('button',{name:'login'}).click();})

test("@smoke radio button example",async({page})=>{
await page.goto(baseurl);
 const  text = await page.locator("(//div[@ class='left-align'])[1]").textContent();
 console.log(text);
 await expect(text).toContain("Radio Button Example");
                 //click radio button//
   await page.locator("(//label[@for='radio3'])").click();  
    page.pause();
   await page.locator("(//label[@for='radio2'])").click();
               //getbylabel
  await page.locator("//input[@value='radio1']").click();
                   //forchecking
     await expect(page.locator("//input[@value='radio1']")).toBeChecked({timeout:5000});  
   await page.screenshot({path:"./Screenshots/radio1.png"})          

})

test("@smoke county dropdown",async({page})=>{
      await page.goto(baseurl); 
       await page.locator("input#autocomplete").fill('ind');
         //using "exact" inside asssertion // 
        await page.getByText('India',{exact:true}).click();
        //we have to use input tag for input values //otherwise we use fill or type
const sel =  await page.locator("input#autocomplete").inputValue({timeout:5000});
  console.log(sel);
    
   await expect(page.locator("input#autocomplete")).toHaveValue('India');

})
test("@smoke dropdownexample",async({page})=>{
    await  page.goto(baseurl);
      await page.locator('select#dropdown-class-example').selectOption('Option1');
      page.pause();

})
test("@smoke checkboxexample",async({page})=>{
      await page.goto(baseurl);
       page.locator("#checkBoxOption1").click();
        const status = await expect(page.locator("#checkBoxOption1")).toBeChecked();
  console.log(status);
                         //count// in locator // ":checked" is pesudo class//
                         const selected = await page.locator("input[type='checkbox']:checked").count();

console.log("@smoke Selected checkboxes:", selected);
})
test("@smoke swithwindow",async({page})=>{
      await page.goto(baseurl);
      //const newpage =  page.getByText('Open Window',{exact:true});
const[child] =await Promise.all([
     page.waitForEvent('popup'),
   await page.getByText('Open Window',{exact:true}).click()
])
  await child.waitForLoadState('networkidle');
  const s = await child.locator('h1').allTextContents();
  console.log(s);
})
test("@smoke switchtab example",async({page,context})=>{
      await page.goto(baseurl);
      const[newtab] = await Promise.all([
            // use context alternate of page//
          context.waitForEvent('page'),
            await page.locator('#opentab').click(),
      ]);
      await newtab.waitForLoadState('networkidle');
       // we can use sattement for print title//
      console.log(await newtab.title());
})
test("@smoke alert popup",async({page})=>{
      await page.goto(baseurl);
      //for printing dialg mesage//
      page.on('dialog',dialog =>{
            console.log(dialog.message());
            dialog.accept();
      })
      await page.locator('#name').fill('ss');
      await page.getByRole('button',{name :'Alert'}).click();


})
test("@smoke alert two butons",async({page})=>{
      await page.goto(baseurl);
      await page.getByRole('button',{name:'Confirm'}).click();
      page.on('dialog',dialog=>{
            const text = dialog.message();
            console.log(text);
           dialog.accept();
})
      })
               //hower//
test.only(" @smoke hower",async({page})=>{
      await page.goto(baseurl);
      await page.locator("#mousehover").hover();
                    //forselcting/;
                   await page.click("text=top", { force: true });
});