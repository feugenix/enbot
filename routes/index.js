var express = require('express');
var router = express.Router();
var casper = require('casper').create();

/* GET home page. */
router.get('/', function(req, res) {
    //res.render('index', { title: 'Express' });

    casper.start('http://xtreme.en.cx/GameDetails.aspx?gid=50046', function() {
        this.click('#boxUser table tr:first-child a');
    });

    casper.waitForUrl(/Login.aspx/, function() {
        this.fill('#formMain', { Login: 'login', 'Password': 'pass' }, true);
    });

    casper.waitForUrl('http://xtreme.en.cx/GameDetails.aspx?gid=50046', function() {
        res.send(JSON.stringify(this.getElementInfo('#tblUserBox')));
    });

    casper.run(function() {
        this.exit();
    });
});

module.exports = router;
