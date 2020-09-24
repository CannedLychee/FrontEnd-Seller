```html
	<canvas id="xxx">
		<!-- 支持canvas的浏览器将不会渲染容器中包含的内容而只正常渲染canvas，不支持的浏览器会渲染容器中的的后备内容 -->
	</canvas>
```

```javaScript
	let canvas = document.getElementById('xxx')
	let ctx = canvas.getContext('2d')//获得2d上下文
	ctx.fillStyle(颜色) //绘制样式
	ctx.fillRect(x,y,width,height) //绘制填充的矩形
	ctx.strokeRect(x,y,width,height) //绘制矩形边框
	ctx.clearRect(x,y,width,height) //清除指定矩形区域，清除后透明
```

```javaScript
	//路径：
	beginPath() 	//新建路径
	closePath()		//闭合路径（非必须）会绘制从当前点到开始点的直线来闭合路径，调用fill()时会自动闭合当前路径，而调用stroke()不会
	stroke()		//通过线条绘制图形轮廓
	fill()			//填充路径内容区域
	
	//直线
	moveTo(x,y)		//移动笔触，不绘制任何内容,常用来设置起点
	lineTo(x,y)		//绘制直线，xy为直线结束的点，直线开始点为当前路径的结束点

	//圆弧
	arc(x,y,radius,startAngle,endAngle,anticlockwise)	//绘制圆弧，xy圆心，radius半径，两个angle为开始/结束的弧度 anticlockwise为bool值，为真时逆时针方向，为假时顺时针方向
	//角弧度转换：弧度=(Math.PI/180)*角度
	arcTo(x1,y1,x2,y2,radius)	//给定控制点画圆弧再以直线连接两个控制点

	//贝塞尔曲线
	quadraticCurveTo(cp1x,cp1y,x,y)	//二次贝塞尔曲线cp1x/y为控制点，xy为结束点
	bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y)	//三次贝塞尔曲线，控制点两个，结束点xy
```
```javaScript
	//使用Path2D对象保存Path
	let ctx = canvas.getContext('2d')
	let rectangle1 = new Path2D()
	rectangle1.rect(10,10,50,50)	//将矩形path保存在rectangle1中
	let circle1 = new Path2D()
	circle1.arc(100,35,0,2*Math.PI)	//将圆形path保存在circle1中

	ctx.stroke(circle1)		//绘制圆形边框
	ctx.fill(rectangle1)	//绘制矩形填充
```
```javaScript
	//使用SVG path初始化canvas路径，如
	let p = new Path2D("M10,10 h 80 v 80 -h 80 Z")
```
```javaScript
	//颜色（设置后均将把该颜色设为默认颜色） 默认时线条和填充颜色均为黑色
	fillStyle = "颜色"
	strokeStyle = "颜色” 
	//透明度1 在颜色中设置 如#111111aa rbg(0,0,0,0.6)
	//透明度2 全局canvas生效，在具体绘制时不够灵活
	globalAlpha = 0.8
```