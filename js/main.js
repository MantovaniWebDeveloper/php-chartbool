$(document).ready(function() {
  //indirizzo locale dei dati
  var url = 'http://localhost/php/php-chartbool/data.php';
  var urlm2 = 'http://localhost/php/php-chartbool/data2.php';
  recuperoDatiM1(url);
  recuperoDatiM2(urlm2);
  //funzione recupero dati tramite chiamata ajax
  function recuperoDatiM1(url) {

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
          label: "Vendite milestone 1",
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: dati,
        }]
      },

      // Configuration options go here
      options: {}
    });
  }

  function recuperoDatiM2(urlm2) {

    $.ajax({
      url: urlm2,
      method: "GET",
      success: function(data) {
        var dati = JSON.parse(data);

        var ctx = $(".wrapGrafico2");
        var chart = new Chart(ctx, {
          // The type of chart we want to create
          type: dati.type,

          // The data for our dataset
          data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
              label: "Vendite milestone 2",
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: dati.data,
            }]
          },

          // Configuration options go here
          options: {}
        });


      },
      error: function(error) {
        alert("c'è un errore di comunicazione" + error);
      }
    });



  };

});
