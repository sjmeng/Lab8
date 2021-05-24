# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

- You would ideally run your automated tests using Github actions whenever you push alterations to your code.


2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   
  -  I think you could probably use a unit test here. You can consider the "message" feature as an individual component of the messaging application.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters
   
- Yes, unit testing is described as looking at individual parts of the code to debug on a small scale, so evaluating a small feature of the messaging app like max message length with one is appropriate.   

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

- We expect our tests to run without generating the visuals of the browser UI.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

- It could include the click method on the settings image to navigate to settings such as 
  
```
await page.click("body > header > img");

```
