const statusCode = require('../module/statusCode');
const responseMessage = require('../module/responseMessage');
const authUtil = require('../module/authUtil');
const pool = require('../module/poolAsync');
const table = '`like`';

module.exports = {
    readAll: () => {
        // 카운트 내림차순으로 반환
        const query = `SELECT COUNT(*), costumeIdx FROM ${table} GROUP BY costumeIdx ORDER BY COUNT(*) desc`;
        return pool.queryParam_None(query)
        .then(result => {
            return {
                code: statusCode.OK,
                json: authUtil.successTrue(responseMessage.BOARD_CREATE_SUCCESS,result)
            }
        })
        .catch(err => {
            console.log(err);
            throw err;
        })
    }
}