'use strict';

(function() {

    setTimeout(function() {

        window.service.photo.getPhotos().then(function(responses) {
            console.log(responses);
            var html = responses.reduce(function(total, response, index, list) {
                return total + '<article><img src="' + response.url + '" alt="' + response.title + '"> <h3> ' + response.title + '</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius nemo est eaque, rerum.</p></article>';
            }, '');
            $('#movies div').append(html);
        }).catch(function() {
            console.log(arguments);
        });
    }, 2000);

})();
