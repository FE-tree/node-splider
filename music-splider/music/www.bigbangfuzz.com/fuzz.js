const request = require("request")
const cheerio = require('cheerio')

/*
request('https://www.bigbangfuzz.com/Handlers/Search.ashx', function(err, result) {
    if (err) {
        console.log("错误：" + err);
        return;
    }
    console.log(result.body);

    var $ = cheerio.load(result.body);
})
*/

request.post({
    url: 'https://www.bigbangfuzz.com/Handlers/Search.ashx',
    form: {
        AlbumPageNumber: '1',
        AlbumSortBy: 'date',
        LabelSortBy: "a-z",
        LoadAll: false,
        ParentSearchHistoryID: -1,
        TrackPageNumber: "1",
        TrackSortBy: "date",
        TriggeredBy: "keyword",
        TriggeredByEnum: 3,
        TriggeredOn: "search",
        ViewBy: "track",
        SearchTerms: [
            {
                SearchHistoryID: -1,
                SearchTermFieldID: -1,
                TermType: "keyword",
                TermValue: "all%20Night"
            }
        ]
    }
}, function(err, httpResponse, body){
    if (err) {
        console.log("错误：" + err);
        return;
    }
    console.log(body);
})