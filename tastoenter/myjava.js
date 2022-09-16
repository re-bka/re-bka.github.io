

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
    testo.innerHTML = 'I <b>valori minimi</b> del rapporto di contrasto del livello AA sono:';
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


showMenu = function () {
    menu = document.querySelector('.side_menu');
    menu.style.top = '0px';
    iconaX = document.querySelector('.off');
    iconaX.style.display = 'block';
    iconaOn = document.querySelector('.block');
    iconaOn.style.display = 'none';

}

hideMenu = function () {
    menu = document.querySelector('.side_menu');
    menu.style.top = '-250px';
    iconaX = document.querySelector('.off');
    iconaX.style.display = 'none';
    iconaOn = document.querySelector('.block');
    iconaOn.style.display = 'block';

    menu.style.animationName = 'anim';
}

selectElement1 = function () {
    opzione1 = document.querySelector('.opzione1');
    opzione1.classList.add('opzione-focus');
    opzione4 = document.querySelector('.opzione4');
    opzione4.classList.remove('opzione-focus');
    opzione3 = document.querySelector('.opzione3');
    opzione3.classList.remove('opzione-focus');    
    opzione2 = document.querySelector('.opzione2');
    opzione2.classList.remove('opzione-focus');
    verifica = document.querySelector('.verifica0');
    verifica.classList.add('verifica1');
    verifica = document.querySelector('.ghost-dis');
    verifica.classList.add('ghost2');
}

selectElement3 = function () {
    opzione4 = document.querySelector('.opzione3');
    opzione4.classList.add('opzione-focus');
    opzione4 = document.querySelector('.opzione4');
    opzione4.classList.remove('opzione-focus');   
    opzione2 = document.querySelector('.opzione2');
    opzione2.classList.remove('opzione-focus');
    opzione1 = document.querySelector('.opzione1');
    opzione1.classList.remove('opzione-focus');
    verifica = document.querySelector('.verifica0');
    verifica.classList.add('verifica1');
    verifica = document.querySelector('.ghost-dis');
    verifica.classList.add('ghost2');
}

selectElement2 = function () {
    opzione1 = document.querySelector('.opzione2');
    opzione1.classList.add('opzione-focus');
    opzione4 = document.querySelector('.opzione4');
    opzione4.classList.remove('opzione-focus');
    opzione3 = document.querySelector('.opzione3');
    opzione3.classList.remove('opzione-focus');
    opzione1 = document.querySelector('.opzione1');
    opzione1.classList.remove('opzione-focus');   
    verifica = document.querySelector('.verifica0');
    verifica.classList.add('verifica1');
    verifica = document.querySelector('.ghost-dis');
    verifica.classList.add('ghost2');
}

selectElement4 = function () {
    opzione4 = document.querySelector('.opzione4');
    opzione4.classList.add('opzione-focus');
    opzione3 = document.querySelector('.opzione3');
    opzione3.classList.remove('opzione-focus');    
    opzione2 = document.querySelector('.opzione2');
    opzione2.classList.remove('opzione-focus');
    opzione1 = document.querySelector('.opzione1');
    opzione1.classList.remove('opzione-focus');  
    verifica = document.querySelector('.verifica0');
    verifica.classList.add('verifica1');
    verifica = document.querySelector('.ghost-dis');
    verifica.classList.add('ghost2');
}


verifyOpt = function () {
    bollino = document.querySelector('.bollino-quiz');
    bollino.style.display = 'block';
    lettera = document.querySelector('.lettera');
    lettera.style.display = 'none';
    bollino1 = document.querySelector('.bollino-quiz1');
    bollino1.style.display = 'block';
    lettera1 = document.querySelector('.lettera1');
    lettera1.style.display = 'none';
    bollino2 = document.querySelector('.bollino-quiz2');
    bollino2.style.display = 'block';
    lettera2 = document.querySelector('.lettera2');
    lettera2.style.display = 'none';
    bollino3 = document.querySelector('.bollino-quiz3');
    bollino3.style.display = 'block';
    lettera3 = document.querySelector('.lettera3');
    lettera3.style.display = 'none';
}

showSol = function () {
    bollino = document.querySelector('.bollino-quiz');
    bollino.style.display = 'block';
    lettera = document.querySelector('.lettera');
    lettera.style.display = 'none';
    bollino1 = document.querySelector('.bollino-quiz1');
    bollino1.style.display = 'block';
    lettera1 = document.querySelector('.lettera1');
    lettera1.style.display = 'none';
    bollino2 = document.querySelector('.bollino-quiz2');
    bollino2.style.display = 'block';
    lettera2 = document.querySelector('.lettera2');
    lettera2.style.display = 'none';
    bollino3 = document.querySelector('.bollino-quiz3');
    bollino3.style.display = 'block';
    lettera3 = document.querySelector('.lettera3');
    lettera3.style.display = 'none';

    sol1 = document.querySelector('.opzione1 p');
    sol1.innerHTML = '<b>CORRETTO!</b><br>Rapporto di contrasto: <b>13.6</b><br>Il rapporto supera <br>il livello massimo AAA';
    sol1.style.textAlign = 'center';
    sol1.style.fontWeight = '600';
    sol1.style.fontSize = '12pt';
    sol1.style.paddingRight = '10px';

    sol2 = document.querySelector('.opzione2 p');
    sol2.innerHTML = '<b>SBAGLIATO!</b><br>Rapporto di contrasto: <b>2.12</b><br>Il rapporto <u>non</u> supera<br> il livello minimo AA';
    sol2.style.textAlign = 'center';
    sol2.style.fontWeight = '600';
    sol2.style.fontSize = '12pt';
    sol2.style.paddingRight = '10px';
    
    sol3 = document.querySelector('.opzione3 p');
    sol3.innerHTML = '<b>ATTENZIONE!</b><br>Rapporto di contrasto: <b>6.22</b><br>Il rapporto supera <u>solo</u><br> il livello minimo AA';
    sol3.style.textAlign = 'center';
    sol3.style.fontWeight = '600';
    sol3.style.fontSize = '12pt';
    sol3.style.paddingTop = '5px';
    sol3.style.paddingRight = '10px';

    sol4 = document.querySelector('.opzione4 p');
    sol4.innerHTML = '<b>SBAGLIATO!</b><br>Rapporto di contrasto: <b>2.35</b><br>Il rapporto <u>non</u> supera<br> il livello minimo AA';
    sol4.style.textAlign = 'center';
    sol4.style.fontWeight = '600';
    sol4.style.fontSize = '12pt';
    sol4.style.paddingRight = '10px';

    bottone = document.querySelector('.verifica .ghost-dis');
    bottone.style.display = 'none';
    bottone1 = document.querySelector('.verifica .ghost1');
    bottone1.style.display = 'block';
}

