'use strict';
$(document).ready(function() {
    document.querySelector('#team .caption').addEventListener('click', function() {
        console.log(this);
    });

    document.querySelector('#team .caption p').addEventListener('click', function() {
        console.log(this);
    });
});
