//inizializzo contenitore cognomi

var surnameContainer = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

// bottone di ricerca
var searchbtnEl = document.getElementById("searchButton");

//bottone per aggiungere il cognome all'elenco
var addbtnEl = document.getElementById("addBtn");

//messaggi di output
var messageEl = document.getElementById("message");
var messaggeAddEl = document.getElementById("messageAdd");

//assegno variabile all'ol, al titolo e al messaggio della posizione
var surnameListEl = document.getElementById("surnameList");
var listTitleEl = document.getElementById("listTile");
var messagePositionEl = document.getElementById("messagePosition");
// aggiungo il click del bottone ricerca

searchbtnEl.addEventListener("click", function () {
  // prendo il cognome inserito dall'utente

  var surnameEl = document.getElementById("surnameEntered").value;

  //confronto il cognome con quelli nell'archivio
  for (i = 0; i < surnameContainer.length; i++) {
    if (surnameEl == surnameContainer[i]) {

      messageEl.innerHTML = "Cognome già presente nel nostro archivio";
      addbtnEl.style.display = "none";

    } else {
      messageEl.innerHTML = "Cognome non presente nell'archivio, vuoi inserirlo?";
      addbtnEl.style.display = "block";
    }
  }
});
// definisco cosa fa il bottone inserisci
addbtnEl.addEventListener("click", function () {

  // prendiamo il cognome inserito dall'utente

  var surnameEl = document.getElementById("surnameEntered").value;

  // e lo mettiamo dentro l'Array
  surnameContainer.push(surnameEl);

  //output del messaggio
  messaggeAddEl.innerHTML = "Cognome inserito correttamente!";
  messaggeAddEl.style.backgroundColor ="green";
  listTitleEl.style.display = "block";
  //ordino la lista dei cognomi
  surnameContainer.sort();
  //definisco posizione utente iniziale
  var positionSurname = 0;
  //metto in output la lista aggiornata
  for (var i = 0; i < surnameContainer.length; i++){
    surnameListEl.innerHTML += "<li>" + surnameContainer[i] + "</li>";
    // calcolo posizione del cognome inserito dall'utente
    if (surnameContainer[i] == surnameEl){
      positionSurname = i + 1;
    }
  }
  //visualizzo il messaggio e la relativa posizione
  messagePosition.style.display = "block";
  messagePositionEl.innerHTML += positionSurname;
});