hideSol = function () {
    bollino = document.querySelector('.bollino-quiz');
    bollino.style.display = 'none';
    lettera = document.querySelector('.lettera');
    lettera.style.display = 'block';
    bollino1 = document.querySelector('.bollino-quiz1');
    bollino1.style.display = 'none';
    lettera1 = document.querySelector('.lettera1');
    lettera1.style.display = 'block';
    bollino2 = document.querySelector('.bollino-quiz2');
    bollino2.style.display = 'none';
    lettera2 = document.querySelector('.lettera2');
    lettera2.style.display = 'block';
    bollino3 = document.querySelector('.bollino-quiz3');
    bollino3.style.display = 'none';
    lettera3 = document.querySelector('.lettera3');
    lettera3.style.display = 'block';

    sol1 = document.querySelector('.opzione1 p');
    sol1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br>do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    sol1.style.textAlign = 'left';
    sol1.style.fontWeight = '500';
    sol1.style.fontSize = '12pt';
    sol1.style.paddingTop = '0px';
    sol1.style.paddingRight = '0px';

    sol2 = document.querySelector('.opzione2 p');
    sol2.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br>do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    sol2.style.textAlign = 'left';
    sol2.style.fontWeight = '500';
    sol2.style.fontSize = '12pt';
    sol2.style.paddingTop = '0px';
    sol2.style.paddingRight = '0px';
    
    sol3 = document.querySelector('.opzione3 p');
    sol3.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br>do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    sol3.style.textAlign = 'left';
    sol3.style.fontWeight = '500';
    sol3.style.fontSize = '12pt';
    sol3.style.paddingTop = '0px';
    sol3.style.paddingRight = '0px';

    sol4 = document.querySelector('.opzione4 p');
    sol4.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br>do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    sol4.style.textAlign = 'left';
    sol4.style.fontWeight = '500';
    sol4.style.fontSize = '12pt';
    sol4.style.paddingTop = '0px';
    sol4.style.paddingRight = '0px';

    bottone = document.querySelector('.verifica .ghost-dis');
    bottone.style.display = 'block';
    bottone1 = document.querySelector('.verifica .ghost1');
    bottone1.style.display = 'none';

    opzione4 = document.querySelector('.opzione4');
    opzione4.classList.remove('opzione-focus');
    opzione3 = document.querySelector('.opzione3');
    opzione3.classList.remove('opzione-focus');    
    opzione2 = document.querySelector('.opzione2');
    opzione2.classList.remove('opzione-focus');
    opzione1 = document.querySelector('.opzione1');
    opzione1.classList.remove('opzione-focus');  
}




showSol2 = function () {
    bollino = document.querySelector('.bollino-quiz');
    bollino.style.display = 'block';
    lettera = document.querySelector('.lettera');
    lettera.style.display = 'none';
    bollino1 = document.querySelector('.bollino-quiz1');
    bollino1.style.display = 'block';
    lettera1 = document.querySelector('.lettera1');
    lettera1.style.display = 'none';
    bollino2 = document.querySelector('.bollino-quiz2');
    bollino2.style.display = 'block';
    lettera2 = document.querySelector('.lettera2');
    lettera2.style.display = 'none';
    bollino3 = document.querySelector('.bollino-quiz3');
    bollino3.style.display = 'block';
    lettera3 = document.querySelector('.lettera3');
    lettera3.style.display = 'none';

    sol1 = document.querySelector('.opzione1 p');
    sol1.innerHTML = "L'etichetta deve sempre <br>descrivere l'azione.";
    sol1.style.fontSize = '11pt';

    sol2 = document.querySelector('.opzione2 p');
    sol2.innerHTML = "L'etichetta è breve e comprensibile.";
    sol2.style.fontSize = '11pt';
    
    sol3 = document.querySelector('.opzione3 p');
    sol3.innerHTML = "<i>Clicca qui</i> è un'infomazione superflua.";
    sol3.style.fontSize = '11pt';

    sol4 = document.querySelector('.opzione4 p');
    sol4.innerHTML = "Tutti gli utenti riconosceranno l'icona?";
    sol4.style.fontSize = '11pt';

    bottone = document.querySelector('.verifica .ghost-dis');
    bottone.style.display = 'none';
    bottone1 = document.querySelector('.verifica .ghost1');
    bottone1.style.display = 'block';
}

hideSol2 = function () {
    bollino = document.querySelector('.bollino-quiz');
    bollino.style.display = 'none';
    lettera = document.querySelector('.lettera');
    lettera.style.display = 'block';
    bollino1 = document.querySelector('.bollino-quiz1');
    bollino1.style.display = 'none';
    lettera1 = document.querySelector('.lettera1');
    lettera1.style.display = 'block';
    bollino2 = document.querySelector('.bollino-quiz2');
    bollino2.style.display = 'none';
    lettera2 = document.querySelector('.lettera2');
    lettera2.style.display = 'block';
    bollino3 = document.querySelector('.bollino-quiz3');
    bollino3.style.display = 'none';
    lettera3 = document.querySelector('.lettera3');
    lettera3.style.display = 'block';

    sol1 = document.querySelector('.opzione1 p');
    sol1.innerHTML = 'Forbici';
    sol1.style.fontSize = '12pt';

    sol2 = document.querySelector('.opzione2 p');
    sol2.innerHTML = 'Taglia';
    sol2.style.fontSize = '12pt';

    
    sol3 = document.querySelector('.opzione3 p');
    sol3.innerHTML = 'Clicca qui per tagliare';
    sol3.style.fontSize = '12pt';


    sol4 = document.querySelector('.opzione4 p');
    sol4.innerHTML = 'Non è necessaria <br>alcuna etichetta';
    sol4.style.fontSize = '12pt';


    bottone = document.querySelector('.verifica .ghost-dis');
    bottone.style.display = 'block';
    bottone1 = document.querySelector('.verifica .ghost1');
    bottone1.style.display = 'none';

    opzione4 = document.querySelector('.opzione4');
    opzione4.classList.remove('opzione-focus');
    opzione3 = document.querySelector('.opzione3');
    opzione3.classList.remove('opzione-focus');    
    opzione2 = document.querySelector('.opzione2');
    opzione2.classList.remove('opzione-focus');
    opzione1 = document.querySelector('.opzione1');
    opzione1.classList.remove('opzione-focus');  
}

