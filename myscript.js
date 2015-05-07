$(function () {
    $(document).ready(function () {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        $('#container').highcharts({
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
					load: onChartLoad
                }
            },
            title: {
                text: 'Live data'
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: 'Value'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Sent',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;
                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: 0
                        });
                    }
                    return data;
                }())
            },
			{
                name: 'Acknowledged',
				data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;
                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: 0
                        });
						
                    }
                    return data;
                }())
            }]
        });
    });
});

var myData = [0];

function onChartLoad () {
     // set up the updating of the chart each second
	var series1 = this.series[0], 
		series2 = this.series[1];
	setInterval(function () {
		if(testInProcess) {
			var x = (new Date()).getTime(), // current time
				y = Math.random();
				series1.addPoint([x, y], false, true);
//				y = Math.random();
			series2.addPoint([x, myData[myData.length - 1]], true, true);		
		}
	}, 500);

}

(function loop() {
    var rand = Math.round(Math.random() *1000) + 500;
    setTimeout(function() {
				myData.push(Math.random());
//				console.log(myData[myData.length - 1]);
				loop();  
    }, rand);
}());	

