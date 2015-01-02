var express = require('express'),
    router = express.Router(),
    exec = require('child_process').exec;

/* GET home page. */
router.get('/', function(req, res) {
    //res.render('index', { title: 'Express' });

    var config = req.app.get('config');

    var lchecker = exec('casperjs casper/game.js ' + config.LOGIN + ' ' + config.PASS, function(error, stdout, stderr) {
        if (error || stderr)
            res.send('error' + (error || stderr));
        else
            res.send(stdout);
    });
});

module.exports = router;
