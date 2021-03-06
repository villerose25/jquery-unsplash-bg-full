/**
 * jquery-unsplash-bg-full
 * @version 0.1.0
 * @author Deyanira
 * @license The MIT License (MIT)
*/

(function($) {
    function UnsplashBgFull() {}

    UnsplashBgFull.prototype.setup = function(clientId) {
        this.clientId = clientId;

        $.ajaxSetup({
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', 'Client-ID ' + clientId);
            }
        });
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

        var self = this;

        $.ajax({
            url: 'https://api.unsplash.com/photos/random/',
            data: {
                orientation: 'landscape',
            }
        })
            .done(function(photo) {
                self.css('backgroundImage', 'url(' + photo.urls.regular + ')');
            })
            .fail(function() {
                self.css('backgroundImage', 'url(' + options.backgroundImage + ')');
            });

        return this;
    };

    window.unsplashBgFull = new UnsplashBgFull();
})(jQuery);
