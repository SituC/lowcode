export const form = {
	formTitle: "用车申请", // 当前表单名
	formParams: "carApply",
	formFields: [
		// 一条代表一行的所有控件通过（row col）去拆分位置
		[
			{
				// input 类型 
				"colSpan": 6, // col span为12，以24来算，也就是当前input占一行的一半
				"label": "同行人数", // 字段标题
				"key": "personNum", // 接口字段名
				"type": "number", // �字段值类型
				"description": "", //�字段描述
				"value": "", // 具体的值
				"x-component": "el-input", // 字段的 UI 组件名
				"x-component-props": { // �字段 UI 组件的属性
					"type": "text", // el-input的类型
					"size": "small", // el-input的size大小
					"placeholder": "请输入同行人数" // el-input的placeholder
				},
				"x-props": { // 字段的扩展属性
					"style": { // �字段的 UI 组件的 style 样式
						"margin": "7px 5px",
						"color": "#333333"
					},
					"className": "my-input", // 字段的 UI 组件的 style 样式
				},
				"disabled": false, //�是否可编辑
				"events": {}, // UI 组件的事件
			},
		],
		[
			// select 类型
			{
				"colSpan": 12,
				"label": "选择车辆", // 字段标题
				"key": "carType", // 接口字段名
				"type": "number", // �字段值类型
				"options": [], // 装填通过optionsUrl返回的数据
				"description": "选择车辆选择框", //�字段描述
				"value": "", // 字段值
				"x-component": "el-select", // 字段的 UI 组件名
				"x-component-props": { // �字段 UI 组件的属性
					"placeholder": "请选择车辆"
				},
				"x-props": { // 字段的扩展属性
					"style": { // �字段的 UI 组件的 style 样式
						"margin": "7px 5px",
						"color": "#333333"
					},
					"className": "my-select", // 字段的 UI 组件的 style 样式
					"optionsUrl": "http://xxxxx.com/getCarOptions", //�获取枚举数据或者 UI 组件数据的接口地址
				},
				"editable": true, //�是否可编辑
				"events": {}, // UI 组件的事件
			},
		],
		[
			{
				// 图片上传
				"colSpan": 12, // col span为12，以24来算，也就是当前input占一行的一半
				"label": "上传图片", // 字段标题
				"key": "imageUrls", // 接口字段名
				"type": "array", // �字段值类型
				"description": "", //�字段描述
				"value": ["http://xxxxx.com/xxx.png"], // 具体的值
				"x-component": "el-upload", // 字段的 UI 组件名
				"x-component-props": {
					"accept": ["jpeg", 'png', 'jpg'],
					"maxFileSize": "2", // 单位mb，最大支持上传
					"limit": 9,
				},
				"x-props": { // 字段的扩展属性
					"style": { // �字段的 UI 组件的 style 样式
						"margin": "7px 5px",
						"color": "#333333"
					},
					"className": "my-upload", // 字段的 UI 组件的 style 样式
					"uploadUrl": "http://xxxxx.com/uploadFile",
				},
				"editable": true, //�是否可编辑
				"events": {}, // UI 组件的事件
			},
		],
		[
			{
				// button
				"colSpan": 1, // col span为12，以24来算，也就是当前input占一行的一半
				"label": "", // 字段标题
				"key": "", // 接口字段名
				"type": "", // �字段值类型
				"description": "", //�字段描述
				"value": "", // 具体的值
				"x-component": "el-button", // 字段的 UI 组件名
				"x-component-props": { // �字段 UI 组件的属性
					"type": "",
					"size": "small",
					"plain": true,
					"circle": false,
					"loading": false,
				},
				"x-props": { // 字段的扩展属性
					"style": { // �字段的 UI 组件的 style 样式
						"margin": "7px 5px",
						"color": "#333333"
					},
					"label": "取消",
					"className": "my-button", // 字段的 UI 组件的 style 样式
					"buttonType": "click", // 按钮的操作类型， cancel or click
					"buttonClickUrl": "http://xxxxx.com/submit", // 点击按钮的接口地址
					"buttonClickFnName": "handleSubmit", // 点击按钮的方法名称
				},
				"editable": true, //�是否可编辑
				"events": {}, // UI 组件的事件
			},
			{
				// button
				"colSpan": 1, // col span为12，以24来算，也就是当前input占一行的一半
				"label": "", // 字段标题
				"key": "", // 接口字段名
				"type": "", // �字段值类型
				"description": "", //�字段描述
				"value": "", // 具体的值
				"x-component": "el-button", // 字段的 UI 组件名
				"x-component-props": { // �字段 UI 组件的属性
					"type": "primary",
					"size": "small",
					"plain": false,
					"circle": false,
					"loading": false,
				},
				"x-props": { // 字段的扩展属性
					"style": { // �字段的 UI 组件的 style 样式
						"margin": "7px 5px",
						"color": "#333333"
					},
					"label": "提交",
					"className": "my-button", // 字段的 UI 组件的 style 样式
					"buttonType": "click", // 按钮的操作类型， cancel or click
					"buttonClickUrl": "http://xxxxx.com/submit", // 点击按钮的接口地址
					"buttonClickFnName": "handleSubmit", // 点击按钮的方法名称
				},
				"editable": true, //�是否可编辑
				"events": {}, // UI 组件的事件
			},
		],
	],
	formRules: { // 表单验证规则，内容前端创建页面模板生成
		personNum: [
			{ required: true, message: '请输入用车人人数', trigger: 'blur' },
			{ min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
		],
	},
}

export const options = [
	{ label: '跑车', value: 1 },
	{ label: '轿车', value: 2 },
	{ label: '火车', value: 3 },
]