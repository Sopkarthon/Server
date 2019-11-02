const statusCode = require('../module/statusCode');
const responseMessage = require('../module/responseMessage');
const authUtil = require('../module/authUtil');
const pool = require('../module/pool');

const table = 'user';
module.exports = {
    insert: async(userIdx) => {
        const fields = 'userIdx';
        const questions = `'${userIdx}'`;
        const query = `INSERT INTO ${table} (${fields}) VALUES(${questions})`;
        const result = await pool.queryParam_None(query);
        
        //running
        if(!result) {
            return {
                code:statusCode.BAD_REQUEST,
                json:authUtil.successFalse(responseMessage.BLOG_CREATE_FAIL)
            };
        }
        
        return{
            code:statusCode.OK,
            json:authUtil.successTrue(responseMessage.BLOG_CREATE_SUCCESS, result)
        };
    },
    selectOne : async(userIdx) =>{
        const query= `SELECT * FROM ${table} WHERE userIdx = '${userIdx}'`;
        const result = await pool.queryParam_None(query);

        if(!result) {
            return{
                code:statusCode.BAD_REQUEST,
                json:authUtil.successFalse(responseMessage.BLOG_READ_FAIL)
            };
        }

        return {
            code:statusCode.OK,
            json:authUtil.successTrue(responseMessage.BLOG_READ_SUCCESS)
        };
    },
    selectAll: async() =>{
        const query = `SELECT * FROM ${table}`;
        const result = await pool.queryParam_None(query);

        if(!result){
            return{
                code:statusCode.BAD_REQUEST,
                json:authUtil.successFalse(responseMessage.BLOG_READ_ALL_FAIL)
            };
        }
        
        return{
            code:statusCode.OK,
            json:authUtil.successTrue(responseMessage.BLOG_READ_ALL_SUCCESS)
        };
    },
    delete: async(userIdx) =>{
        const query = `DELETE FROM ${table} WHERE userIdx = ${userIdx}`;
        const result = await pool.queryParam_None(query);

        if(!result){
            return{
                code:statusCode.BAD_REQUEST,
                json:authUtil.successFalse(responseMessage.BLOG_DELETE_FAIL)
            };
        }
        
        return{
            code:statusCode.OK,
            json:authUtil.successTrue(responseMessage.BLOG_DELETE_SUCCESS)
        };
    }
}