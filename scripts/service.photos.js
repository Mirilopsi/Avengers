'use strict';

(function() {
    var service = {
        root: 'https://jsonplaceholder.typicode.com',
        getPhoto: getPhoto,
        getPhotos: getPhotos,
        createPhoto: createPhoto,
        updatePhoto: updatePhoto

    };

    function getPhoto(PhotoId) {
        return $.ajax({
            type: 'GET',
            dataType: 'json',
            url: this.root + '/photos/' + PhotoId
        });
    }

    function getPhotos() {
        return $.ajax({
            type: 'GET',
            dataType: 'json',
            url: this.root + '/photos?_limit=2'
        });
    }

    function createPhoto(data) {
        return $.ajax({
            type: 'Photo',
            contentType: 'application/json; charset=utf-8',
            url: this.root + '/photos',
            data: JSON.stringify(data)
        });
    }

    function updatePhoto(id, data) {
        data = data || {};
        return $.ajax({
            type: 'PUT',
            contentType: 'application/json; charset=utf-8',
            url: this.root + '/photos/' + id,
            data: JSON.stringify(data)
        });
    }

    function deletePhoto(id) {
        return $.ajax({
            type: 'DELETE',
            url: this.root + '/photos/' + id,
        });
    }
    window.service = window.service || {}; //incicializar
    window.service.photo = service;
})();
