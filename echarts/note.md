svg笔记

-
		style:
		填充：fill
		边框：填充stroke 宽度stroke-width
		透明度：填充透明度fill-opacity 边框透明度stroke-opacity
-
		矩形 rect:
		坐标：x/y 类似margin
		宽高：width/height
-
		圆 circle:
		圆心坐标：cx/cy 默认0,0
		半径：r
-
		椭圆 ellipse:
		原点坐标：cx/cy
		半径坐标：rx/ry
-
		直线 line:
		开始坐标：x1/y1
		结束坐标：x2/y2
-
		多边形 polygon:
		顶点：points
		格式：exp: points:"220,100 300,210 170,250"
-
		折线 polyline：
		顶点 points
		格式同多边形
-
		路径 path
		M moveto
		L lineto
		H horizontal lineto
		V vertical lineto
		C curveto
		S smooth curveto
		Q quadratic Beizier curve
		T smooth quadratic Beizier curveto
		A elliptical Arc
		Z closepath
		由于路径的复杂性 建议使用svg编辑器编辑

html中插入svg的三种标签：
```html
<embed src="example.svg" width="300" height="100" type="image/svg+xml" pluginspage="http://www.adobe.com/svg/viewer/install" />
<object data="example.svg" width="3000" height="1000" type="image/svg+xml" codebase="http://www.adobe.com/svg/viewer/install/" />
<iframe src="example.svg" width="300" height="100" ></iframe>
```

echarts:

目前可用cdn：
```html
<script src="https://cdn.staticfile.org/echarts/4.3.0/echarts.min.js"></script>
```
配置语法

1 引入echarts.js/echarts.min.js
```html
<script src="./echarts.js"></script>
```
2 准备具备高宽数据的DOM
```html
<body>
	<div id='main' style="width:600px;height:400px">
	</div>
</body>
```
3 设置配置信息
```javaScript
echarts.init(document.getElementById('main')).setOption(option)
```
4 其中option表示json格式的配置数据
	
标题
```javaScript
title: {
	orient:'vertical/horizontal',//布局方式，默认垂直布局
	x:'left/center/right/{number}',//水平安放位置，默认全图左对齐，y坐标 单位px
	y:'top/bottom/center/{number}',//垂直安放位置，默认全图顶部，x坐标 单位px
	backgroundColor:'',//背景色
	borderColor:'',//边框颜色
	borderWidth:0,//边框线宽
	padding:5,//padding，单位px
	itemGap:10,//各item之间的间隔，单位px
	itemWidth: 20,//图例图形宽度
	itemHeight: 14,//图例图形高度
	textStyle: {
		color:'red'
	}//标题样式
	text:'标题'
}
```
提示信息
```javaScript
tooltip: {}
```
值域
```javaScript
dataRange: {
	orient:'vertical/horizontal',
	x:'left/center/right/{number}',
	y:'top/bottom/center/{number}',
	backgroundColor:'',
	borderColor:'',
	borderWidth:0,
	padding: 5,//上右下左
	itemGap: 10,
	itemWidth: 20,
	itemHeight: 14,
	splitNumber: 5,//分割段数，默认5
	color:['#','#'],//颜色
	textStyle: {
		color:'red'
	}//文本样式
}
```
图例组件
```javaScript
legend: {
	data: [{
		name: '图例名',
		icon: 'circle',
		//强制设置图形为圆
		textStyle: {
			color: 'red'
		}
		//文本style
	}]
}
```
x轴 配置x轴显示项
```javaScript
xAxis: {
	data: ['A','B',...]
}
```
y轴 配置y轴显示项
```javaScript
yAxis: {}
```
系列列表
```javaScript
series: [{
	name: '',
	//系列名称
	type: '',
	//系列图表类型
	data: [1,2,3,...]
	//系列中的数据内容
}]
```
系列类型：type: 'xxx'

	bar 			柱状图
	line			折线图
	pie				饼图
	scatter			散点图
	effectScatter	带涟漪特效动画的散点图
	radar			雷达图
	tree			树形图
	treemap			树形图
	sunbrust		旭日图
	boxplot			箱型图
	candlestick		k线图
	heatmap			热力图
	map				地图
	parallel		平行坐标系的系列
	lines			线图
	graph			关系图
	sanky			桑基图
	funnel			漏斗图
	gauge			仪表图
	pictoriaBar		象形柱图
	themeRiver		主题河流
	custom			自定义系列
