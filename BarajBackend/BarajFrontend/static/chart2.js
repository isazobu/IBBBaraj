
// MODIFYING FOR WATER PER CAPITA
waterPerCapita = []
var  chartYears = []
var year= 2000
while(year <=2018){  
 if (year<2004)
    {
      year+=1
    chartYears.push(year)
    }
  else{
    chartYears.push(year)
    year+=2  
  }
  
}

  var chart2Data_NotModified = []
  
  $.get({url: "/api/waterPerCapita" ,async:false}, function(data, status){
   

     data.forEach(element => {
       var el = Object.values(element)

       chart2Data_NotModified.push(el)
     })
    //console.log(chart2Data_NotModified)
   

});

var chart2_data = []

chartYears.forEach(year => {
  var A= []
  var B = chart2Data_NotModified.filter(el=>el[1] == year)
  
  A.push(year)
  B.forEach(byCity =>  {
      A.push(byCity[3])
  } )
  chart2_data.push(A)
  A=[]
  B= []
})

console.log("X", chart2_data)


// WATER PER CAPITA

      google.charts.load('current', {'packages':['line']});
      google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Yil');
      data.addColumn('number', 'İstanbul');
      data.addColumn('number', 'Ankara');
      data.addColumn('number', 'İzmir');
      data.addColumn('number', 'Türkiye');

      data.addRows(chart2_data);

      var options = {
        chart: {
          title: 'Ortalama Su Tüketim Oranı',
          subtitle: 'Litre/Kişi -  Gün'
        },
        width: 600,
        height: 400
      };

      var chart = new google.charts.Line(document.getElementById('waterPerCapita'));

      chart.draw(data, google.charts.Line.convertOptions(options));
    }




    