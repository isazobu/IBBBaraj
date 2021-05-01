// 01/05/2021 - 22:00pm
// @bedirhanGiden


// data alma
var columnCharts = []

$.get("http://127.0.0.1:8000/api/istanbulnufus/", function(data, status){
    data.forEach(element => {
     
        columnCharts.push(Object.values(element))

    });
  });


google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawTrendlines);

function drawTrendlines() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Time of Day');
      data.addColumn('number', 'Motivation Level');
      data.addColumn('number', 'Energy Level');

      data.addRows(columnCharts);

      var options = {
        title: 'Motivation and Energy Level Throughout the Day',
        trendlines: {
          0: {type: 'linear', lineWidth: 5, opacity: .3},
          1: {type: 'exponential', lineWidth: 10, opacity: .3}
        },
        // hAxis: {
        //   title: '',
        //   format: 'h:mm a',
        //   viewWindow: {
        //     min: [7, 30, 0],
        //     max: [17, 30, 0]
        //   }
        // },
        vAxis: {
           title: 'Rating (scale of 1-10)',
            scaleType : 'log'
        }
      };

      var chart = new google.visualization.ColumnChart(document.getElementById('nufusSu'));
      chart.draw(data, options);
    }