var links = [];
var casper = require('casper').create();

function getLinks() {
    var links = document.querySelectorAll('.serp-item__title-link');
    return Array.prototype.map.call(links, function(e) {
        return e.getAttribute('href');
    });
}

casper.start('http://xtreme.en.cx/GameDetails.aspx?gid=50046', function() {
    this.click('#boxUser table tr:first-child a');
    //this.echo(JSON.stringify(this.getFormValues('form.search')));
    //this.click('button[type=submit]')
});


// casper.start('http://google.fr/', function() {
//     // search for 'casperjs' from google form
//     this.fill('form[action="/search"]', { q: 'casperjs' });
//     this.echo(this.getFormValues('form').q);
//     //require('utils').dump(this.getElementsInfo('input'));
//     //this.echo(this.getCurrentUrl());
// });

casper.waitForUrl(/Login.aspx/, function() {
    this.fill('#formMain', { Login: 'login', 'Password': 'pass' }, true);
});

casper.waitForUrl('http://xtreme.en.cx/GameDetails.aspx?gid=50046', function() {
    require('utils').dump(this.getElementInfo('#tblUserBox'));
});

casper.run(function() {
    //this.echo(this.getCurrentUrl());
    //require('utils').dump(this.getElementInfo('input#text'));
    // echo results in some pretty fashion
    // this.echo(links.length + ' links found:');
    // this.echo(' - ' + links.join('\n - '));

    this.exit();
});
