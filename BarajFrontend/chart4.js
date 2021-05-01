// 01/05/2021 - 22:48pm     
// @bedirhanGiden
      
var chart4_lst = []

$.get("http://127.0.0.1:8000/api/damVolume/", function(data, status){
    data.forEach(element => {
     
        chart4_lst.push(Object.values(element))
        console.log(element)
    });
  });


      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawVisualization);

      function drawVisualization() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
          ['Month', 'İstanbul', 'Türkiye', 'İstanbul/Türkiye'],
          ['2004/05',  165,      938,         522,             998,           450,      614.6],
          ['2005/06',  135,      1120,        599,             1268,          288,      682],
          ['2006/07',  157,      1167,        587,             807,           397,      623],
          ['2007/08',  139,      1110,        615,             968,           215,      609.4],
          ['2008/09',  136,      691,         629,             1026,          366,      569.6]
        ]);

        var options = {
          title : 'Monthly Coffee Production by Country',
          vAxis: {title: 'Cups'},
          hAxis: {title: 'Month'},
          seriesType: 'bars',
          series: {5: {type: 'line'}}
        };

        var chart = new google.visualization.ComboChart(document.getElementById('chart4'));
        chart.draw(data, options);
      }