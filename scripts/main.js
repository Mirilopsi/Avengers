/*console.log("hello!!");

var hello = {
    pepe: true,
    juan: 'ok'
};


alert('tu ordenador no es seguro');
confirm('tu ordenador no es seguro');

function pepe(arg1, arg2, arg3) {

}

var compra = ['leche', 'verduras,', 'carne', 'arroz'];

function listaCompra() {
    compra.forEach(function(elementoCompra, index) {
        console.log(elementoCompra);
    });
}

function quitarGluten() {
    compra = compra.filter(function(elementoCompra, index) {
        return elementoCompra !== 'pan';
    });
}

function quitarGluten2() {
    compra.forEach(function(elementoCompra) {
        if (elementoCompra !== 'pan') {
            result.push(elementoCompra);
        }
    });
    return result;
}

var fecha = '2017/05/12';
fechaNumbers = fecha.split('/').map(function(item) {
    return parseInt(item);
});

console.log(fechaNumbers);

compra.sort(function(item1, item2) {
    return item.price > item2.price;
});

function Player(name, lastName, level) {
    this.name = name;
    this.lastName = lastName;
    this.play = function() {
        console.log('play!');

    }

}
var player = Player('Michael', 'Jordan', 'pro');

player.play();
console.log(player);

var arrayFalsy = {
    0: true,
    1: false,

    2: true
};

var obj = {
    nombre: 'Pepito',
    saludo: function() {
        return 'Hola, ' + this.nombre + '!';
    }
};

obj.nombre;
obj.saludo;
obj['saludo']();
var fn = obj['saludo'];


fn.bind(obj)();

console.log(fn.call(obj));

//Esto puede producir sobrecarga al tener que estar cargando uno a uno y poco a poco
var compraListNode;
compra.forEach(function(item) {
    var a = document.createElement('a');
    a.innerHTML = item;
    compraListNode.appendChild(a);
});

//modificado eficientemente seria:

var compraListNodeVirtual = doucmentcreateElement('ul');
compra.forEach(function(item) {
    var a = document.createElement('li');
    a.innerHTML = item;
    compraListNodeVirtual.appendChild(a);
});

compraListNode.appendChild(compraListNodeVirtual);

//Otra manera aunque menos 'elegante'
//esta modificando todos los html en un string y almacenandolos a un string, y despues escribir texto planno y ponerlo directmente
var items = []
compra.forEach(function(item) {
    var a = document.createElement('li');
    a.innerHTML = item;
    items.push(a);
});

var html = a.reduce(function(item, total) {
    return total + item.toString();
}, '');
*/
//////////////////PASAR DE PSEUDO-ARRAY A ARRAY
/*
var array = document.querySelectorAll('.nav a');
var newArray = Array.prototype.slice.call(array, 0);
newArray.map(function(item) {
    item.style.color = 'red';
});

function argumentsArray() {
    console.log(arguments);
}

argumentsArray(1, 2, 4, 'string');

var timeout = setTimeout(function() {
    alert('go!');
}, 2000);

clearTimeout(timeout);*/
/*
(function() {
    consolelog(1);
    setTimeout(function() {
        console.log(2)
    }, 1000);
    setTimeout(function() {
        console.log(3)
    }, 0);
    console.log(4);
})();


for (i = 0; i < 5; i++) {
    setTimeout((function(i) {
        return function() {
            console.log(i);
        }
    })(i), i * 1000);

}

$('button').click(function(event) {
    $('nav a').css('color', 'green');
    $(event.target).css('color', 'green');

});

$(document).ready(function() {
    $('.nav-item a').mouseover(function() {
        console.log($(this).attr('href'));
    });
});

$(document).scroll(functtion() {
    requestAnimationFrame(function) {
        $('header').css('opacity', superCalculus);
    });
});


(function() {
    var root = 'https://jsonplaceholder.typicode.com';
    // promesas
    var promise = $.ajax({
        dataType: 'json',
        url: root + '/posts/1',
        method: 'GET'
    });
    promise.then(function(response) {
        console.log(response);
    }).catch(function(error) {
        console.log(error);
    });
    var promises = [];
    for (var i = 1; i < 11; i++) {
        var promise = $.ajax({
            dataType: 'json',
            url: root + '/posts/' + i,
            method: 'GET
'
        });
        promises.push(promise);
    }
    Promise.all(promises).then(function(responses) {
        console.log(responses);
        var html = responses.reduce(function(total, response) {
            return total + '<li><h2>' + response.title + '</h2><p>' + response.body + '</p></li>';
        }, '');
        $('#about-us').append(html);
    }).catch(function() {
        console.log(arguments);
    });

    //El primero que termine se ejecuta
    Promise.race(promises) then(function() {
            //Alguno ha terminado primero
        }.catch(function() {
            //Alguno ha temrinado primero pero con error
        });
    };

    //Se ejeutan en paralelo
    var promise1 = $.ajax({
        dataType: 'json',
        url: root + '/posts/1' + i,
        method: 'GET'
    });
    var promise2 = $.ajax({
        dataType: 'json',
        url: root + '/posts/2' + i,
        method: 'GET'
    });
    var promise3 = $.ajax({
        dataType: 'json',
        url: root + '/posts/3' + i,
        method: 'GET'
    });


    promise2.catch(function() { //promise 2 error
    });
    promise3.catch(function() { //promise 3 error
    });


    //Yo tengo el recibo de la promesa uno pero si se cumple tienes que esperar al recibo 2
    //como esperamos una promesa utilizamos then estillo if-else pero en paralelo


    function doStuff() {
        return promise1.then(function() {
            return promise2;
        }).then(function() {
            return promise3;
        }).then(function() {
            //your code
        }).catch(function() {
            //handle error
        });
    };

    var quickPromise = Promise.resolve(true);

    quickPromise.then(function(response) {
        return response ? 10 : 0;
    }).then(function(response) {
        return response > i ? 10 : 11;
    });

    function login(username, asword, provider) {
        return loginProvider(username, password, provider).then(function(responseFB) {
            return loginOauth(responseFB);
        }).then(function(responseOauth) {
            return loginWithServer(responseOauth);
        }).then(function(response) {
            return setLoggedIn(response);
        }).then(function() {
            return getLoggedInUser();
        });
    }


    doStuff.then(function() {
        //do stuff
    });

    var createdPromise = new Promise(function(resolve, reject) {
        setTimerout(function() {
            //do stuff
            resolve('magic');
        }, 5000);
    });

    createdPromise.then(function(response) {

    });

})();
*/
