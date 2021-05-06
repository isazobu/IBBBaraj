function filterByPosition(array, number, position) {
    console.log("Inner pozition", innerArray[position])
    return array.filter(innerArray => innerArray[position] == number);
 }
      
// MODIFYING FOR WATER PER CAPITA

var  Chart4_Years = []
var year= 2000
while(year <=2018){  
  
  if (year<2004)
    {
      year+=1
    Chart4_Years.push(year)
    }
  else{
    Chart4_Years.push(year)
    year+=2  
  }

}

//console.log(Chart4_Years)

var data_Array_Chart4 = []
var x = []
  
$.get({url: "/api/damVolume/" , async:false}, function(data, status){
    //x.push(year)
    data.forEach(element => {
      var el = Object.values(element)
     //   console.log(el)
      x.push(el)
    })
    //console.log(x)
    data_Array_Chart4.push(x)
});

  
//x =[]
var chart4_data = []
Chart4_Years.forEach(year => {
    var T = []
    var Y= data_Array_Chart4[0].filter(el=> el[0] == year)
    T.push(year)
    Y.forEach(year => {
        T.push(year[1])
    })
    chart4_data.push(T)
    Y = []
    T = []
})

console.log("Chart- 4", chart4_data)




      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawVisualization);

      function drawVisualization() {
        // Some raw data (not necessarily accurate)
        // var data = google.visualization.arrayToDataTable([ABC]);
        var data = new google.visualization.DataTable();
        data.addColumn('number', 'Year');
        data.addColumn('number', 'İstanbul');
        data.addColumn('number', 'Türkiye');

        data.addRows(chart4_data)

       
        var options = {
          title : 'Barajlardan Çekilen Toplam Su Miktarı',
          vAxis: {title: 'Çekilen Su Miktarı'},
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