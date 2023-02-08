import { add } from './utils/add.js'
import '@/components/createDom.js'

import { createApp } from 'vue'
import App from './App'

createApp(App).mount('#app')

let res = add(10, 20)
console.log('res', res)
console.log('res', res)
console.log('res', res)

const message = 'message'

console.log('message', message)
console.log('message', message)
console.log('message', message)

function foo() {
  console.log('foo Function')
  console.log('foo Function')
  console.log('foo Function')
}
foo()
