# @beanutils/common
common js lib

## Install
```
npm install --save @beanutils/common
```

## Usage
```
import { isEmpty } from '@beanutils/common';
isEmpty(xxx);
```
```
// 判断是否为Array类型
export function isArray(obj) 
// 判断是否为String类型
export function isString(obj) 
// 判断是否为Date类型
export function isDate(obj) 
// 判断是否为Object类型
export function isObject(obj) 
// 判断是否为Number类型
export function isNumber(obj) 
// 判断是否为forma数据
export function isFormData(obj)
// 判断是否为IE浏览器
export function isIE()
// 判断是否为空对象, 包括null, undefined, NaN, '', [], {}
export function isEmpty(obj) 
// 判断是否不为空对象
export function isNotEmpty(obj) 
// 判断是否为空字符串, 包括只有空格的情况
export function isBlank(str) 
// 判断是否不为空字符串
export function isNotBlank(obj) 