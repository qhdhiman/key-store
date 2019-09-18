# key-store
唯一值生成器工具类

## 使用说明

``` node
npm install @stj/keystore --save
```

``` javascript
import KeyStore from '@stj/keystore' // Node? const KeyStore = require('@stj/keystore').default
 
const ks = new KeyStore()
 
let key = ks.generate() // or KeyStore.uuid()
console.log(key) // sEmnFC07
 
key = ks.generate('tag-name')
console.log(key) // tag-name
 
key = ks.generate('tag-name')
console.log(key) // tag-name1
 
key = ks.generate('tag-name')
console.log(key) // tag-name2
 
key = ks.generate('tag-name', KeyStore.format.camelCase, {pascalCase: true})
console.log(key) // TagName3

```
