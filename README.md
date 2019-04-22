# key-store
唯一值生产期工具类

demo

``` javascript
import KeyStore from '@stj/key-store'

const ks = new KeyStore()

let key = ks.generate() // or ks.uuid()
console.log(key) // sEmnFC07

key = ks.generate('tag-name')
console.log(key) // tag-name

key = ks.generate('tagName')
console.log(key) // tag-name1

key = ks.generate('tagName')
console.log(key) // tag-name2

key = ks.generate('tag-name', KeyStore.format.camelCase)
console.log(tagName) // tagName3

```