cuorePieno = function () {
    cuore = document.querySelector('.cuore-vuoto');
    cuore.style.display =  'none';
    cuore1 = document.querySelector('.cuore-pieno');
    cuore1.style.display = 'block';
}

cuoreVuoto = function () {
    cuore = document.querySelector('.cuore-vuoto');
    cuore.style.display =  'block';
    cuore1 = document.querySelector('.cuore-pieno');
    cuore1.style.display = 'none';
}

showSol3 = function () {
    bollino = document.querySelector('.bollino-quiz');
    bollino.style.display = 'block';
    lettera = document.querySelector('.lettera');
    lettera.style.display = 'none';
    bollino1 = document.querySelector('.bollino-quiz1');
    bollino1.style.display = 'block';
    lettera1 = document.querySelector('.lettera1');
    lettera1.style.display = 'none';
    bollino2 = document.querySelector('.bollino-quiz2');
    bollino2.style.display = 'block';
    lettera2 = document.querySelector('.lettera2');
    lettera2.style.display = 'none';
    bollino3 = document.querySelector('.bollino-quiz3');
    bollino3.style.display = 'block';
    lettera3 = document.querySelector('.lettera3');
    lettera3.style.display = 'none';

    sol1 = document.querySelector('.opzione1 p');
    sol1.innerHTML = "Solitamente i pulsanti così evidenti sono usati per indicare azioni più importanti.";
    sol1.style.fontSize = '12pt';
    sol1.style.paddingTop = '10px';
    pulsante = document.querySelector('.opzione1 .cta');
    pulsante.style.display = 'none';

    sol2 = document.querySelector('.opzione2 p');
    sol2.innerHTML = "Il pulsante ghost può essere una scelta adeguata.";
    sol2.style.fontSize = '12pt';
    sol2.style.paddingTop = '10px';
    pulsante = document.querySelector('.opzione2 .ghost');
    pulsante.style.display = 'none';
    
    sol3 = document.querySelector('.opzione3 p');
    sol3.innerHTML = "In questo caso, il pulsante di testo è troppo simile ad un link.";
    sol3.style.fontSize = '12pt';
    sol3.style.paddingTop = '10px';
    pulsante = document.querySelector('.opzione3 .link');
    pulsante.style.display = 'none';

    sol4 = document.querySelector('.opzione4 p');
    sol4.innerHTML = "Non tutti gli uteti potrebbe riconoscere la funzionalità dell'icona.";
    sol4.style.fontSize = '12pt';
    sol4.style.paddingTop = '10px';
    pulsante = document.querySelector('.opzione4 .cuore-pieno');
    pulsante.style.display = 'none';
    pulsante1 = document.querySelector('.opzione4 .cuore-vuoto');
    pulsante1.style.display = 'none';

    bottone = document.querySelector('.verifica .ghost-dis');
    bottone.style.display = 'none';
    bottone1 = document.querySelector('.verifica .ghost1');
    bottone1.style.display = 'block';
}

hideSol3 = function () {
    bollino = document.querySelector('.bollino-quiz');
    bollino.style.display = 'none';
    lettera = document.querySelector('.lettera');
    lettera.style.display = 'block';
    bollino1 = document.querySelector('.bollino-quiz1');
    bollino1.style.display = 'none';
    lettera1 = document.querySelector('.lettera1');
    lettera1.style.display = 'block';
    bollino2 = document.querySelector('.bollino-quiz2');
    bollino2.style.display = 'none';
    lettera2 = document.querySelector('.lettera2');
    lettera2.style.display = 'block';
    bollino3 = document.querySelector('.bollino-quiz3');
    bollino3.style.display = 'none';
    lettera3 = document.querySelector('.lettera3');
    lettera3.style.display = 'block';

    sol1 = document.querySelector('.opzione1 p');
    sol1.innerHTML = '<b>Pulsante classico</b>';
    sol1.style.fontSize = '12pt';
    sol1.style.paddingTop = '0px';
    pulsante1 = document.querySelector('.opzione1 .cta');
    pulsante1.style.display = 'block';

    sol2 = document.querySelector('.opzione2 p');
    sol2.innerHTML = '<b>Pulsante ghost</b>';
    sol2.style.fontSize = '12pt';
    sol2.style.paddingTop = '0px';
    pulsante1 = document.querySelector('.opzione2 .ghost');
    pulsante1.style.display = 'block';

    
    sol3 = document.querySelector('.opzione3 p');
    sol3.innerHTML = '<b>Pulsante di testo</b>';
    sol3.style.fontSize = '12pt';
    sol3.style.paddingTop = '0px';
    pulsante1 = document.querySelector('.opzione3 .link');
    pulsante1.style.display = 'block';


    sol4 = document.querySelector('.opzione4 p');
    sol4.innerHTML = '<b>Pulsante toggle</b>';
    sol4.style.fontSize = '12pt';
    sol4.style.paddingTop = '0px';
    pulsante1 = document.querySelector('.opzione4 .cuore-vuoto');
    pulsante1.style.display = 'block';

    bottone = document.querySelector('.verifica .ghost-dis');
    bottone.style.display = 'block';
    bottone1 = document.querySelector('.verifica .ghost1');
    bottone1.style.display = 'none';

    opzione4 = document.querySelector('.opzione4');
    opzione4.classList.remove('opzione-focus');
    opzione3 = document.querySelector('.opzione3');
    opzione3.classList.remove('opzione-focus');    
    opzione2 = document.querySelector('.opzione2');
    opzione2.classList.remove('opzione-focus');
    opzione1 = document.querySelector('.opzione1');
    opzione1.classList.remove('opzione-focus');  
}


