/**
 * Created by JamesDaniel on 12/01/2017.
 */
var express = require('express');
var router = express.Router();
var Heating = require('../database/sqlite').models().Heating;

/* GET heating status. */
router.get('/', function(req, res, next) {
    Heating.findOne().then(function (heatStat) {
        res.json({status: heatStat.get('status')});
    });
});

module.exports = router;
