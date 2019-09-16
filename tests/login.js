const { openBrowser, evaluate, checkBox, press, goto, screenshot, screencast, radioButton, toRightOf, button, inputField, textBox, focus, write, into, click, doubleClick, $, closeBrowser, waitFor } = require('taiko');
var _selectors = require('./selectors')

step("Go to edc study <study>", async(study) => {
    await goto("https://uk.castoredc.com/");
    await focus(inputField({id:"field-username"}));
    await write("paddydeklee@gmail.com");
    await focus(inputField({id:"field-password"}));
    await write("Paddy1234!");
    await click($(".PrimaryButton"));
    await $(study).exists();
    await click(study);
    console.log("study clicked");
    waitFor(2000);
    console.log("waited for 2 secs");
});

// step("Click button <selector>", async(selector) => {
//     await click(button(selector));
// });

step("Click button with selector <selector>", async function(selector) {
    var selectedElement = $('selector').text()
    await click(button(selectedElement));
});

step("Add new record with ID <recordID>", async function(recordID) {
    console.log("adding new record" + recordID);
    await press(['Alt', 'n']);
    await write(recordID);
    await press("Tab");
    await press("Enter");
    waitFor(2000);
});

step("Enter record <recordID>", async function(recordID) {
    console.log("begin enter record");
    await $(recordID).exists();
    await doubleClick(recordID);
    waitFor(2000);
    console.log("waited 2 secs then entered record");


});

step("Fill registration form", async function(){
    console.log("starting to fill registration form");
    await focus(textBox(toRightOf("Date of Registration")));
    await write("02-09-2011");
    console.log("writing Date of Registration");
    await focus(textBox(toRightOf("Consent")));
    await write("02-09-2011");
    console.log("wrote date of consent");
    await focus(textBox(toRightOf("Subject initials")));
    await write("AA");
    console.log("wrote initials");
    await focus(textBox(toRightOf("Subject DoB")));
    await write("02-09-1951");
    console.log("wrote DoB");
    await radioButton("Prospective").select();
    console.log("checked prospective");
    await radioButton("Male").select();
    console.log("checked male");
});


step("Click Next", async function(){
    waitFor(2000);
    await $("Next").exists();
    await click("Next");
})

step("Open registration form", async function(){
    await focus("1. Registration");
})