showSol4 = function () {
    bollino = document.querySelector('.bollino-quiz');
    bollino.style.display = 'block';
    lettera = document.querySelector('.lettera');
    lettera.style.display = 'none';
    bollino1 = document.querySelector('.bollino-quiz1');
    bollino1.style.display = 'block';
    lettera1 = document.querySelector('.lettera1');
    lettera1.style.display = 'none';
    bollino2 = document.querySelector('.bollino-quiz2');
    bollino2.style.display = 'block';
    lettera2 = document.querySelector('.lettera2');
    lettera2.style.display = 'none';
    bollino3 = document.querySelector('.bollino-quiz3');
    bollino3.style.display = 'block';
    lettera3 = document.querySelector('.lettera3');
    lettera3.style.display = 'none';

    sol1 = document.querySelector('.opzione1 p');
    sol1.innerHTML = "Un pulsante ben visibile con riempimento è una scelta corretta.";
    sol1.style.fontSize = '12pt';
    sol1.style.paddingTop = '15px';
    pulsante = document.querySelector('.opzione1 .cta');
    pulsante.style.display = 'none';

    sol2 = document.querySelector('.opzione2 p');
    sol2.innerHTML = "Per quest'azione servirebbe un pulsante più evidente.";
    sol2.style.fontSize = '12pt';
    sol2.style.paddingTop = '15px';
    pulsante = document.querySelector('.opzione2 .ghost');
    pulsante.style.display = 'none';
    
    sol3 = document.querySelector('.opzione3 p');
    sol3.innerHTML = "In questo caso, il pulsante di testo è troppo simile ad un link.";
    sol3.style.fontSize = '12pt';
    sol3.style.paddingTop = '15px';
    pulsante = document.querySelector('.opzione3 .link');
    pulsante.style.display = 'none';

    sol4 = document.querySelector('.opzione4 p');
    sol4.innerHTML = "La sola icona non chiarisce l'azione all'utente.";
    sol4.style.fontSize = '12pt';
    sol4.style.paddingTop = '15px';
    pulsante1 = document.querySelector('.opzione4 .cuore-vuoto');
    pulsante1.style.display = 'none';

    bottone = document.querySelector('.verifica .ghost-dis');
    bottone.style.display = 'none';
    bottone1 = document.querySelector('.verifica .ghost1');
    bottone1.style.display = 'block';
}

hideSol4 = function () {
    bollino = document.querySelector('.bollino-quiz');
    bollino.style.display = 'none';
    lettera = document.querySelector('.lettera');
    lettera.style.display = 'block';
    bollino1 = document.querySelector('.bollino-quiz1');
    bollino1.style.display = 'none';
    lettera1 = document.querySelector('.lettera1');
    lettera1.style.display = 'block';
    bollino2 = document.querySelector('.bollino-quiz2');
    bollino2.style.display = 'none';
    lettera2 = document.querySelector('.lettera2');
    lettera2.style.display = 'block';
    bollino3 = document.querySelector('.bollino-quiz3');
    bollino3.style.display = 'none';
    lettera3 = document.querySelector('.lettera3');
    lettera3.style.display = 'block';

    sol1 = document.querySelector('.opzione1 p');
    sol1.innerHTML = '<b>Pulsante classico</b>';
    sol1.style.fontSize = '12pt';
    sol1.style.paddingTop = '0px';
    pulsante1 = document.querySelector('.opzione1 .cta');
    pulsante1.style.display = 'block';

    sol2 = document.querySelector('.opzione2 p');
    sol2.innerHTML = '<b>Pulsante ghost</b>';
    sol2.style.fontSize = '12pt';
    sol2.style.paddingTop = '0px';
    pulsante1 = document.querySelector('.opzione2 .ghost');
    pulsante1.style.display = 'block';

    
    sol3 = document.querySelector('.opzione3 p');
    sol3.innerHTML = '<b>Pulsante di testo</b>';
    sol3.style.fontSize = '12pt';
    sol3.style.paddingTop = '0px';
    pulsante1 = document.querySelector('.opzione3 .link');
    pulsante1.style.display = 'block';


    sol4 = document.querySelector('.opzione4 p');
    sol4.innerHTML = '<b>Pulsante toggle</b>';
    sol4.style.fontSize = '12pt';
    sol4.style.paddingTop = '0px';
    pulsante1 = document.querySelector('.opzione4 .cuore-vuoto');
    pulsante1.style.display = 'block';

    bottone = document.querySelector('.verifica .ghost-dis');
    bottone.style.display = 'block';
    bottone1 = document.querySelector('.verifica .ghost1');
    bottone1.style.display = 'none';

    opzione4 = document.querySelector('.opzione4');
    opzione4.classList.remove('opzione-focus');
    opzione3 = document.querySelector('.opzione3');
    opzione3.classList.remove('opzione-focus');    
    opzione2 = document.querySelector('.opzione2');
    opzione2.classList.remove('opzione-focus');
    opzione1 = document.querySelector('.opzione1');
    opzione1.classList.remove('opzione-focus');  
}


showSol5 = function () {
    bollino = document.querySelector('.bollino-quiz');
    bollino.style.display = 'block';
    lettera = document.querySelector('.lettera');
    lettera.style.display = 'none';
    bollino1 = document.querySelector('.bollino-quiz1');
    bollino1.style.display = 'block';
    lettera1 = document.querySelector('.lettera1');
    lettera1.style.display = 'none';
    bollino2 = document.querySelector('.bollino-quiz2');
    bollino2.style.display = 'block';
    lettera2 = document.querySelector('.lettera2');
    lettera2.style.display = 'none';
    bollino3 = document.querySelector('.bollino-quiz3');
    bollino3.style.display = 'block';
    lettera3 = document.querySelector('.lettera3');
    lettera3.style.display = 'none';

    sol1 = document.querySelector('.opzione1 p');
    sol1.innerHTML = "Il collegamento al servizio clienti deve essere meno evidente rispetto alle <a href='https://en.wikipedia.org/wiki/Call_to_action_(marketing)' class='link'><u>cta.</u></a>";
    sol1.style.fontSize = '12pt';
    sol1.style.paddingTop = '10px';
    pulsante = document.querySelector('.opzione1 .cta');
    pulsante.style.display = 'none';

    sol2 = document.querySelector('.opzione2 p');
    sol2.innerHTML = "Corretto se si vuole dare maggiore risalto al servizio.";
    sol2.style.fontSize = '12pt';
    sol2.style.paddingTop = '15px';
    pulsante = document.querySelector('.opzione2 .ghost');
    pulsante.style.display = 'none';
    
    sol3 = document.querySelector('.opzione3 p');
    sol3.innerHTML = "Solitamente il collegamento al servizio clienti è un semplice link.";
    sol3.style.fontSize = '12pt';
    sol3.style.paddingTop = '15px';
    pulsante = document.querySelector('.opzione3 .link');
    pulsante.style.display = 'none';

    sol4 = document.querySelector('.opzione4 p');
    sol4.innerHTML = "La sola icona non chiarisce l'azione all'utente.";
    sol4.style.fontSize = '12pt';
    sol4.style.paddingTop = '15px';
    pulsante1 = document.querySelector('.opzione4 .servizio');
    pulsante1.style.display = 'none';

    bottone = document.querySelector('.verifica .ghost-dis');
    bottone.style.display = 'none';
    bottone1 = document.querySelector('.verifica .ghost1');
    bottone1.style.display = 'block';
}

