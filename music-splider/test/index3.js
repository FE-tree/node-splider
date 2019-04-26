import { get } from 'request';
import { decode } from 'iconv-lite';
get({
    url : 'http://temp.163.com/special/00804KVA/cm_yaowen.js?callback=data_callback',
    encoding : null //让body 直接是buffer
}, function (err, response, body) {
    //返回的body 直接就是buffer 了...
    var buf =  decode(body, 'gb2312');
    //去掉头部的 data_callback(
    var str = buf.replace('data_callback(','');
    //去掉尾部的 )
    str = str.replace(')','');
    var str1 = JSON.parse(str);
    str1.forEach(function(s){
      console.log('文章标题：'+s.title);
      console.log('摘要：'+s.digest);
      console.log('文章链接：'+s.docurl);
      console.log('内容链接：'+s.commenturl);
      console.log('tienum：'+s.tienum);
      console.log('tlastid：'+s.tlastid);
      console.log('tlink：'+s.tlink);
      console.log('标签：'+s.label);
      console.log('时间：'+s.time);
      console.log('新闻类别：'+s.newstype);
      console.log('频道名称：'+s.channelname);
      console.log('图片链接：'+s.imgurl);
    });
});