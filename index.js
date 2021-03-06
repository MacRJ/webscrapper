const writeToFile = require('./functions/writeToFile');
const targetWebsite = require('./config').targetWebsite;
const targetElement = require('./config').targetElement;
const {openPage, closePage} = require('./functions/pageControl');

(async () => {
  const allWorkouts = {};
  let {page, browser} = await openPage(targetWebsite);
  
  const mainElements = await page.$$(targetElement);

  for (let singleElement of mainElements) {
      let inputField = await singleElement.$eval('input[type=checkbox]', el => el.value);
      let category = await singleElement.$eval('.ExCategory-formLabelLabel', el => el.innerText);
  }


  await closePage(browser)
  console.log('off')

//todo: This is where the object gets saved as a json object -- first build the object
// writeToFile.save(testObject)


})();