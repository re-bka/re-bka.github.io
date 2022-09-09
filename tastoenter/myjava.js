theContents = function () {
    item1 = document.querySelector(".contrasto");
    item1.style.marginLeft = '-1500px';
}

theContents2 = function () {
    item1 = document.querySelector(".contrasto");
    item1.style.marginLeft = '1400px';
}


livelloAaa = function () {
    testo = document.querySelector("#testo_valori");
    testo.innerHTML = 'I <b>valori minimi</b> del rapporto di contrasto di livello AAA sono:';
    valore1 = document.querySelector('.valore_1');
    valore1.innerHTML = '<b>7.1</b>';
    valore2 = document.querySelector('.valore_2');
    valore2.innerHTML = "<b>4.5.1</b>";
    livello = document.querySelector("#livello");
    livello.innerHTML = "LIVELLO AAA";
    livello.style.backgroundColor = "#F15A24";
}

livelloAa = function () {
    testo = document.querySelector("#testo_valori");
    testo.innerHTML = 'I <b>valori minimi</b> del rapporto di contrasto del livello AA sono i seguenti:';
    valore1 = document.querySelector('.valore_1');
    valore1.innerHTML = '<b>4.5.1</b>';
    valore2 = document.querySelector('.valore_2');
    valore2.innerHTML = "<b>3.1</b>";
    livello = document.querySelector("#livello");
    livello.innerHTML = "LIVELLO AA";
    livello.style.backgroundColor = "#FFC900";
}

changeState = function () {
    toggle = document.querySelector('.toggle');
    toggle.classList.toggle('toggleon');
    cerchio = document.querySelector('.cerchio');
    cerchio.classList.toggle('on');
}

showMore = function () {
    paragrafi = document.querySelector('.par');
    paragrafi.style.display = 'block';
    frecciagiu = document.querySelector('.arrow');
    frecciagiu.style.display = "none";
    frecciasu = document.querySelector('.arrowup');
    frecciasu.style.display = "block";
}

hidePar = function () {
    paragrafi = document.querySelector('.par');
    paragrafi.style.display = 'none';
    frecciasu = document.querySelector('.arrowup');
    frecciasu.style.display = "none";
    frecciagiu = document.querySelector('.arrow');
    frecciagiu.style.display = "block";
}

showMore2 = function () {
    paragrafi = document.querySelector('.par2');
    paragrafi.style.display = 'block';
    frecciagiu = document.querySelector('.arrow2');
    frecciagiu.style.display = "none";
    frecciasu = document.querySelector('.arrowup2');
    frecciasu.style.display = "block";
}

hidePar2 = function () {
    paragrafi = document.querySelector('.par2');
    paragrafi.style.display = 'none';
    frecciasu = document.querySelector('.arrowup2');
    frecciasu.style.display = "none";
    frecciagiu = document.querySelector('.arrow2');
    frecciagiu.style.display = "block";
}

showMore3 = function () {
    paragrafi = document.querySelector('.par3');
    paragrafi.style.display = 'block';
    frecciagiu = document.querySelector('.arrow3');
    frecciagiu.style.display = "none";
    frecciasu = document.querySelector('.arrowup3');
    frecciasu.style.display = "block";
}

hidePar3 = function () {
    paragrafi = document.querySelector('.par3');
    paragrafi.style.display = 'none';
    frecciasu = document.querySelector('.arrowup3');
    frecciasu.style.display = "none";
    frecciagiu = document.querySelector('.arrow3');
    frecciagiu.style.display = "block";
}

showMore4 = function () {
    paragrafi = document.querySelector('.par4');
    paragrafi.style.display = 'block';
    frecciagiu = document.querySelector('.arrow4');
    frecciagiu.style.display = "none";
    frecciasu = document.querySelector('.arrowup4');
    frecciasu.style.display = "block";
}

hidePar4 = function () {
    paragrafi = document.querySelector('.par4');
    paragrafi.style.display = 'none';
    frecciasu = document.querySelector('.arrowup4');
    frecciasu.style.display = "none";
    frecciagiu = document.querySelector('.arrow4');
    frecciagiu.style.display = "block";
}

sideMenu = function () {
    if(open) {
        hideMenu();
        open = false;
    }
    else {
        showMenu();
        open = true;
    }
}
showMenu = function () {
    menu = document.querySelector('.side_menu');
    menu.style.animationName = 'sidemenu';
    menu.style.display = 'block';
    iconaX = document.querySelector('.off');
    iconaX.style.display = 'block';
    iconaOn = document.querySelector('.block');
    iconaOn.style.display = 'none';
}

hideMenu = function () {
    menu = document.querySelector('.side_menu');
    menu.style.display = 'none';
    iconaX = document.querySelector('.off');
    iconaX.style.display = 'none';
    iconaOn = document.querySelector('.block');
    iconaOn.style.display = 'block';
}

