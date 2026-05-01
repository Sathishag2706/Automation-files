const {test,expect,request} = require('@playwright/test');

const payloaddata = {
    userEmail: "sathishag2706@gmail.com",
    userPassword: "Test@123",
}

  test.beforeAll(async()=>{
    const apicontext = await request.newContext();
    const response = await apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login", { data: payloaddata });
    expect(response.ok()).toBeTruthy();
    const responsejson = await response.json();
    const token = responsejson.token;
    console.log(token);
});

//test('open',async({page})=>{
  //expect(token).toBeTruthy();
  //page.goto("https://rahulshettyacademy.com/client/#/auth/login");
