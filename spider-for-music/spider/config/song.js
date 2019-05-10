const songConfig = {
    common: 'https://music.163.com',
    comment: 'https://music.163.com/weapi/v1/resource/comments/',
    len: 10,
    key: {
        encSecKey: 'jAIpqJPRXOuOCRMWFXWj62rgudJLaL17CSCilxbjysKS8oYYlN3XxsI7Fpsh1phDwUo8vJA6yZKZtxD0h+wx3Jp1oUjgqT01ezNAVLpvRfM/NNlwfcY0j2Oq1dIlQoUl',
        params: '532130e8ab30c41c000d85c58fa839046b6cfc3b191dd439851ce078976b137990cadce27bd8b37ef848197ce9a798dce966977eea8def4b430732aad00a98c1a707687080f005e42c822b47ef50f06d9af9ee13f761a37d4b25e88aebf698f046c49c8a56fa42f431eb439555e5f7159a1e8eab862b4cfe0f0081209fbe9d59'
    },
    agent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36',
}
songConfig.req = {
    method: 'post',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': songConfig.agent
    },
    form: songConfig.key
}
module.exports = songConfig;