// import { gett } from 'lodash'

// console.log(gett, 111)


// setTimeout(() => {
//   console.log(gett)
// }, 8000)

// import('./node_modules/lodash/lodash.js').then((res) => {
//   console.log(res)
//   debugger
// })


// const objectT = { test: 1}

// const test =  get(objectT, '12')

// const testFunc = debounce(function() { console.log(23)}, 3000)
// console.log(testFunc)
// console.log(test)
 

export const string = "Hello from moduelea！！！！！！！！!";


export const outout = 'test'

const out = '123'

export function sayHello() {
  console.log(111, out, string)
}


const inner = 'inner'

export const array = [0, 1, out, 3, 4]
export const objectc = {
  test: 1,
  test2: out,
}

export default {
  obj: {
    test: 1,
  },
  objectc,
}

console.log(string, sayHello, objectc)

setTimeout(() => {
  console.log(string, sayHello, objectc, 1)
}, 10000)