var express = require('express'),
    router = express.Router(),
    execFile = require('child_process').execFile;

/* GET home page. */
router.get('/', function(req, res) {
    //res.render('index', { title: 'Express' });

    var lchecker = execFile('casperjs', ['../casper/game.js'], function(error, stdout, stderr) {
        if (error || stderr)
            res.send('error' + (error || stderr));

        res.send(stdout);
    });
});

module.exports = router;
