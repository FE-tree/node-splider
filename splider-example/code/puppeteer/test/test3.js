const puppeteer = require('puppeteer');

let scrape = async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    await page.goto('https://maoyan.com/board/7');
    await page.click('#app > .content > .wrapper > .main > .board-wrapper > dd > a');
    await page.waitFor(1000);

    const result = await page.evaluate(() => {
        let name = document.querySelector('h3.name').innerText;
        let stonefont = document.querySelector('.stonefont').innerText;

        return {
            name,
            stonefont
        }

    });

    browser.close();
    return result;
};

scrape().then((value) => {
    console.log(value); // Success!
});
