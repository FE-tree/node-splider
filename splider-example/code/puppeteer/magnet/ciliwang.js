const puppeteer = require('puppeteer');

puppeteer.launch({
	ignoreHTTPSErrors:true, 
    // headless:false,        
    slowMo:250,             
    timeout:0              
}).then(async browser => {
	let page = await browser.newPage();
    await page.goto('https://www.ciliwang.club/');

    const searchInput = await page.$("#keyword");
	await searchInput.focus();
	await page.keyboard.type("蜘蛛侠");
	const searchBtn = await page.$(".search_btn");
    await searchBtn.click();
    
    await page.waitForSelector('#list_cont'); //等待元素加载之后，否则获取不异步加载的元素
    const datas = await page.$$eval('#list_cont > .single_cont', list => {
		return list.map(item => {
            let a = item.getElementsByTagName('a')[0]
            let lis = item.getElementsByClassName('data_text')
            return {
				href: a.href.trim(),
                title: a.title,
                src: a.getAttribute('data-src'),
                info: {
                   time: lis[0].innerHTML.replace('<label>创建时间：</label>', ''),
                   size: lis[1].getElementsByClassName('org_radius')[0].innerHTML.replace(/[\s]+/g, ''),
                   hot: lis[2].innerHTML.replace('<label>热度值：</label>', '')
                }
			}
		});
    });
    
    console.log(datas)
    await browser.close();
})