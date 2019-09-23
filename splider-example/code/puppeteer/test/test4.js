const puppeteer = require('puppeteer');

let scrape = async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    await page.goto('https://maoyan.com/board/7');
    await page.waitFor(3000);

    const result = await page.$$eval('#app > .content > .wrapper > .main > .board-wrapper > dd > a.image-link', links => {
        console.log(links)
        return links.map(a => {
			return {
				href: a.href.trim(),
                title: a.title,
			}
		});
	});

    browser.close();
    return result;
};

scrape().then((value) => {
    console.log('result:', value)
});
