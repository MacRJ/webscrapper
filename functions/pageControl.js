const puppeteer = require('puppeteer');

let browser;
exports.openPage = async function(targetWebsite) {
    console.log('opening webpage: ', targetWebsite);
    browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(targetWebsite);
    return {page};
};

exports.openNewPage = async function(target) {
    console.log('opening new tab: ', target);
    const page = await browser.newPage();
    await page.goto(target);
    return {page}
};

exports.closePage = async function(page) {
    return page.close()
};

exports.closeBrowser = async function() {
     return await browser.close();
};