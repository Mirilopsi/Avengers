'use strict'; //NECESARIO

//Son como clases: se utilia para que otros ficheros java no puedan acceder a las variables globales de mi documento

(function() {


    function validateForm() {
        var inputs = $('#contact input, #contact textarea');
        var validity = [];
        inputs.each(function(index, elem) {
            console.log(elem.name, elem.checkValidity());
        });
        return validity.reduce(function(total, value) {
            return total && value;
        }, true);

    };


    var button = document.querySelector('#contact button').addEventListener('click', function(event) {
        event.preventDefault(); //Evitar que tenga el comportamiento por defecto

        var result = validateForm();
        console.log(result);
    });
    window.service = window.service || {};
    window.service.contact = window.service.contact || {};
    window.service.contact.send = function() {
        return Promise.resolve();
    };

    window.service.contact.send({
        name: $('input[name="name"]').val(),
        email: $('input[name="email"]').val(),
        message: $('input[name="message"]').val()
    }).then(function() {
        alert('sended!');
    }).catch(function() {
        alert('something happend!');
    });

})();
