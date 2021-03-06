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
  console.log('musty', mainElements)
//   const test = [];

  for (const singleElement of mainElements) {
    await singleElement.$eval(".ExCategory-formCheckbox js-ex-finder", class2El => {
        // if(class2El.value) {
            const datasetHandle = class2El.value;
            console.log('yes', datasetHandle.jsonValue())            
        // }
        // test.push(datasetHandle)
    })
  }

//   console.log(test)

  await browser.close();
  console.log('off')

//todo: This is where the object gets saved as a json object -- first build the object
// writeToFile.save(testObject)


})();