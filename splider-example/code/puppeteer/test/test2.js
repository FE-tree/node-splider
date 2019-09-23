const puppeteer = require('puppeteer');

let scrape = async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://maoyan.com/board/7');
    await page.waitFor(5000);
    // Scrape
    browser.close();
    return result;
};

scrape().then((value) => {
    console.log(value); // Success!
});
