// 01/05/2021 - 22:48pm     
// @bedirhanGiden
      
// MODIFYING FOR WATER PER CAPITA

var  temp_Chart4 = []
var year= 2000
while(year <=2018){  
  
  if (year<2004)
    {
      year+=1
    temp_Chart4.push(year)
    }
  else{
    temp_Chart4.push(year)
    year+=2  
  }
  
  
    
}
var data_Array_Chart4 = []
temp_Chart4.forEach(year => {
  var x = []
  
  $.get({url: "/api/damVolume/?year=".concat(year),async:false}, function(data, status){
   

     x.push(year)
     data.forEach(element => {
       var el = Object.values(element)
     
       x.push(el[1])
     })
     //console.log(x)
     data_Array_Chart4.push(x)
});
  
  x =[]
});

console.log(data_Array_Chart4)

      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawVisualization);

      function drawVisualization() {
        // Some raw data (not necessarily accurate)
        // var data = google.visualization.arrayToDataTable([ABC]);
        var data = new google.visualization.DataTable();
        data.addColumn('number', 'Year');
        data.addColumn('number', 'İstanbul');
        data.addColumn('number', 'Türkiye');

        data.addRows(data_Array_Chart4)

       
        var options = {
          title : 'Monthly Coffee Production by Country',
          vAxis: {title: 'Su Tüketim Miktarı'},
          hAxis: {title: 'Yıl', format:''},
          seriesType: 'bars',
          series: {5: {type: 'line'}}
        };
        
        var chart = new google.visualization.ComboChart(document.getElementById('chart4'));
        chart.draw(data, options);

        var button = document.getElementById('change');

        button.onclick = function () {

          // If the format option matches, change it to the new option,
          // if not, reset it to the original format.
          options.hAxis.format === ' ' ?
          options.hAxis.format = ' ' :
          options.hAxis.format = ' ';

          chart.draw(data, options);
        };
      }