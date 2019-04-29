const agent = require('superagent')
const cheerio = require('cheerio')
const fs = require('fs')

const url = 'https://music.163.com/artist?id='
const singerList = [{
    name: '薛之谦', id: '5781'
}, {
    name: '周杰伦', id: '6452'
}, {
    name: '李荣浩', id: '4292'
}]
// const {
//     limitLength,
//     splitId,
//     notify
// } = require('../util');

function singer(data) {
    agent.get(url+data.id).then((suc, fail) => {
            const $ = cheerio.load(suc.text)
            const content = $('#song-list-pre-cache textarea')
            const contentObj = JSON.parse(content.text())
            // console.log(contentObj)

            // 存储为.json文件
            fs.writeFile("./singer/" + data.name + ".json", content.text(), function(err) {
                if (err) throw err;
            });
        }).catch((e) => {
                console.log(e)
        })
}

singerList.map(function(item) {
    singer(item)
})
