var express = require('express');
var router = express.Router();
const statusCode = require('../module/statusCode');
const responseMessage = require('../module/responseMessage');
const authUtil = require('../module/authUtil');
const User = require('../model/user');

router.post('/', async (req, res) => {
  const {
    userIdx
  } = req.body;

  if (!userIdx) {
    res.status(statusCode.BAD_REQUEST)
      .send(authUtil.successFalse(responseMessage.NULL_VALUE));
  }
  //TODO 2: 작성하기
  try {
    const {
      code,
      json
    } = await User.insert(userIdx);
    res.status(code).send(json);
  } catch (err) {
    console.log(err);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR));
  }
})

router.get('/', async(req,res)=>{
  try{
    const {code,json} = await User.selectAll();
    res.status(code).send(json);
  }catch(err){
    console.log(err);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR));
  }
});

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
