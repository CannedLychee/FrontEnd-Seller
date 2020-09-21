**html自定义属性： 使用dataset**

```html
<xxx data-属性名=属性值>aaa</xxx>
<script>
	let xxx = blabla
	console.log(xxx.dataset.属性名)	//输出属性名
</script>
```

**给table添加innerHTML时**

	如果直接写table.innerHTML += xxx将会自动带上<tbody><tr>前缀与</tr></tbody>后缀