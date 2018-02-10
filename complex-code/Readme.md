# complex-code

[![npm](https://img.shields.io/badge/Licence-GPL--3.0-blue.svg)](https://choosealicense.com/licenses/gpl-3.0/)

```bash

$ npm install complex-code

```

## 说明

* 使用Unix时间戳毫秒来处理，基本保证了唯一性
* 每毫秒如果数据量处理过大时，无法保证唯一性
* 基本构成为：Unix时间戳每两位构成一个数字，大于61的将减去61，剩余与61并列放入，最后一个值为随机数(0-61)
* 因为Unix时间戳过长，导致生成的随机码过于长，最大有可能达到9位
* 61个值，分别为0-9，a-z，A-Z组成

## 使用

```js

const complexCode=require('complex-code');
 
var code=complexCode.code();

```
## 输出

```bash

$ FHzMzHz4SzTX

```
