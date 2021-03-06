const puppeteer = require('puppeteer');
const writeToFile = require('./functions/writeToFile');
const targetWebsite = require('./config').targetWebsite;
const targetElement = require('./config').targetElement;

(async () => {
  const allWorkouts = {};
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(targetWebsite);
  
  const mainElements = await page.$$(targetElement);

  for (let singleElement of mainElements) {
      let inputField = await singleElement.$eval('input[type=checkbox]', el => el.value);
      let category = await singleElement.$eval('.ExCategory-formLabelLabel', el => el.innerText);  
  }


  await browser.close();
  console.log('off')

//todo: This is where the object gets saved as a json object -- first build the object
// writeToFile.save(testObject)


})();