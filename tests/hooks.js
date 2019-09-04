const { screenshot, hover, click, waitFor, $, write } = require('taiko');

afterStep(function () {
     screenshot();
});

// async function deleteRecord(recordID){
//      await hover(recordID)
//      waitFor(async () => !(await $("#ManageCRF_Records").exists()));
//      await $(".recordlist_settings_cog").exists();
//      await click("Delete this record");
//      await write("Automated testing");
//      await click("Delete record");
// }

// afterScenario(function (recordID) {
//      deleteRecord(recordID)
// });

