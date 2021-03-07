const {targetWebsite} = require('./config');
const {openNewPage, closePage} = require('./functions/pageControl');

//https://www.bodybuilding.com/exercises/finder/?muscle=chest
exports.mainDataPage = async function(targetWebPage) {
    let arrayOfWorkouts = [];
    const newPage = targetWebsite + '?muscle=' + targetWebPage;
    
    //For debug
    // const newPage = targetDataPageTemp;
    
    const {page} = await openNewPage(newPage);

    const allWorkouts = await page.$$('.ExResult-row');

    for (const workout of allWorkouts) {
        const newObj = {};
        const preformattedName = await workout.$eval('.ExResult-cell > h3 > a', el => el.innerText)
        const name = preformattedName.replace(/\s/g, "_");

        newObj[name] = {};
        newObj[name]['category'] = await workout.$eval('.ExResult-cell > .ExResult-muscleTargeted > a', el => el.innerText);
        newObj[name]['equipmentType'] = await workout.$eval('.ExResult-cell > .ExResult-equipmentType > a', el => el.innerText);
        newObj[name]['img'] = await workout.$eval('.ExResult-cell > img', el => el.src);
        
        arrayOfWorkouts.push(newObj);
    };

    await closePage(page);
    console.log('finished');
    return arrayOfWorkouts;
};