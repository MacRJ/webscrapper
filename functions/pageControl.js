const puppeteer = require('puppeteer');

exports.openPage = async function(targetWebsite) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(targetWebsite);
    return {page, browser};
}

exports.closePage = async function(browser) {
     return await browser.close();
}