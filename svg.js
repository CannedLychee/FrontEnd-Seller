function draw(main,obj) {
	const svgurl="http://www.w3.org/2000/svg"
	let data = obj.data
	let name = obj.name
	// let main = document.getElementById('main')
	//坐标轴组
	let Axises = document.createElementNS(svgurl,"g")

	let maxval = Math.ceil(Math.max(...data)/50)+1
	let maxkey = data.length

	let pxAxis = 50, pyAxis = 50	//坐标轴定位
	let lxAxis = 50*(maxkey+1), lyAxis = 50*(maxval+1)	//坐标轴宽高
	main.setAttribute("width",100+lxAxis)
	main.setAttribute('height',100+lyAxis)
	main.appendChild(Axises)
	//横纵坐标轴折线
	let line = document.createElementNS(svgurl,"polyline")
	line.setAttribute("points", setxy(pxAxis,pyAxis)+setxy(pxAxis,lyAxis+pyAxis)+setxy(lxAxis+pxAxis,lyAxis+pyAxis))
	line.setAttribute("style", "fill:transparent;stroke:#444444;stroke-width:2px")
	Axises.appendChild(line)
	//箭头
	let warrow = 3	//箭头半宽
	let harrow = 6	//箭头高
	//y轴箭头
	let yarrow = document.createElementNS(svgurl,"polyline")
	yarrow.setAttribute("points",setxy(pxAxis-warrow,pyAxis+harrow)+setxy(pxAxis,pyAxis)+setxy(pxAxis+warrow,pyAxis+harrow))
	yarrow.setAttribute("style", "fill:transparent;stroke:#444444;stroke-width:2px")
	Axises.appendChild(yarrow)
	//x轴箭头
	let xarrow = document.createElementNS(svgurl,"polyline")
	xarrow.setAttribute("points",setxy(lxAxis+pxAxis-harrow,lyAxis+pyAxis+warrow)+setxy(lxAxis+pxAxis,lyAxis+pyAxis)+setxy(lxAxis+pxAxis-harrow,lyAxis+pyAxis-warrow))
	xarrow.setAttribute("style", "fill:transparent;stroke:#444444;stroke-width:2px")
	Axises.appendChild(xarrow)

	//y轴坐标刻度
	for (let i=1;i<=maxval;i++) {
		//刻度
		let scale = document.createElementNS(svgurl,"line")
		scale.setAttribute("x1",pxAxis)
		scale.setAttribute("y1",pyAxis+lyAxis-50*i)
		scale.setAttribute("x2",pxAxis+5)
		scale.setAttribute("y2",pyAxis+lyAxis-50*i)
		scale.setAttribute("style", "stroke:#444444;stroke-width:2px")
		Axises.appendChild(scale)
		//数字
		let text = document.createElementNS(svgurl,"text")
		text.setAttribute("x",pxAxis-10)
		text.setAttribute("y",pyAxis+lyAxis-50*i+5)
		text.innerHTML = 50*i
		text.setAttribute("style","font-size:20px;text-anchor:end;")
		Axises.appendChild(text)
	}

	// let data = [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]

	let vline = document.createElementNS(svgurl,"polyline")
	let vline_points = ""

	for (let i=0;i<maxkey;i++) {
		//值
		let num = document.createElementNS(svgurl,"text")
		num.setAttribute("x",pxAxis + 50*i + 30)
		num.setAttribute("y",pyAxis + lyAxis - data[i]-10)
		num.setAttribute("style","font-size:15px;text-anchor:middle;transition-duration:0.4s;opacity:0")
		num.innerHTML = data[i]
		main.appendChild(num)
		//柱形
		let column = document.createElementNS(svgurl,"rect")
		column.setAttribute("x",pxAxis + 50*i + 10)
		column.setAttribute("y",pyAxis + lyAxis - data[i])
		column.setAttribute("width",40)
		column.setAttribute("height",data[i])
		column.setAttribute("style","fill:#666666;stroke-width:2px;stroke:#444444;opacity:0.4;transition-duration:0.4s;")
		column.onmouseover = function() {
			column.style.opacity = 0.6
			num.style.opacity = 1
		}
		column.onmouseout = function() {
			column.style.opacity = 0.4
			num.style.opacity = 0
		}
		main.appendChild(column)

		vline_points += setxy(pxAxis+50*i+30,pyAxis+lyAxis-data[i])
		
		let c = document.createElementNS(svgurl,"circle")
		c.setAttribute("cx",pxAxis+50*i+30)
		c.setAttribute("cy",pyAxis+lyAxis-data[i])
		c.setAttribute("r",7)
		c.setAttribute("style","fill:#000044;opacity:0.7")
		main.appendChild(c)

		//x轴坐标
		let txt = document.createElementNS(svgurl,"text")
		txt.setAttribute("x",pxAxis + 50*i + 30)
		txt.setAttribute("y",pyAxis + lyAxis + 20)
		txt.setAttribute("style","font-size:18px;text-anchor:middle;")
		txt.innerHTML = name[i]
		main.appendChild(txt)
	}
	vline.setAttribute("points",vline_points)
	vline.setAttribute("style","fill:transparent;stroke:#444444;stroke-width:2px")
	main.appendChild(vline)

	function setxy(x,y) {
		let r = ''
		r = (x+','+y+' ')
		return r
	}
}
