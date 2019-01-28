$(document).ready(function() {
  //indirizzo locale dei dati
  var url = 'http://localhost/php/php-chartbool/data.php';
  recuperoDati(url);
  //funzione recupero dati tramite chiamata ajax
  function recuperoDati(url) {

    $.ajax({
      url: url,
      method: "GET",
      success: function(data) {
        var dati = JSON.parse(data);
        console.log(dati);
        stampaGrafico(dati);


      },
      error: function(error) {
        alert("c'è un errore di comunicazione");
      }
    })



  };
  //funzione per stampaGrafico
  function stampaGrafico(dati) {
    //parte esempio da modificare
    var ctx = $(".wrapGrafico");
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
          label: "Vendite",
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: dati,
        }]
      },

      // Configuration options go here
      options: {}
    });
  }


});
