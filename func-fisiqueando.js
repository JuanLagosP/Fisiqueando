function displayMenu() {
    var a = document.getElementsByClassName('nav-link');
    for (var i = 0; i < a.length; i++) {
        a[i].classList.toggle('hide');
    }
}

function darkMode() {
    var element = document.body;
    element.classList.toggle('dark-mode');
}

function changeText() {
    if (document.querySelector('#dark-mode').innerHTML == '<b>Claro</b>') {
        document.querySelector('#dark-mode').innerHTML = '<b>Oscuro</b>';
    } else {
        document.querySelector('#dark-mode').innerHTML = '<b>Claro</b>';
    }
}