hideSol5 = function () {
    bollino = document.querySelector('.bollino-quiz');
    bollino.style.display = 'none';
    lettera = document.querySelector('.lettera');
    lettera.style.display = 'block';
    bollino1 = document.querySelector('.bollino-quiz1');
    bollino1.style.display = 'none';
    lettera1 = document.querySelector('.lettera1');
    lettera1.style.display = 'block';
    bollino2 = document.querySelector('.bollino-quiz2');
    bollino2.style.display = 'none';
    lettera2 = document.querySelector('.lettera2');
    lettera2.style.display = 'block';
    bollino3 = document.querySelector('.bollino-quiz3');
    bollino3.style.display = 'none';
    lettera3 = document.querySelector('.lettera3');
    lettera3.style.display = 'block';

    sol1 = document.querySelector('.opzione1 p');
    sol1.innerHTML = '<b>Pulsante classico</b>';
    sol1.style.fontSize = '12pt';
    sol1.style.paddingTop = '0px';
    pulsante1 = document.querySelector('.opzione1 .cta');
    pulsante1.style.display = 'block';

    sol2 = document.querySelector('.opzione2 p');
    sol2.innerHTML = '<b>Pulsante ghost</b>';
    sol2.style.fontSize = '12pt';
    sol2.style.paddingTop = '0px';
    pulsante1 = document.querySelector('.opzione2 .ghost');
    pulsante1.style.display = 'block';

    
    sol3 = document.querySelector('.opzione3 p');
    sol3.innerHTML = '<b>Pulsante di testo</b>';
    sol3.style.fontSize = '12pt';
    sol3.style.paddingTop = '0px';
    pulsante1 = document.querySelector('.opzione3 .link');
    pulsante1.style.display = 'block';


    sol4 = document.querySelector('.opzione4 p');
    sol4.innerHTML = '<b>Pulsante toggle</b>';
    sol4.style.fontSize = '12pt';
    sol4.style.paddingTop = '0px';
    pulsante1 = document.querySelector('.opzione4 .servizio');
    pulsante1.style.display = 'block';

    bottone = document.querySelector('.verifica .ghost-dis');
    bottone.style.display = 'block';
    bottone1 = document.querySelector('.verifica .ghost1');
    bottone1.style.display = 'none';

    opzione4 = document.querySelector('.opzione4');
    opzione4.classList.remove('opzione-focus');
    opzione3 = document.querySelector('.opzione3');
    opzione3.classList.remove('opzione-focus');    
    opzione2 = document.querySelector('.opzione2');
    opzione2.classList.remove('opzione-focus');
    opzione1 = document.querySelector('.opzione1');
    opzione1.classList.remove('opzione-focus');  
}



showSol6 = function () {
    bollino = document.querySelector('.bollino-quiz');
    bollino.style.display = 'block';
    lettera = document.querySelector('.lettera');
    lettera.style.display = 'none';
    bollino1 = document.querySelector('.bollino-quiz1');
    bollino1.style.display = 'block';
    lettera1 = document.querySelector('.lettera1');
    lettera1.style.display = 'none';
    bollino2 = document.querySelector('.bollino-quiz2');
    bollino2.style.display = 'block';
    lettera2 = document.querySelector('.lettera2');
    lettera2.style.display = 'none';
    bollino3 = document.querySelector('.bollino-quiz3');
    bollino3.style.display = 'block';
    lettera3 = document.querySelector('.lettera3');
    lettera3.style.display = 'none';

    sol1 = document.querySelector('.opzione1 p');
    sol1.innerHTML = "Alcuni caratteri sono molto simili (o identici) tra loro e difficili da distinguere.";
    sol1.style.fontSize = '12pt';
    sol1.style.paddingTop = '10px';
    sol1.style.fontFamily = "'HK Grotesk', sans-serif";
    input = document.querySelector('.opzione1 input');
    input.style.display = 'none';

    sol2 = document.querySelector('.opzione2 p');
    sol2.innerHTML = "I font script sono tra i più difficili da leggere, meglio usarli con parsimonia.";
    sol2.style.fontSize = '12pt';
    sol2.style.paddingTop = '15px';
    sol2.style.fontFamily = "'HK Grotesk', sans-serif";
    input = document.querySelector('.opzione2 input');
    input.style.display = 'none';
    
    sol3 = document.querySelector('.opzione3 p');
    sol3.innerHTML = "I font solo maiuscoli affaticano molto il lettore, meglio usarli per testi brevi.";
    sol3.style.fontSize = '12pt';
    sol3.style.paddingTop = '15px';
    sol3.style.fontFamily = "'HK Grotesk', sans-serif";
    input = document.querySelector('.opzione3 input');
    input.style.display = 'none';

    sol4 = document.querySelector('.opzione4 p');
    sol4.innerHTML = "Il Noto Sans è tra i font più usati perché considerato tra i più leggibili.";
    sol4.style.fontSize = '12pt';
    sol4.style.paddingTop = '15px';
    sol4.style.fontFamily = "'HK Grotesk', sans-serif";
    input = document.querySelector('.opzione4 input');
    input.style.display = 'none';
    bottone = document.querySelector('.verifica .ghost-dis');
    bottone.style.display = 'none';
    bottone1 = document.querySelector('.verifica .ghost1');
    bottone1.style.display = 'block';
}

