//inizializzo contenitore cognomi

var surnameContainer = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

// bottone di ricerca
var searchbtnEl = document.getElementById("searchButton");

//bottone per aggiungere il cognome all'elenco
var addbtnEl = document.getElementById("addBtn");

//messaggi di output
var messageEl = document.getElementById("message");
var messageAddEl = document.getElementById("messageAdd");

//assegno variabile all'ol, al titolo e al messaggio della posizione
var surnameListEl = document.getElementById("surnameList");
var listTitleEl = document.getElementById("listTile");
var messagePositionEl = document.getElementById("messagePosition");

// aggiungo il click del bottone ricerca

searchbtnEl.addEventListener("click", function () {

  //prendo input cognome inserito dall'utente
  var surnameEl = document.getElementById("surnameEntered").value;
  //confronto il cognome con quelli nell'archivio
  for (var i = 0; i < surnameContainer.length; i++) {
    if (surnameEl == surnameContainer[i]) {

      messageEl.innerHTML = "Cognome già presente nel nostro archivio";
      //mi blocco se viene trovata nell'archivio
      i = surnameContainer.length;
      addbtnEl.style.display = "none";
    } else if (surnameEl == ""){
      messageEl.innerHTML = "Inserisci qualcosa!";
    }else if(surnameEl != surnameContainer[i]){
      messageEl.innerHTML = "Cognome non presente nell'archivio, vuoi inserirlo?";
      addbtnEl.style.display = "block";
    }
  }
});
// definisco cosa fa il bottone inserisci
addbtnEl.addEventListener("click", function () {

  //prendo input cognome inserito dall'utente
  var surnameEl = document.getElementById("surnameEntered").value;
  //inserisce il cognome all'interno dell'array
  surnameContainer.push(surnameEl);

  //output del messaggio
  messageAddEl.innerHTML = "Cognome inserito correttamente!";
  messageAddEl.style.backgroundColor ="green";
  listTitleEl.style.display = "block";

  // trasformo tutti gli elementi dell array in stringhe lower cased
  var surnamesLowerCase = [];
  for (var i = 0; i < surnameContainer.length; i++){
    surnamesLowerCase.push(surnameContainer[i].toLowerCase());
  }
  //ordino la lista dei cognomi
  surnamesLowerCase.sort();

  // Stampo l'output dei dati che ho elaborato
  var i = 0;
  while( i < surnamesLowerCase.length ){

    // stampa l'elemento <li> nell'HTML
    var firstLetter = surnamesLowerCase[i].charAt(0);
    firstLetter = firstLetter.toUpperCase();
    var surnameWithUpperCapital = firstLetter + surnamesLowerCase[i].slice(1);
    document.getElementById('surnameList').innerHTML += '<li>'+surnameWithUpperCapital+'</li>';

    // memorizza l'indice della stringa inserita dall'utente nell'array ordinato
    if( surnamesLowerCase[i] == surnameEl.toLowerCase() ){
      document.getElementById('messagePosition').innerHTML += i + 1;
      messagePosition.style.display = "block";
    }

    i++;
  }
});
