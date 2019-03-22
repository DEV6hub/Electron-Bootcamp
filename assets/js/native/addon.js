const {performance} = require('perf_hooks')
const addon = require('./build/Release/addon')

function sum() {
  let a = 3.1415926, b = 2.718
  for (let i = 0; i < 100000; i++) {
    a += b
  }

  let total = a
  return total
}

let t1 = performance.now()
addon.sum()
let t2 = performance.now()
console.log("c++: " + (t2-t1) + " ms")

let t3 = performance.now()
sum()
let t4 = performance.now()
console.log("js: " + (t4-t3) + " ms")

let timecpp = t2-t1
let timejs = t4-t3

window.onload = function() {
  let cppTimeDiv = document.querySelector("#cpp-time")
  let jsTimeDiv = document.querySelector("#js-time")

  cppTimeDiv.innerHTML = timecpp
  jsTimeDiv.innerHTML = timejs
}