hideSol6 = function () {
    bollino = document.querySelector('.bollino-quiz');
    bollino.style.display = 'none';
    lettera = document.querySelector('.lettera');
    lettera.style.display = 'block';
    bollino1 = document.querySelector('.bollino-quiz1');
    bollino1.style.display = 'none';
    lettera1 = document.querySelector('.lettera1');
    lettera1.style.display = 'block';
    bollino2 = document.querySelector('.bollino-quiz2');
    bollino2.style.display = 'none';
    lettera2 = document.querySelector('.lettera2');
    lettera2.style.display = 'block';
    bollino3 = document.querySelector('.bollino-quiz3');
    bollino3.style.display = 'none';
    lettera3 = document.querySelector('.lettera3');
    lettera3.style.display = 'block';

    sol1 = document.querySelector('.opzione1 p');
    sol1.innerHTML = '<b>Pulsante classico</b>';
    sol1.style.fontSize = '12pt';
    sol1.style.paddingTop = '0px';
    sol1.style.fontFamily = "'HK Grotesk', sans-serif";
    input = document.querySelector('.opzione1 input');
    input.style.display = 'block';

    sol2 = document.querySelector('.opzione2 p');
    sol2.innerHTML = '<b>Pulsante ghost</b>';
    sol2.style.fontSize = '12pt';
    sol2.style.paddingTop = '0px';
    input = document.querySelector('.opzione2 input');
    input.style.display = 'block';

    
    sol3 = document.querySelector('.opzione3 p');
    sol3.innerHTML = '<b>Pulsante di testo</b>';
    sol3.style.fontSize = '12pt';
    sol3.style.paddingTop = '0px';
    input = document.querySelector('.opzione3 input');
    input.style.display = 'block';


    sol4 = document.querySelector('.opzione4 p');
    sol4.innerHTML = '<b>Pulsante toggle</b>';
    sol4.style.fontSize = '12pt';
    sol4.style.paddingTop = '0px';
    input = document.querySelector('.opzione4 input');
    input.style.display = 'block';

    bottone = document.querySelector('.verifica .ghost-dis');
    bottone.style.display = 'block';
    bottone1 = document.querySelector('.verifica .ghost1');
    bottone1.style.display = 'none';

    opzione4 = document.querySelector('.opzione4');
    opzione4.classList.remove('opzione-focus');
    opzione3 = document.querySelector('.opzione3');
    opzione3.classList.remove('opzione-focus');    
    opzione2 = document.querySelector('.opzione2');
    opzione2.classList.remove('opzione-focus');
    opzione1 = document.querySelector('.opzione1');
    opzione1.classList.remove('opzione-focus');  
}



showSol7 = function () {
    bollino = document.querySelector('.bollino-quiz');
    bollino.style.display = 'block';
    lettera = document.querySelector('.lettera');
    lettera.style.display = 'none';
    bollino1 = document.querySelector('.bollino-quiz1');
    bollino1.style.display = 'block';
    lettera1 = document.querySelector('.lettera1');
    lettera1.style.display = 'none';
    bollino2 = document.querySelector('.bollino-quiz2');
    bollino2.style.display = 'block';
    lettera2 = document.querySelector('.lettera2');
    lettera2.style.display = 'none';
    bollino3 = document.querySelector('.bollino-quiz3');
    bollino3.style.display = 'block';
    lettera3 = document.querySelector('.lettera3');
    lettera3.style.display = 'none';

    sol1 = document.querySelector('.opzione1 p');
    sol1.innerHTML = "L'allineamento centrato (o ad epigrafe) rallenta la lettura e la rende più complessa per molti.";
    sol1.style.paddingTop = '10px';
    sol1.style.textAlign = 'left';

    sol2 = document.querySelector('.opzione2 p');
    sol2.innerHTML = "Secondo le WCAG l'allinemento a sinistra è il più accessibile.";
    sol2.style.paddingTop = '10px';
    
    sol3 = document.querySelector('.opzione3 p');
    sol3.innerHTML = 'I testi giustificati possono generare i cosiddetti <i>canaletti</i> che possono complicare la lettura.';
    sol3.style.paddingTop = '10px';
    sol3.style.textAlign = 'left';

    sol4 = document.querySelector('.opzione4 p');
    sol4.innerHTML = "Una cattiva spaziatura può incidere sulla leggibilità del testo.";
    sol4.style.paddingTop = '10px';
    sol4.style.lineHeight = '120%';


    bottone = document.querySelector('.verifica .ghost-dis');
    bottone.style.display = 'none';
    bottone1 = document.querySelector('.verifica .ghost1');
    bottone1.style.display = 'block';
}

hideSol7 = function () {
    bollino = document.querySelector('.bollino-quiz');
    bollino.style.display = 'none';
    lettera = document.querySelector('.lettera');
    lettera.style.display = 'block';
    bollino1 = document.querySelector('.bollino-quiz1');
    bollino1.style.display = 'none';
    lettera1 = document.querySelector('.lettera1');
    lettera1.style.display = 'block';
    bollino2 = document.querySelector('.bollino-quiz2');
    bollino2.style.display = 'none';
    lettera2 = document.querySelector('.lettera2');
    lettera2.style.display = 'block';
    bollino3 = document.querySelector('.bollino-quiz3');
    bollino3.style.display = 'none';
    lettera3 = document.querySelector('.lettera3');
    lettera3.style.display = 'block';

    sol1 = document.querySelector('.opzione1 p');
    sol1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br>do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    sol1.style.paddingTop = '0px';
    sol1.style.textAlign = 'center';

    sol2 = document.querySelector('.opzione2 p');
    sol2.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br>do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    sol2.style.paddingTop = '0px';

    
    sol3 = document.querySelector('.opzione3 p');
    sol3.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    sol3.style.paddingTop = '0px';
    sol3.style.textAlign = 'justify';


    sol4 = document.querySelector('.opzione4 p');
    sol4.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br>do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    sol4.style.paddingTop = '0px';
    sol4.style.lineHeight = '100%';

    bottone = document.querySelector('.verifica .ghost-dis');
    bottone.style.display = 'block';
    bottone1 = document.querySelector('.verifica .ghost1');
    bottone1.style.display = 'none';

    opzione4 = document.querySelector('.opzione4');
    opzione4.classList.remove('opzione-focus');
    opzione3 = document.querySelector('.opzione3');
    opzione3.classList.remove('opzione-focus');    
    opzione2 = document.querySelector('.opzione2');
    opzione2.classList.remove('opzione-focus');
    opzione1 = document.querySelector('.opzione1');
    opzione1.classList.remove('opzione-focus');  
}

