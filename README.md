# @beanutils/common
common js lib

## Install
```
npm install --save @beanutils/common
```

## Usage
```
import { isArray, isEmpty, isBlank } from '@beanutils/common';

isEmpty(null);          // true
isEmpty(NaN);           // true
isEmpty({});            // true
isEmpty([]);            // true
isEmpty('  ');          // false
isBlank('  ');          // true
isArray({})             // false
```

## API
```
// checks if object is Array type.
export function isArray(obj) 
// checks if object is String type.
export function isString(obj) 
// checks if object is Data type.
export function isDate(obj) 
// checks if object is Object type.
export function isObject(obj) 
// checks if object is Number type.
export function isNumber(obj) 
// checks if object is FormData type.
export function isFormData(obj)
// checks if browser is IE.
export function isIE()
// checks if object is empty, includes null, undefined, NaN, '', [] and {}, excludes '  ', [1, 2, 3], {name: 'bean'} etc.
export function isEmpty(obj) 
// checks if object is not empty.
export function isNotEmpty(obj) 
// checks if string is blank, include all of isEmpty() and '   '.
export function isBlank(str) 
// checks if string is not blank.
export function isNotBlank(obj) 
```