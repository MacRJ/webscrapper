const writeToFile = require('./functions/writeToFile');
const targetWebsite = require('./config').targetWebsite;
const {openPage, closeBrowser} = require('./functions/pageControl');
const {mainDataPage} = require('./mainDataPage');

(async () => {
  const allWorkouts = {};
  let {page} = await openPage(targetWebsite);
  
  const mainElements = await page.$$('.ExCategory-formLabel');
  //for debug
  //let singleElement = mainElements[0];

  for (let singleElement of mainElements) {
      let inputField = await singleElement.$eval('input[type=checkbox]', el => el.value);
      let category = await singleElement.$eval('.ExCategory-formLabelLabel', el => el.innerText);


      try {
          allWorkouts[category] = await mainDataPage(inputField)
      }
      catch(error) {
          console.error(`error with inputField=${inputField} with error: ${error}`);
      }
  }


  await closeBrowser();
  console.log('off')

writeToFile.save(allWorkouts)

})();