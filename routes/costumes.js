const express = require('express');
const router = express.Router();
const authUtil = require('../module/authUtil');
const statusCode = require('../module/statusCode');
const responseMessage = require('../module/responseMessage');
const Costume = require('../model/costume');

/* POST costumes location. */

router.put('/', (req, res) => {
  const {costumeIdx, lng, lat} = req.body;

  // 파라미터 오류
  if(!costumeIdx || ! lng || !lat) {

      const missParameters = Object.entries({costumeIdx, lng, lat})
      .filter(it => it[1] == undefined).map(it => it[0]).join(',')

      res.status(statusCode.BAD_REQUEST)
      .send(authUtil.successFalse(`${responseMessage.NULL_VALUE}, ${missParameters}`));
      return;
  }

  //

  Costume.costumeLoc(costumeIdx, lng, lat)
  .then(({code, json}) => res.status(code).send(json))
  .catch((err) => {
      console.log(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR)
      .send(responseMessage.INTERNAL_SERVER_ERROR);
  });

  // Costume.selectAll()
  // .then(({code, json}) => res.status(code).send(json))
  // .catch((err) => {
  //     console.log(err);
  //     res.status(statusCode.INTERNAL_SERVER_ERROR)
  //     .send(responseMessage.INTERNAL_SERVER_ERROR);
  // });

});

module.exports = router;
