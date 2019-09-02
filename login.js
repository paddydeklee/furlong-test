const { openBrowser, goto, inputField, focus, write, click, $, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("https://uk.castoredc.com/");
        await focus(inputField({id:"field-username"}));
        await write("paddydeklee@gmail.com");
        await focus(inputField({id:"field-password"}));
        await write("Paddy1234!");
        await click("Log in");
        await click($(".PrimaryButton"));
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
