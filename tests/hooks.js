const { goto, screenshot, hover, click, waitFor, $, write } = require('taiko');

afterStep(function () {
     screenshot();
});

async function deleteRecord(recordID){
     console.log("deleting record"+ recordID);
     await goto('https://uk.castoredc.com/studies/#manage_furlong|tab_records');
     waitFor(5000);
     await hover(recordID);
     await $(".recordlist_settings_cog").exists();
     waitFor(1000);
     await click($(".recordlist_settings_cog"));
     await click("Delete this record");
     waitFor(1000);
     await write("Automated testing");
     console.log("wrote commment");
     await click("Delete record");
     assert.ok(await text("Test_1").exists());
     console.log("record deleted!")
}

afterScenario(function () {
     // deleteRecord("Test_1");
});

