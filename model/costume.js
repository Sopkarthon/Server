const authUtil = require('../module/authUtil');
const statusCode = require('../module/statusCode');
const responseMessage = require('../module/responseMessage');
const pool = require('../module/poolSync')

module.exports = {

    selectAll: async () => {
        const table = 'costume';
        const query = `SELECT * FROM ${table}`;
        const result = await pool.queryParam_None(query);

        // running
        if (!result) {
            return {
                code: statusCode.BAD_REQUEST,
                json: authUtil.successFalse("실패!")
            };
        }
        return {
            code: statusCode.OK,
            json: authUtil.successTrue("성공!", result)
        };
    },

    costumeLoc: (costumeIdx, lng, lat) => {

        const table = 'costume';
        const query1 = `UPDATE ${table} SET lat = '${lat}', lng = '${lng}' WHERE costumeIdx = ${costumeIdx}`;

        return new Promise(async(resolve, reject) => {
            
            const costumeLoc = await pool.queryParam_None(query1);


            const table = 'costume';
            const query2 = `SELECT * FROM ${table}`;
            const result = await pool.queryParam_None(query2);
            // // update 실패ㅐㅐㅐㅐ
            // if(costumeLoc == 0){
            //     resolve({
            //         code: statusCode.BAD_REQUEST,
            //         json: authUtil.successFalse("수정된 칼럼 값이 없습니다.")
            //     });
            //     return;
            // }

            // UPDATE 성공
            resolve({
                code:statusCode.OK,
                json:authUtil.successTrue("업데이트가 완료되었습니다.",{costumeLoc, result}) 
            });         

        })
    }
};
