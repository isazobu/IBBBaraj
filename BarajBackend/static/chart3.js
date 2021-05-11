


// data alma
var columnCharts = []

$.get("/api/istanbulnufus/", function(data, status){
    data.forEach(element => {
     
        columnCharts.push(Object.values(element))
      //  console.log(element)
    });
  });


google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawTrendlines);

function drawTrendlines() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Yıllar');
      data.addColumn('number', 'İstanbul Nüfus');
      data.addColumn('number', 'Verilen Su');

      data.addRows(columnCharts);

      var options = {
        title: 'Nüfus ve Verilen Su Miktarları',
        trendlines: {
          0: {type: 'linear', lineWidth: 5, opacity: .3},
          1: {type: 'exponential', lineWidth: 10, opacity: .3}
        },
         hAxis: {
           title: '',
           format: ' ',
          //  viewWindow: {
          //    min: [7, 30, 0],
          //    max: [17, 30, 0]
          //  }
         },
        vAxis: {
           title: 'Rating (scale of 1-10)',
            scaleType : 'log'
        }
      };

      var chart = new google.visualization.ColumnChart(document.getElementById('nufusSu'));
      chart.draw(data, options);
    }