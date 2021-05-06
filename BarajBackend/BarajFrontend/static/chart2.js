
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
  
  $.get({url: "/api/waterPerCapita/?_year=".concat(year),async:false}, function(data, status){
   

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




    