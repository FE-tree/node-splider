const install = require('superagent-charset');
const request = require('superagent');

superagent = install(request);
superagent.get('http://news.163.com/').charset('gb2312').end(function(err,res) {
    if(err) console.log(err);
        console.log(res.text);
});
