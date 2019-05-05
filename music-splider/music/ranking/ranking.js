const request = require("request")
const cheerio = require('cheerio')

request('http://music.163.com/m/playlist?id=3778678', function(err, result) {
    if (err) {
        console.log("错误：" + err);
        return;
    }
    console.log(result.body);

    var $ = cheerio.load(result.body);

    console.log($('title').text());
    console.log($('.f-hide').text());
    // $('.f-hide').forEach(function(item) {
    //     console.log(item)
    // })
})