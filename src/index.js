/**
 * jquery-unsplash-bg-full
 * @version 0.1.0-development
 * @author Deyanira Davila
 * @license The MIT License (MIT)
 */

(function($) {
    function UnsplashBgFull() {}

    UnsplashBgFull.prototype.setup = function(clientId) {
        this.clientId = clientId;
    };

    $.fn.unsplashBgFull = function(options) {
        options = options || {};

        this.css({
            height: '100vh',
            minHeight: options.minHeight || '800px',
            width: '100%',
            backgroundSize: options.backgroundSize || 'cover',
            backgroundPosition: options.backgroundPosition || 'center',
            backgroundColor: options.backgroundColor || 'black',
        });
    };


    window.unsplashBgFull = new UnsplashBgFull();
})(jQuery);
