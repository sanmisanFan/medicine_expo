function showTopics(d){
    //topic_arr = d.topics;
    //console.log(topic_arr);
    Highcharts.chart('topicModel_container', {
        chart: {
            type: 'packedbubble',
            height: '500px',
            backgroundColor: '#f9f9f9'
        },
        title: {
            text: 'Topic Distributions'
        },
        tooltip: {
            useHTML: true,
            pointFormat: '<b>{point.name}:</b> {point.value} Weight'
        },
        plotOptions: {
            series: {
                animation: false,
                draggable: false
            },
            packedbubble: {
                minSize: '20%',
                maxSize: '100%',
                zMin: 0,
                zMax: 10,
                layoutAlgorithm: {
                    gravitationalConstant: 0.05,
                    splitSeries: true,
                    seriesInteraction: false,
                    dragBetweenSeries: false,
                    parentNodeLimit: true
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.name}',
                    style: {
                        color: 'black',
                        textOutline: 'none',
                        fontWeight: 'normal'
                    }
                }
            }
        },
        series: d.topics
    });
}