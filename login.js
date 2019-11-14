const { openBrowser, goto, inputField, focus, write, click, $, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("https://uk.castoredc.com/");
        await focus(inputField({id:"field-username"}));
        await write("X");
        await focus(inputField({id:"field-password"}));
        await write("X");
        await click("Log in");
        await click($(".PrimaryButton"));
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
