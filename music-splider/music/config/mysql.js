const mysql = require("mysql")
const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'netease'
})

const query = (sql, options, callback) => {
    pool.getConnection((err, conn) => {
        if (!err) {
            conn.query(sql, options, (err, results, fields) => {
                callback(err, results, fields);
                conn.release();
            });
        } else {
            callback(err, null, null);
        }
    });
}

module.exports = query;