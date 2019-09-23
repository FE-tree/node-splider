const puppeteer = require('puppeteer');

puppeteer.launch({
	ignoreHTTPSErrors:true, // 是否在导航期间忽略 HTTPS 错误
    //headless:false,         // 是否以 无头模式 运行浏览器
    slowMo:250,             //  将 Puppeteer 操作减少指定的毫秒数
    timeout:0               // 等待浏览器实例启动的最长时间（以毫秒为单位）
}).then(async browser => {
	let page = await browser.newPage();
	await page.goto('https://maoyan.com/board/7');
    await page.waitFor(3000);
    const results = await page.$$eval('#app > .content > .wrapper > .main > .board-wrapper > dd > a.image-link', links => {
        console.log(links)
        return links.map(a => {
			return {
				href: a.href.trim(),
                title: a.title,
			}
		});
	});
	page.close();

	for (var i = 0; i < results.length-1; i++) {
		page = await browser.newPage()
		await page.setViewport({width:1920, height:1080});
		var a = results[i];
		await page.goto(a.href);
		let filename = "splider-puppeteer/test/images/movie-"+i+".png";
		await page.screenshot({path: filename});
		page.close();
	}

	browser.close();
});