showSol8 = function () {
    bollino = document.querySelector('.bollino-quiz');
    bollino.style.display = 'block';
    lettera = document.querySelector('.lettera');
    lettera.style.display = 'none';
    bollino1 = document.querySelector('.bollino-quiz1');
    bollino1.style.display = 'block';
    lettera1 = document.querySelector('.lettera1');
    lettera1.style.display = 'none';
    bollino2 = document.querySelector('.bollino-quiz2');
    bollino2.style.display = 'block';
    lettera2 = document.querySelector('.lettera2');
    lettera2.style.display = 'none';
    bollino3 = document.querySelector('.bollino-quiz3');
    bollino3.style.display = 'block';
    lettera3 = document.querySelector('.lettera3');
    lettera3.style.display = 'none';

    sol1 = document.querySelector('.opzione1 p');
    sol1.innerHTML = "Avere un hobby è un'esperienza comune a tutti.";


    sol2 = document.querySelector('.opzione2 p');
    sol2.innerHTML = "Evita domande riguardanti <br>i beni materiali.";

    
    sol3 = document.querySelector('.opzione3 p');
    sol3.innerHTML = "Evita gli stereotipi. Non esiste un'unica forma di famiglia!";


    sol4 = document.querySelector('.opzione4 p');
    sol4.innerHTML = "Non presupporre il livello d'istruzione degli utenti.";


    bottone = document.querySelector('.verifica .ghost-dis');
    bottone.style.display = 'none';
    bottone1 = document.querySelector('.verifica .ghost1');
    bottone1.style.display = 'block';
}

hideSol8 = function () {
    bollino = document.querySelector('.bollino-quiz');
    bollino.style.display = 'none';
    lettera = document.querySelector('.lettera');
    lettera.style.display = 'block';
    bollino1 = document.querySelector('.bollino-quiz1');
    bollino1.style.display = 'none';
    lettera1 = document.querySelector('.lettera1');
    lettera1.style.display = 'block';
    bollino2 = document.querySelector('.bollino-quiz2');
    bollino2.style.display = 'none';
    lettera2 = document.querySelector('.lettera2');
    lettera2.style.display = 'block';
    bollino3 = document.querySelector('.bollino-quiz3');
    bollino3.style.display = 'none';
    lettera3 = document.querySelector('.lettera3');
    lettera3.style.display = 'block';

    sol1 = document.querySelector('.opzione1 p');
    sol1.innerHTML = 'Qual è il tuo hobby preferito nel tempo libero?';


    sol2 = document.querySelector('.opzione2 p');
    sol2.innerHTML = 'Qual era la marca della tua prima auto?';


    
    sol3 = document.querySelector('.opzione3 p');
    sol3.innerHTML = 'Qual è il cognome da nubile di tua madre?';



    sol4 = document.querySelector('.opzione4 p');
    sol4.innerHTML = 'Qual era la tua materia preferita al liceo?';

    bottone = document.querySelector('.verifica .ghost-dis');
    bottone.style.display = 'block';
    bottone1 = document.querySelector('.verifica .ghost1');
    bottone1.style.display = 'none';

    opzione4 = document.querySelector('.opzione4');
    opzione4.classList.remove('opzione-focus');
    opzione3 = document.querySelector('.opzione3');
    opzione3.classList.remove('opzione-focus');    
    opzione2 = document.querySelector('.opzione2');
    opzione2.classList.remove('opzione-focus');
    opzione1 = document.querySelector('.opzione1');
    opzione1.classList.remove('opzione-focus');   
}

function conto() {
    var c = document.getElementById('testo').value;
    document.getElementById('output').innerHTML = c.length;
    document.getElementById('output').innerHTML = c.length;
    p = document.querySelector('.img-text1 p');
if (c.length > 125) { 
p.style.color = 'red';
} else {
  p.style.color = 'black';
}
}

function conto1() {
    var c = document.getElementById('testo1').value;
    document.getElementById('output1').innerHTML = c.length;
    document.getElementById('output1').innerHTML = c.length;
    p = document.querySelector('.img-text2 p');
if (c.length > 125) { 
p.style.color = 'red';
} else {
  p.style.color = 'black';
}
}

showSol9 = function () {
    input = document.querySelector('.cat-img1 input');
    input.style.display = 'none';
    dark = document.querySelector('.dark-session');
    dark.style.display = 'block';

    input = document.querySelector('.cat-img2 input');
    input.style.display = 'none';
    dark = document.querySelector('.dark-session1');
    dark.style.display = 'block';

    input = document.querySelector('.cat-img3 input');
    input.style.display = 'none';
    dark = document.querySelector('.dark-session2');
    dark.style.display = 'block';

    bottone = document.querySelector('.verifica .ghost');
    bottone.style.display = 'none';
    bottone1 = document.querySelector('.verifica .ghost1');
    bottone1.style.display = 'block';

    text = document.querySelector('.cat-img1 h4');
    text.style.display = 'none';
    text1 = document.querySelector('.cat-img2 h4');
    text1.style.display = 'none';
    text2 = document.querySelector('.cat-img3 h4');
    text2.style.display = 'none';

    riquadro1 = document.querySelector('.cat-img1');
    riquadro1.style.backgroundImage = 'none';

    riquadro2 = document.querySelector('.cat-img2');
    riquadro2.style.backgroundImage = 'none';

    riquadro3 = document.querySelector('.cat-img3');
    riquadro3.style.backgroundImage = 'none';
}


hideSol9 = function () {
    input = document.querySelector(".cat-img1 input");
    input.style.display = 'block';
    dark = document.querySelector(".dark-session");
    dark.style.display = 'none';
    input.value = '';

    input = document.querySelector(".cat-img2 input");
    input.style.display = 'block';
    dark = document.querySelector(".dark-session1");
    dark.style.display = 'none';
    input.value = '';

    input = document.querySelector(".cat-img3 input");
    input.style.display = 'block';
    dark = document.querySelector(".dark-session2");
    dark.style.display = 'none';
    input.value = '';

    bottone = document.querySelector(".verifica .ghost");
    bottone.style.display = 'block';
    bottone1 = document.querySelector(".verifica .ghost1");
    bottone1.style.display = 'none';

    text = document.querySelector(".cat-img1 h4");
    text.style.display = "block";
    text1 = document.querySelector(".cat-img2 h4");
    text1.style.display = "block";
    text2 = document.querySelector(".cat-img3 h4");
    text2.style.display = "block";

}


