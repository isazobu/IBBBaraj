
  chart_forecastData = []
  
  $.get("/api/forecastData/", function(data, status){
    data.forEach(element => {
      var el = Object.values(element)
      el.shift()
      el[0] = new Date(el[0])
      chart_forecastData.push(el)
    });
  });


  
  

google.charts.load('current', {'packages':['annotationchart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var values = new google.visualization.DataTable();
  values.addColumn('date', 'Date');
  values.addColumn('number', 'Gercek Doluluk Oranı');
  
  
  values.addColumn('number', 'Tahmin Edilen Doluluk Oranı');
  
  
  values.addRows(
    chart_forecastData
  );

  var chart = new google.visualization.AnnotationChart(document.getElementById('main_div'));

  var options = {
    displayAnnotations: false,
    backgroundColor: { fill:'transparent' }
    
  };

  chart.draw(values, options);
}