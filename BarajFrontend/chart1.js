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




