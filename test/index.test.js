var expect = require('chai').expect;
var jsdom = require('jsdom');

var dom = new jsdom.JSDOM('<html><body><div id="fake" style="background-color:blue"></div></body></html>');
global.window = dom.window;
var $ = global.jQuery = require('jquery')(dom.window);

require('../src');

describe('jquery-full-bg-unsplash', function() {
    it('should be defined', function() {
        expect(window).to.be.exist;
    });

    it('should be a function', function() {
        expect(window.fullBgUnsplash).to.be.a('object');
    });

    it('should have a client id', function() {
        window.fullBgUnsplash.setup('123-456');
        expect(window.fullBgUnsplash.clientId).to.be.equal('123-456');
    });

    it('should have default values', function() {
        var $fakeDiv = $('#fake');

        $fakeDiv.fullBgUnsplash();
        expect($fakeDiv.css('width')).to.be.equal('100%');
        expect($fakeDiv.css('min-height')).to.be.equal('800px');
        expect($fakeDiv.css('background-size')).to.be.equal('cover');
        expect($fakeDiv.css('background-position')).to.be.equal('center');
        expect($fakeDiv.css('background-color')).to.be.equal('black');
    });

    it('should override default values', function() {
        var $fakeDiv = $('#fake');

        $fakeDiv.fullBgUnsplash({
            minHeight: '400px',
            backgroundSize: 'container',
            backgroundPosition: 'top right',
            backgroundColor: 'red',
            clientId: '123'
        });
        expect($fakeDiv.css('min-height')).to.be.equal('400px');
        expect($fakeDiv.css('background-size')).to.be.equal('container');
        expect($fakeDiv.css('background-position')).to.be.equal('top right');
        expect($fakeDiv.css('background-color')).to.be.equal('red');
    });
});
