window.onclick = function (event) {
    if (!event.target.matches('button')) {
        hideAll();
    }
}

function hideAll() {
    var elem1 = document.getElementById('link-nyheiter');
    var elem2 = document.getElementById('link-kunst');
    var elem3 = document.getElementById('link-sport');
    var elem4 = document.getElementById('link-vitenskap');

    hide(elem1);
    hide(elem2);
    hide(elem3);
    hide(elem4);

    function hide(target) {
        target.style.display = 'none';
    }
}

function toggleDropdown(target) {
    hideAll();
    var elem = document.getElementById(target);
    elem.style.display = 'flex';
    elem.style.flexDirection = 'column';
}