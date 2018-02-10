# res-http-output

[![npm](https://img.shields.io/badge/Licence-GPL--3.0-blue.svg)](https://choosealicense.com/licenses/gpl-3.0/)

```bash

$ npm install res-http-output

```

## 说明

* 本方法返回格式content-Type永远是application/json
* 通过message返回指定的内容

## 使用

```js

const resOutput=require('res-http-output');
 
resOutput.init(res, status, message, data)
//如果第三参数为object，且无第四参数，就认为第三参数是data
//正常调用 res 为nodejs中的response
resOutput.init(res,resOut.AllStatus.e500);

```
### status
* AllStatus 近乎所有的http状态码
* BaseStatus 基本常用的http状态码
* CustomStatus 自定义状态码，必须大于600

## 参数说明
* res:<response>对像，用于输出，必填。
* status:<array>[2]状态对像 0 对应状态码  1提供提示信息 
* message:<string>用于传递提示信息，可不提供
* data:<object>用于输出JSON内容，可不提供

## 输出

```js

{
    "message":"Internal Server Error"
}

```
