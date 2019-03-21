const {performance} = require('perf_hooks');
const addon = require('./build/Release/addon');

function sum() {
  let a = 3.1415926, b = 2.718;
  for (let i = 0; i < 100000000; i++) {
    a += b;
  }

  let total = a;
  return total;
}

let t0 = performance.now();
addon.sum();
let t1 = performance.now();
console.log("c++: " + (t1-t0) + " ms")

let t2 = performance.now();
sum();
let t3 = performance.now();
console.log("js: " + (t3-t2) + " ms")

// window.document.querySelector("#cpp-time").innerHTML = t1-t0;
// window.document.querySelector("#js-time").innerHTML = t3-t2;