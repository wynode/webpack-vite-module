// 导入模块
import { string, sayHello, objectc} from './module-father.js'
console.log(string)

// string = 1

// console.log(string)

// console.log(sayHello(), 222)
// console.log(sayHello, 11111)

// sayHello = function() {
//   console.log(2)
// }

// console.log(sayHello)

// console.log(objectc)

// objectc.test = 22222

// console.log(objectc)

// console.log(objectc)

// objectc = 22222

// console.log(objectc)

// const wynode = document.getElementById('wynode')
// console.log(wynode)
// // main.js
// const common = require('./commonjs-module.js');
// console.log(common)
// console.log(common.b)
// const cc = common.a
// common.b = 12312
// console.log(common)
// console.log(common.b)
// console.log(common.b.c); // 将会打印 2323

// common.a.b.c = 'testha'

// setTimeout(() => {
//   console.log(cc)
//   console.log(common)
// }, 10000)

// setTimeout(() => {
//   console.log(a.b.c); // 10秒后将打印 123
// }, 10000);

// wynode.onclick = () => {
//   console.log('click')
//   // const module1 = require('./commonjs-module.js');

//   // // 使用导入的模块
//   // module1.doSomething();
//   import('./es-module.js')
//     .then(module => {
//       console.log('load async')
//       // 使用模块中导出的功能
//       module.sayHello();
//     });
// };

// import { get, debounce } from 'lodash'

// const objectT = { test: 1}

// const test =  get(objectT, '12')

// const testFunc = debounce(function() { console.log(23)}, 3000)
// console.log(testFunc)
// console.log(test)


// setTimeout(() => {
//   import("./es-module.js").then((module) => {
//     console.log("load async");
//     // 使用模块中导出的功能
//     module.sayHello();
//     console.log(module.string);
//   });
// }, 5000);
