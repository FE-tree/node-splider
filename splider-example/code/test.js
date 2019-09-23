const superagent = require('../config/superagent')
const cheerio = require('cheerio')

async function getData() {
    let res = await superagent.request('https://www.ciliwang.club/', 'GET')
    let $ = cheerio.load(res.text)
    $("#keyword").html('蜘蛛侠')
    $(".search_btn").click()

    let list = await $('#list_cont > .single_cont')

    return list;
}

console.log(getData())