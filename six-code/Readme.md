# six-code

[![npm](https://img.shields.io/badge/Licence-GPL--3.0-blue.svg)](https://www.npmjs.com/package/six-code)

```bash

$ npm install six-code

```

## 说明

* 将Unix时间戳所有数字相加，放置于后两位
* 前四位为随机数，第二位不能和第一位相等，第三位不能和第二位相等，依次类推，只有前四个相邻的不能相等

## 使用

```js

const sixCode=require('six-code');
 
var code=sixCode.code();

```
## 输出

```bash

$ 045254

```
