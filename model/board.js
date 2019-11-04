const authUtil = require('../module/authUtil');
const statusCode = require('../module/statusCode');
const responseMessage = require('../module/responseMessage');
const pool = require('../module/poolSync')

module.exports = {

    costumeLoc: (userIdx, lng, lat) => {
        return new Promise(async(resolve, reject) => {

            // UPDATE 성공
            resolve({
                code:statusCode.OK,
                json:authUtil.successTrue("업데이트가 완료되었습니다.",{result}) 
            });

        })
    }
};
