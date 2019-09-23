const puppeteer = require('puppeteer');

async function getPic() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://baidu.com');
//   await page.setViewport({width: 1000, height: 500})
  await page.screenshot({path: 'splider-puppeteer/test/baidu.png'});

  await browser.close();
}

getPic();