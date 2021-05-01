//chart1
pie_UsageRate = [

]

  $.get("http://127.0.0.1:8000/api/usageRate/", function(data, status){
    data.forEach(element => {
      pie_UsageRate.push(Object.values(element))
    });
  });

  
  

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows(pie_UsageRate);

    var options = {
        'title': 'Su Kullanım Oranları',
        'width': 400,
        'height': 300,
        chartArea:{height:'100%', width:'100%'},
        backgroundColor: 'transparent',
        is3D: true
    };

    var chart = new google.visualization.PieChart(document.getElementById('chart1_div'));
    chart.draw(data, options);
}
// MODIFYING FOR WATER PER CAPITA
waterPerCapita = []
var  temp = []
var year= 2000
while(year <=2018){  
  
 
  
  if (year<2004)
    {
      year+=1
    temp.push(year)
    }
  else{
    temp.push(year)
    year+=2  
  }
  
  
    
}
var ABC = []
temp.forEach(year => {
  var x = []
  
  $.get({url: "http://127.0.0.1:8000/api/waterPerCapita/?_year=".concat(year),async:false}, function(data, status){
   

     x.push(year)
     data.forEach(element => {
       var el = Object.values(element)

       x.push(el[3])
     })
     console.log(x)
     ABC.push(x)
});
  
  x =[]
});

console.log("ABC" ,ABC)

// WATER PER CAPITA

      google.charts.load('current', {'packages':['line']});
      google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Year');
      data.addColumn('number', 'İstanbul');
      data.addColumn('number', 'Ankara');
      data.addColumn('number', 'İzmir');

      data.addRows(ABC);

      var options = {
        chart: {
          title: 'FSDAUFUIAS',
          subtitle: 'in millions of dollars (USD)'
        },
        width: 600,
        height: 400
      };

      var chart = new google.charts.Line(document.getElementById('waterPerCapita'));

      chart.draw(data, google.charts.Line.convertOptions(options));
    }




    
//chart3
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart2);

      function drawChart2() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ]);

        var options = {
          title: 'Company Performance',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart3 = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart3.draw(data, options);
      }

//chart4
google.charts.load('current', {'packages':['line']});
      google.charts.setOnLoadCallback(drawChart4);

    function drawChart4() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Day');
      data.addColumn('number', 'Guardians of the Galaxy');
      data.addColumn('number', 'The Avengers');
      data.addColumn('number', 'Transformers: Age of Extinction');

      data.addRows([
        [1,  37.8, 80.8, 41.8],
        [2,  30.9, 69.5, 32.4],
        [3,  25.4,   57, 25.7],
        [4,  11.7, 18.8, 10.5],
        [5,  11.9, 17.6, 10.4],
        [6,   8.8, 13.6,  7.7],
        [7,   7.6, 12.3,  9.6],
        [8,  12.3, 29.2, 10.6],
        [9,  16.9, 42.9, 14.8],
        [10, 12.8, 30.9, 11.6],
        [11,  5.3,  7.9,  4.7],
        [12,  6.6,  8.4,  5.2],
        [13,  4.8,  6.3,  3.6],
        [14,  4.2,  6.2,  3.4]
      ]);

      var options = {
        chart: {
          title: 'Box Office Earnings in First Two Weeks of Opening',
          subtitle: 'in millions of dollars (USD)'
        },
        width: 900,
        height: 500
      };

      var chart4 = new google.charts.Line(document.getElementById('linechart_material'));

      chart4.draw(data, google.charts.Line.convertOptions(options));
    }        
