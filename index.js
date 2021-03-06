const puppeteer = require('puppeteer');
const writeToFile = require('./functions/writeToFile');
const targetWebsite = require('./config').targetWebsite;
const targetElement = require('./config').targetElement;

(async () => {
  const allWorkouts = {};
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(targetWebsite);
  
  const test = await page.$$eval(targetElement, el => {
         
        return el.map(element => element.innerText)
    });
  console.log(test)

  await browser.close();
  console.log('off')

//todo: This is where the object gets saved as a json object -- first build the object
// writeToFile.save(testObject)


})();