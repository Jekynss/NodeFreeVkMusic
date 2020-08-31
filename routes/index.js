var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try{
    const resp = await fetch('https://vk.com/audios',{headers:{Cookie:"Cookie"}});
    const data = await resp.text();
    res.status(200).send(data);
  }
  catch(err){
    res.status(400).send(err);
  }
});

module.exports = router;
