function showFiveStar(d){
    arr = d.rate_arr;
    //console.log(arr);
    Highcharts.chart('fivestar_container', {

        chart: {
            polar: true,
            type: 'area',
            backgroundColor: '#f9f9f9'
        },
        
        title: {
            text: 'Rating of [ '+ d.name+ " ] in 5 stars",
            x: 0
        },
        
        pane: {
            size: '80%'
        },
        
        xAxis: {
            categories: ['1 star', '2 star', '3 star', '4 star',
                '5 star'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },
        
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },
        
        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },
        
        legend: {
            enabled: false
        },
        
        series: [{
            name: 'User Rating Number',
            data: arr,
            pointPlacement: 'on'
        }],
        
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'horizontal'
                    },
                    pane: {
                        size: '70%'
                    }
                }
            }]
        }
        
    });
}