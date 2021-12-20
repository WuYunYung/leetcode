var result = [];
var a = 3;
var total = 0;

// function foo(a) {
//   var i = 0;
//   for (; i < 3; i++) {
//     result[i] = function () {
//       total += i * a;
//       console.log(total);
//     }
//   }
// }

// 追问为什么。 当时的i跟a分别是什么。 如果想要将i分别为0，1，2该怎么处理？

// function foo(a) {
//   for (let i = 0; i < 3; i++) {
//     result[i] = function () {
//       total += i * a;
//       console.log(total);
//     }
//   }
// }

function foo(a) {
  var i = 0;
  for (; i < 3; i++) {
    result[i] = (function (i) {
      return function () {
        total += i * a;
        console.log(total);
      }
    })(i)
  }
}

foo(1);
result[0]();
result[1]();
result[2](); 
