var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");

request('http://mp.weixin.qq.com/s/_C19UOlC3C1r_qnNx2aoag', function(err, result) {
    if (err) {
        console.log("错误：" + err);
        return;
    }
    // console.log(result.body);
    
    //把 html 装载到 cheerio 中
    var $ = cheerio.load(result.body);
    //通过 DOM 抓取网页数据
    console.log($('title').text());
    console.log($('.rich_media_meta_list').text());
    console.log($('#post-user').text());
    console.log($('section p').text());
    $('img').forEach(function(item) {
        console.log(item)
    })

    var content = $('title').text() + '//' + $('.rich_media_meta_list').text() + '//'
                    + $('#post-user').text() + '//' + $('section p').text() + '//' +
                    $('img')

    // 存储为.txt文件
    fs.writeFile("./file/" + $('title').text() + ".txt", content, function(err) {
        if (err) throw err;
    });                
})