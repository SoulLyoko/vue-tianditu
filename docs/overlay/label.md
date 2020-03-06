# 文本标注

## 示例

<<< @/docs/.vuepress/components/ex-label.vue
<ex-label></ex-label>

## 属性

| 属性            | 类型   | 默认值 | 说明                   |
| --------------- | ------ | ------ | ---------------------- |
| text            | String | ""     | 文本标注的内容。       |
| offset          | Array  | [0,0]  | 文本标注的位置偏移值。 |
| position        | Array  | [0,0]  | 文本标注的地理位置。   |
| title           | String |        | 文本的提示内容。       |
| zindex          | Number |        | z-index。              |
| fontSize        | Number |        | 文本的字体大小。       |
| fontColor       | String |        | 文本的字体颜色。       |
| backgroundColor | String |        | 文本的背景颜色。       |
| borderLine      | Number |        | 文本的边框线宽。       |
| borderColor     | String |        | 文本的边框颜色         |
| opacity         | Number |        | 文本的显示不透明度。   |
| extData         |        |        | 自定义属性             |

## 事件

| 事件      | 参数                                        | 描述                             |
| --------- | ------------------------------------------- | -------------------------------- |
| click     | {type,target,lnglat,containerPoint,extData} | 点击文本标注后会触发此事件。     |
| dblclick  | {type,target,lnglat,containerPoint,extData} | 双击文本标注后会触发此事件。     |
| mousedown | {type,target,lnglat,containerPoint,extData} | 鼠标在文本标注上按下触发此事件。 |
| mouseup   | {type,target,lnglat,containerPoint,extData} | 鼠标在文本标注释放触发此事件。   |
| mouseout  | {type,target,lnglat,containerPoint,extData} | 鼠标离开文本标注时触发此事件。   |
