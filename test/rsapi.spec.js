const {test , expect} = require('@playwright/test');
const { ValueType } = require('exceljs');
const {apiutils} = require('./utils/apiutil');
let token;
let orderpostdata = {orders: [{country: "Afghanistan", productOrderedId: "6960ea76c941646b7a8b3dd5"}]};
let orderid;

test.beforeAll('@rs',async({request})=>{
    const api = new apiutils(request);
/*const postresponse =  await request.post("https://rahulshettyacademy.com/api/ecom/auth/login",{
    data:{userEmail: "sathishag2706@gmail.com", userPassword: "Test@123"}})
   expect(postresponse.ok).toBeTruthy();
const jsonbody = await postresponse.json();
//console.log(jsonbody);
const token = jsonbody.token;
console.log(token);*/

});
                      //injecting tokens for  skip UI loggin//
test('@rs login',async({page})=>{
    // used for adding js in playwrightscript//
    page.addInitScript(Value =>{
        window.localStorage.setItem(Value);
    },token);
    await page.goto("https://rahulshettyacademy.com/client");
    const tittle = await page.title();
    console.log(tittle);
});
      //orderid & details// 
      test('@rs order',async({request})=>{
 const postresponse1 =  await request.post("https://rahulshettyacademy.com/api/ecom/order/create-order",{
    
        data : orderpostdata,
        headers: {
            'Authorization' :token,
            'content-type' : 'application/json ',

        },
   })
 const jsondata = await postresponse1.json();
 const orderid = await jsondata[0];
 console.log(orderid);
});
ssssss
        updatd fine
   check with laptop
