// 1. per far partire il programma bisogna far partire tutto dal btn genera
var genera = document.getElementById("genera");

genera.addEventListener("click",
  function() {
    // 1 nome dell'utente inserito nell'input
    var nome = document.getElementById("nome").value;
    // 2 i km inseriti dall'utente nell'input
    var km = document.getElementById("km").value;
    // 3 fascia di età dall'input
    var fasciaEta = document.getElementById("eta").value;
    // 4 calcolare prezzo viaggio x 0.21€
    var prezzoKm = 0.21;

    var totale = km * prezzoKm;
    var offerta = "Biglietto Standard";

    //* 5 se l'età dell'utente è < a 18 anni il prezzo sarà
    //  scontato del 20%
    //  se >= a 65 sconto del 40%

    if (fasciaEta == "minorenne") {
      totale = totale - ((totale * 20) / 100);
      offerta = "Sconto Minorenne";
    } else if (fasciaEta >= "over65") {
      totale = totale - ((totale * 40) / 100);
      offerta = "Sconto Silver";
    }

    // 6 fissiamo il prezzo a 2 decimali
    totale = totale.toFixed(2);

    // 7 numero random carrozza e il codice cp
    var numCarrozza = Math.floor(Math.random() * 9) + 1;
    var codiceCp = Math.floor(Math.random() * 9999) + 90000;

    // 8 stampo i dati del biglietto
    document.getElementById("nome_passeggero").innerHTML = nome;
    document.getElementById("offerta").innerHTML = offerta;
    document.getElementById("carrozza").innerHTML = numCarrozza;
    document.getElementById("codice-cp").innerHTML = codiceCp;
    document.getElementById("costo").innerHTML = totale + "€";

    document.getElementById("box_biglietto").classList.add("hamburger");
  }
);

// ANNULLA
  var annulla = document.getElementById("annulla");
  annulla.addEventListener("click",
  function () {
    document.getElementById("box_biglietto").classList.remove("hamburger");


    // RESET
    document.getElementById("nome").value = "";
    document.getElementById("km").value = "";
    document.getElementById("eta").value = "";
  }
);
