const { openBrowser, hover, evaluate, press, goto, waitFor, screenshot, screencast, toRightOf, button, inputField, textBox, focus, write, into, click, doubleClick, $, closeBrowser } = require('taiko');

step("Delete record <recordID>", { continueOnFailure: true}, async function(recordID) {
    await hover(recordID);
    waitFor(async () => !(await $("#ManageCRF_Records").exists()));
    await $(".recordlist_settings_cog").exists();
    await click("Delete this record");
    await write("Automated testing");
    await click("Delete record");
});

step("Assert ok <table>", async function(table) {
	await assert.ok(_selectors.getElement(table))
});