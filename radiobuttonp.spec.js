import {test,expect} from "@playwright/test"
test("registre new user",async({page})=>
{
    await page.goto("https://freelance-learn-automation.vercel.app/signup");
    const signup = page.getByRole('button', { name: 'Sign up' });
    await expect (signup).toBeDisabled();
    await page.getByPlaceholder("Name").fill("sam");  
    await page.getByPlaceholder("Email").fill("sam41@gmail.com");  
    await page.getByPlaceholder("Password").fill("sam1234");
    await page.locator("//label[text()='Java']").click();
    await page.locator("//input[@value='Female']").check();
    await expect(page.locator("//input[@value='Female']")).toBeChecked();
    await page.locator("//select[@id='state']").selectOption({value:"Karnataka"});
    await page.locator('#hobbies').selectOption({index:2});
    let signupenabled=page.locator("//button[text()='Sign up']");
    await expect(signupenabled).toBeEnabled();
    await  page.locator("//button[text()='Sign up']").click();
    //div[text()='Signup successfully, Please login!']

})