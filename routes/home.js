const express = require('express');
const router = express.Router();
const faker = require('faker');

let popular = [
  'Life in Dark Water',
  'A Sailboat in the Moonlight',
  'Tales of Brave Ulysses',
  'Orinoco Flow',
  'Make and Break Harbor',
  'Too drunk to find my dinghy',
  'The Mighty Jeru'
]


router.get('/', function (req, res) {
  res.render('homepage', {faker, popular});
})

router.get('/postshow', function (req,res){
  res.render('postshow', {faker})
})
module.exports = router;