selectCat = function () {
    opzione1 = document.querySelector('.prima');
    opzione1.classList.add('prima1');

    opzione2 = document.querySelector('.seconda');
    opzione2.classList.remove('seconda1');
    opzione3 = document.querySelector('.terza');
    opzione3.classList.remove('terza1');
}

selectCat1 = function () {
    opzione2 = document.querySelector('.seconda');
    opzione2.classList.add('seconda1');

    opzione1 = document.querySelector('.prima');
    opzione1.classList.remove('prima1');
    opzione3 = document.querySelector('.terza');
    opzione3.classList.remove('terza1');
}

selectCat3 = function () {
    opzione3 = document.querySelector('.terza');
    opzione3.classList.add('terza1');

    opzione1 = document.querySelector('.prima');
    opzione1.classList.remove('prima1');
    opzione2 = document.querySelector('.seconda');
    opzione2.classList.remove('seconda1');
}


selectCat = function () {
    opzione1 = document.querySelector('.prima');
    opzione1.classList.add('prima1');

    opzione2 = document.querySelector('.seconda');
    opzione2.classList.remove('seconda1');
    opzione3 = document.querySelector('.terza');
    opzione3.classList.remove('terza1');
}

selectCat1 = function () {
    opzione2 = document.querySelector('.seconda');
    opzione2.classList.add('seconda1');

    opzione1 = document.querySelector('.prima');
    opzione1.classList.remove('prima1');
    opzione3 = document.querySelector('.terza');
    opzione3.classList.remove('terza1');
}

selectCat3 = function () {
    opzione3 = document.querySelector('.terza');
    opzione3.classList.add('terza1');

    opzione1 = document.querySelector('.prima');
    opzione1.classList.remove('prima1');
    opzione2 = document.querySelector('.seconda');
    opzione2.classList.remove('seconda1');
}


cambiaImmagine = function () {
const image_input = document.querySelector("#input-image");
  image_input.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const uploaded_image = reader.result;
      document.querySelector(".cat-img1").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});
  
const image_input1 = document.querySelector("#input-image1");
  
  image_input1.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const uploaded_image = reader.result;
      document.querySelector(".cat-img2").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
  });
  
const image_input2 = document.querySelector("#input-image2");
  
  image_input2.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const uploaded_image = reader.result;
      document.querySelector(".cat-img3").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});
}




changeColorInput = function () {
    code = document.querySelector('#input-text-color').value;
    code1 = document.querySelector('#input-text-color1').value;
    input = document.querySelector('#input-text');
    input1 = document.querySelector('#input-background');
    input.value = code;
    input1.value = code1;
    handleColorChange();
}
  
  
  const WCAG_MINIMUM_RATIOS = [
      ['AA Large', 3],
      ['AA', 4.5],
      ['AAA', 7],
  ]
  
  
  let container = document.querySelector('.container1')
  let statusText = document.getElementById('status-text')
  let statusRatio = document.getElementById('status-ratio')
  let statusLevel = document.getElementById('status-level')
  let textColorInput = document.getElementById('input-text')
  let bgColorInput = document.getElementById('input-background')
  let livelloContrasto = document.getElementById('livello-contrasto')
  let corretto = document.getElementById('correct')
  
  /* Attach the event listener */
  textColorInput.addEventListener('input', handleColorChange)
  bgColorInput.addEventListener('input', handleColorChange)
  
  /* Fire the listener once to initialize the app */
  handleColorChange()
  
  
  function handleColorChange() {
      let textColor = textColorInput.value;
      let bgColor = bgColorInput.value;
  
      container.style.color = textColor;
      container.style.backgroundColor = bgColor;
  
      let ratio = checkContrast(textColor, bgColor);
      let { didPass, maxLevel } = meetsMinimumRequirements(ratio);
  
      statusText.classList.toggle('is-pass', didPass);
      statusRatio.innerText = formatRatio(ratio);
      statusLevel.innerText = didPass ? maxLevel : 'Fail'
    if (ratio < 3) {
     statusRatio.style.backgroundColor = 'red';
     statusRatio.style.color = 'white';
     livelloContrasto.innerText = 'SCARSO!'
     corretto.src = 'sbagliato.svg';
    } else if (ratio < 4.5) {
     statusRatio.style.backgroundColor = 'orange';
     livelloContrasto.innerText = 'BUONO!'
     corretto.src = 'attenzione_cerchio.svg';
    } else {
      statusRatio.style.backgroundColor = "green";
      statusRatio.style.color = 'white';
      livelloContrasto.innerText = 'OTTIMO!'
      corretto.src = 'corretto.svg';
    }
  }
  
  
  function luminance(r, g, b) {
      let [lumR, lumG, lumB] = [r, g, b].map(component => {
          let proportion = component / 255;
  
          return proportion <= 0.03928
              ? proportion / 12.92
              : Math.pow((proportion + 0.055) / 1.055, 2.4);
      });
  
      return 0.2126 * lumR + 0.7152 * lumG + 0.0722 * lumB;
  }
  
  function contrastRatio(luminance1, luminance2) {
      let lighterLum = Math.max(luminance1, luminance2);
      let darkerLum = Math.min(luminance1, luminance2);
  
      return (lighterLum + 0.05) / (darkerLum + 0.05);
  }
  
  
  function checkContrast(color1, color2) {
      let [luminance1, luminance2] = [color1, color2].map(color => {
          /* Remove the leading hash sign if it exists */
          color = color.startsWith("#") ? color.slice(1) : color;
  
          let r = parseInt(color.slice(0, 2), 16);
          let g = parseInt(color.slice(2, 4), 16);
          let b = parseInt(color.slice(4, 6), 16);
  
          return luminance(r, g, b);
      });
  
      return contrastRatio(luminance1, luminance2);
  }
  
  
  function formatRatio(ratio) {
      let ratioAsFloat = ratio.toFixed(2)
      let isInteger = Number.isInteger(parseFloat(ratioAsFloat))
      return `${isInteger ? Math.floor(ratio) : ratioAsFloat}:1`
  }
  
  
  function meetsMinimumRequirements(ratio) {
      let didPass = false
      let maxLevel = null
  
      for (const [level, minRatio] of WCAG_MINIMUM_RATIOS) {
          if (ratio < minRatio) break
  
          didPass = true
          maxLevel = level
      }
  
      return { didPass, maxLevel }
  }
  




