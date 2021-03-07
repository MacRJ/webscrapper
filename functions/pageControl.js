const puppeteer = require('puppeteer');

let browser;
exports.openPage = async function(targetWebsite) {
    browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(targetWebsite);
    return {page};
}

exports.newPage = async function(targetWebsite) {
    const page = await browser.newPage();
    await page.goto(targetWebsite);
    return {page}
};

exports.closePage = async function(page) {
    return page.close()
}

exports.closeBrowser = async function() {
     return await browser.close();
}