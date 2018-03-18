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
* 将Unix时间戳所有数字相加，放置于最后一位
* 第二位不能和第一位相等，第三位不能和第二位相等，依次类推，只有最后两个相邻有可能相等

## 使用

```js

const complexCode=require('complex-code');
//如果只有一个参数时，并且为true，则代表使用Unix时间戳构成大小写字母加数字
var code_1=complexCode.code(true);
//如果有两位参数,第一位number类型，代表长度，第二位代表参数，string类型，num：全为数字，string：全为大小写字母，all：三者混合 此种方法有可能有重复值
var code_2=complexCode.code(10,"num");
var code_3=complexCode.code(10,"string");
var code_4=complexCode.code(10,"all");

```
## 输出

```bash

$ FHzMzHz4SzTX
$ 2347316389
$ JBypcoXjPu
$ ERidFdE1Fu

```
