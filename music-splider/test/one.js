const install = require('superagent-charset');
const request = require('superagent');
const cheerio = require("cheerio");

superagent = install(request);
superagent.get('http://wufazhuce.com/').charset('UTF-8').end(function(err,res) {
    if(err) {
        console.log(err);
    }
    // console.log(res.text);
    let $ = cheerio.load(res.text);
    let selectItem=$('#carousel-one .carousel-inner .item');
    let todayOne=selectItem[0]; //获取轮播图第一个页面，也就是当天更新的内容
    let todayOneData={  //保存到一个json中
        imgUrl:$(todayOne).find('.fp-one-imagen').attr('src'),
        type:$(todayOne).find('.fp-one-imagen-footer').text().replace(/(^\s*)|(\s*$)/g, ""),
        text:$(todayOne).find('.fp-one-cita').text().replace(/(^\s*)|(\s*$)/g, "")
    };
    console.log(todayOneData);
});