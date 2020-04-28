var dom = document.getElementById("demooverview_container");
var myChart = echarts.init(dom);
var app = {};
option = null;
arr=[147,3020,10337,24942,29031,41358,35711,17762,6560];
var MAX = Math.max.apply(null, arr);

var builderJson = {
  "charts": {
    "0-2": arr[0],
    "3-18": arr[1],
    "19-24": arr[2],
    "25-34": arr[3],
    "35-44": arr[4],
    "45-54": arr[5],
    "55-64": arr[6],
    "65-74": arr[7],
    "75 or over": arr[8]
  }
};

var downloadJson = {
  "Female": 118706,
  "Male": 50162
};

var waterMarkText = 'ECHARTS';

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = canvas.height = 100;
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.globalAlpha = 0.08;
ctx.font = '20px Microsoft Yahei';
ctx.translate(50, 50);
ctx.rotate(-Math.PI / 4);
ctx.fillText(waterMarkText, 0, 0);

option = {
    tooltip: {},
    title: [{
        text: 'Age group',
        left: '25%',
        textAlign: 'center'
    }, {
        text: 'Gender',
        left: '75%',
        textAlign: 'center'
    }],
    grid: [{
        top: 50,
        width: '50%',
        bottom: '45%',
        left: 10,
        containLabel: true
    }],
    xAxis: [{
        type: 'value',
        max: MAX,
        splitLine: {
            show: false
        }
    }],
    yAxis: [{
        type: 'category',
        data: Object.keys(builderJson.charts),
        axisLabel: {
            interval: 0,
            rotate: 30
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
        type: 'bar',
        stack: 'chart',
        z: 3,
        label: {
            normal: {
                position: 'right',
                show: true
            }
        },
        data: Object.keys(builderJson.charts).map(function (key) {
            return builderJson.charts[key];
        })
    }, {
        type: 'bar',
        stack: 'chart',
        silent: true,
        itemStyle: {
            normal: {
                color: '#eee'
            }
        },
        data: Object.keys(builderJson.charts).map(function (key) {
            return builderJson.all - builderJson.charts[key];
        })
    }, {
        type: 'pie',
        radius: [0, '30%'],
        center: ['75%', '25%'],
        data: Object.keys(downloadJson).map(function (key) {
            return {
                name: key.replace('.js', ''),
                value: downloadJson[key]
            }
        })
    }]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}