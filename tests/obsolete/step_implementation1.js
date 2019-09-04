/* globals gauge*/
"use strict";
const { openBrowser,write, closeBrowser, goto, press, text, focus, inputField, toRightOf } = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({ headless: headless })
});

afterSuite(async () => {
    await closeBrowser();
});

step("Goto getgauge github page", async () => {
    await goto('https://github.com/getgauge');
});

step("Goto edc login page", async () => {
    await goto('https://uk.castoredc.com');
});

step("login with <username> and <password>", async() => {
    
})

step("Goto <content>", async (content) => {
    await goto(content);
});

step("Search for <query>", async (query) => {
    await focus(inputField(toRightOf('Pricing')))
    await write(query);
    await press('Enter');
});


step("Write <query>", async (query) => {
    await write(query);
    await press('Enter');
});

step("Page contains <content>", async (content) => {
    assert.ok(await text(content).exists());
});

step("Click login", async () => {
    await press({class: "PrimaryButton"});
})

step("Login as <username> and <password>", async (content) => {
    await focus(inputField({id:"field-username"}));
    await write(username);
    await focus(inputField({id:"field-password"}));
    await write(password);
    await press({class: "PrimaryButton"});
})
