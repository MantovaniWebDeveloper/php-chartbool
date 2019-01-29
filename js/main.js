$(document).ready(function() {
  //indirizzo locale dei dati
  var url = 'http://localhost/php/php-chartbool/data.php';
  var urlm2 = 'http://localhost/php/php-chartbool/data2.php';
  var urlm3 = 'http://localhost/php/php-chartbool/data3.php';
  recuperoDatiM1(url);
  recuperoDatiM2(urlm2);
  recuperoDatiM3(urlm3);
  //funzione recupero dati tramite chiamata ajax
  function recuperoDatiM1(url) {

    $.ajax({
      url: url,
      method: "GET",
      success: function(data) {
        var dati = JSON.parse(data);
        console.log(dati);
        var ctx = $(".wrapGrafico");
        stampaGrafico(ctx, dati);


      },
      error: function(error) {
        alert("c'è un errore di comunicazione");
      }
    })



  };
  //funzione per stampaGrafico
  function stampaGrafico(ctx, dati) {
    //parte esempio da modificare
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
        console.log(dati);
        //dati recuperati per secondo grafico

        var type = dati.fatturato.type;
        var ctx = $(".wrapGrafico2");
        var dataFatturato = dati.fatturato.data;
        stampaGraficoAvanzato(type, ctx, dataFatturato);

        //dati recuperati grafico torta
        var typeFBA = dati.fatturato_by_agent.type;
        var ctxTorta = $(".wrapGrafico3");
        var datiFBA = dati.fatturato_by_agent.data;
        var nomi = [];
        var fatturato = [];
        for (var nome in datiFBA) {
          console.log(nome + " " + datiFBA[nome]);
          nomi.push(nome);
          fatturato.push(datiFBA[nome]);
        }

        console.log(nomi);
        console.log(fatturato);

        stampaTortaAvanzato(typeFBA, ctxTorta, nomi, fatturato);

      },
      error: function(error) {
        alert("c'è un errore di comunicazione" + error);
      }
    });



  };

  function stampaGraficoAvanzato(type, ctx, dataFatturato) {
    //GRAFICO FATTURATO MILESTONE 2!
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: type,

      // The data for our dataset
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
          label: "Vendite milestone 2",
          backgroundColor: 'yellow',
          borderColor: 'rgb(255, 99, 132)',
          data: dataFatturato,
        }]
      },

      // Configuration options go here
      options: {}
    });
    //FINE GRAFICO FATTURATO MILESTONE 2 //
  }

  function stampaTortaAvanzato(typeFBA, ctxTorta, nomi, fatturato) {
    //GRAFICO torta
    var myPieChart = new Chart(ctxTorta, {
      type: typeFBA,
      data: {
        labels: nomi,
        datasets: [{
          data: fatturato,
          backgroundColor: [
            "#FF6384",
            "#63FF84",
            "#84FF63",
            "#8463FF",
          ]
        }]
      }

    });
  }

  function recuperoDatiM3(urlm3) {

    $.ajax({
      url: urlm2,
      method: "GET",
      success: function(data) {
      var dati = JSON.parse(data);
        console.log(dati);
        //dati recuperati per secondo grafico

        var type = dati.fatturato.type;
        var ctx = $(".wrapGrafico4");
        var dataFatturato = dati.fatturato.data;
        stampaGraficoAvanzato(type, ctx, dataFatturato);

        //dati recuperati grafico torta
       var typeFBA = dati.fatturato_by_agent.type;
        var ctxTorta = $(".wrapGrafico5");
        var datiFBA = dati.fatturato_by_agent.data;
        var nomi = [];
        var fatturato = [];
        for (var nome in datiFBA) {
          console.log(nome + " " + datiFBA[nome]);
          nomi.push(nome);
          fatturato.push(datiFBA[nome]);
        }

        console.log(nomi);
        console.log(fatturato);

        stampaTortaAvanzato(typeFBA, ctxTorta, nomi, fatturato);

      },
      error: function(error) {
        alert("c'è un errore di comunicazione" + error);
      }
    });



  };

});
