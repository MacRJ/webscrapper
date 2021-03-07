const writeToFile = require('./functions/writeToFile');
const targetWebsiteTemp = require('./config').targetWebsiteTemp;
const targetElement = require('./config').targetElement;
const {openPage, closePage, closeBrowser} = require('./functions/pageControl');
const {mainDataPage} = require('./mainDataPage');

(async () => {
  const allWorkouts = {};
  let {page, browser} = await openPage(targetWebsiteTemp);
  
  const mainElements = await page.$$(targetElement);
  let singleElement = mainElements[0];

//   for (let singleElement of mainElements) {
      let inputField = await singleElement.$eval('input[type=checkbox]', el => el.value);
      let category = await singleElement.$eval('.ExCategory-formLabelLabel', el => el.innerText);

      closePage(page);

    //   console.log('inputField', inputField);
      try {
          //Should return an array of objects {name, workoutType, imageURL}
          await mainDataPage(inputField)
      }
      catch(error) {
          console.log(error)
      }
//   }


  await closeBrowser();
  console.log('off')

//todo: This is where the object gets saved as a json object -- first build the object
// writeToFile.save(testObject)


})();