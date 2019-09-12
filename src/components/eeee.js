<script>
  //初始化方法
  function widget_month_init() {
  //获取元素组件
  var myChart = echarts.init(document.getElementById('widget_month'));
  var option = {
  "title": {
  "text": "月份统计",
  "x": "center"
    },
  "tooltip": {
  "trigger": "axis",
  "axisPointer": {
  "type": "shadow",
  textStyle: {
  color: "#fff"
}
}
},
  "grid": {
  "borderWidth": 0,
  "top": 90,
  "bottom": 95,
  textStyle: {
  color: "#fff"
}
},
  "legend": {
  x: '4%',
  top: '8%',
  textStyle: {
  color: '#fff',
},
  "data": ['发视频人数', "视频数"]
},
  "calculable": true,
  "xAxis": [{
  "type": "category",
  "axisLine": {
  lineStyle: {
  color: '#bbb'
}
},
  "splitLine": {
  "show": false
},
  "axisTick": {
  "show": false
},
  "splitArea": {
  "show": false
},
  "axisLabel": {
  "interval": 0,
  rotate: 40

},
  "data": [],
}],
  "yAxis": [{
  "type": "value",
  "splitLine": {
  "show": false
},
  "axisLine": {
  lineStyle: {
  color: '#bbb'
}
},
  "axisTick": {
  "show": false
},
  "axisLabel": {
  "interval": 0,

},
  "splitArea": {
  "show": false
}
}],
  "series": []
}
  myChart.setOption(option, true);
}

  //渲染方法
  function widget_month_render(data) {
  //获取元素组件
  var myChart = echarts.init(document.getElementById('widget_month'));
  //获取数据
  //所有年月
  var allUserMonth = [];
  //每个月发视频人数
  var cntAllUser = [];
  //每个月发的视频数量
  var cntAllContent = [];

  var eachData;
  if (data && data.data && data.data.data && data.data.data.rows) {
  var myData = data.data.data.rows;
  for (var index in myData) {
  eachData = myData[index];
  allUserMonth.push(eachData.all_user_month);
  cntAllUser.push(eachData.cnt_all_user);
  cntAllContent.push(eachData.cnt_all_content);
}
}

  var option = {
  "title": {
  "text": "月份统计",
  "x": "center"
},
  "tooltip": {
  "trigger": "axis"
},
  "grid": {
  "borderWidth": 0,
  "top": 90,
  "bottom": 95,
  textStyle: {
  color: "#daa520"
}
},
  "legend": {
  x: '4%',
  top: '8%',
  textStyle: {
  color: '#90979c',
},
  "data": ['发视频人数', '视频数']
},
  "calculable": true,
  "xAxis": [{
  "type": "category",
  "axisLine": {
  lineStyle: {
  color: '#bbb',
  width: 1,
  type: 'solid'
}
},
  "splitLine": {
  "show": false
},
  "axisTick": {
  "show": false
},
  "splitArea": {
  "show": false
},
  "axisLabel": {
  "interval": 0,
  rotate: 40

},
  "data": allUserMonth,
}],
  "yAxis": [{
  "type": "value",
  "splitLine": {
  "show": false
},
  "axisLine": {
  lineStyle: {
  color: '#bbb',
  width: 1,
  type: 'solid'
}
},
  "axisTick": {
  "show": false
},
  "axisLabel": {
  "interval": 0,

},
  "splitArea": {
  "show": false
},

}],
  "series": [

{
  "name": "发视频人数",
  "type": "line",
  lineStyle: {
  color: {
  type: 'linear',
  x: 0,
  y: 0,
  x2: 0,
  y2: 1,
  colorStops: [
{
  offset: 0,
  color: '#00F2B1' // 0% 处的颜色
},
{
  offset: 1,
  color: '#00F2B1' // 100% 处的颜色
}],
  globalCoord: false
},
  width: 1,
  type: "solid",
},
  itemStyle: {
  color: "#00E5DE",
  formatter: function (p) {
  return p.value > 0 ? (p.value) : '';
}
},
  "data": cntAllUser,
},
{
  "name": "视频数",
  "type": "line",
  lineStyle: {
  color: {
  type: 'linear',
  x: 0,
  y: 0,
  x2: 0,
  y2: 1,
  colorStops: [
{
  offset: 0,
  color: '#FF3E96' // 0% 处的颜色
},
{
  offset: 1,
  color: '#FF3E96' // 100% 处的颜色
}],
  globalCoord: false
},
  width: 1,
  type: "solid",
},
  itemStyle: {
  color: "#FF3E96",
  formatter: function (p) {
  return p.value > 0 ? (p.value) : '';
}
},
  "data": cntAllContent,
}
  ]
}
  myChart.setOption(option, true);
}

</script>
