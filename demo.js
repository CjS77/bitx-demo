'use strict';

var BitX = require('bitx');
var key = process.env['BITX_KEY'];
var secret = process.env['BITX_SECRET'];

function bitxTicker(api, interval, cb) {
    var count = 0;
    var timer = setInterval(function () {
        api.getTicker(function (err, ticker) {
            if (err) {
                console.log(err);
                clearInterval(timer);
                return cb(count);
            }
            count++;
            if (count >= 100) {
                clearInterval(timer);
                return cb(count);
            }
            console.log(ticker);
        });
    }, interval);
}



console.log('Calling APi with authentication\n');
var api = new BitX(key, secret);
bitxTicker(api, 1000, function(count) {
    console.log(count + ' authenticated calls before error');
    if (!(key && secret)) {
        return "BitX authentication keys are not found."
    }
    var api = new BitX();
    console.log('Calling APi without authentication\n');
    bitxTicker(api, 1000, function(count) {
        console.log(count + ' UNauthenticated calls before error');
    });
});

