const {targetWebsite, targetDataPageTemp} = require('./config');
const {newPage, closePage, closeBrowser} = require('./functions/pageControl');

//https://www.bodybuilding.com/exercises/finder/?muscle=chest
exports.mainDataPage = async function(targetWebsite) {
    let arrayOfWorkouts = [];
    // const newPage = targetWebsite + '?muscle=' + page;
    const newPagepage = targetDataPageTemp;
    
    const {page} = await newPage(newPagepage);

    const allWorkouts = await page.$$('.ExResult-row');

    for (const workout of allWorkouts) {
        const newObj = {};
        const name = await workout.$eval('link[itemprop=name]', el => el.innerText);
        console.log({name})
        //name
            // newObj[]

        //workoutType

        //imageURL
    };

    await closeBrowser();
    console.log('finished');

};