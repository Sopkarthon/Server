const authUtil = require('../module/authUtil');
const statusCode = require('../module/statusCode');
const responseMessage = require('../module/responseMessage');
const pool = require('../module/poolSync')

module.exports = {

    costumeLoc: (userIdx, lng, lat) => {

        const table = 'costume';      

        return new Promise(async(resolve, reject) => {

            const query0 = `SELECT costumeIdx FROM costume WHERE costumeIdx = ${userIdx}`;
            const costumeIdx = await pool.queryParam_None(query0);

            if(costumeIdx[0] != null){
                console.log(costumeIdx[0]);

                const query1 = `UPDATE ${table} SET lat = '${lat}', lng = '${lng}' WHERE costumeIdx = ${costumeIdx[0].costumeIdx}`;
                const costumeLoc = await pool.queryParam_None(query1);
                
                // update 실패
                if(costumeLoc == 0){
                    resolve({
                        code: statusCode.BAD_REQUEST,
                        json: authUtil.successFalse("수정된 칼럼 값이 없습니다.")
                    });
                    return;
                }      
            }else{
                console.log(costumeIdx[0]);
            }

            const query2 = `SELECT * FROM ${table}`;
            const result = await pool.queryParam_None(query2);

            // UPDATE 성공
            resolve({
                code:statusCode.OK,
                json:authUtil.successTrue("업데이트가 완료되었습니다.",{result}) 
            });

        })
    }
};
