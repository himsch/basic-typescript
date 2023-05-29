console.log(global);

function simpleFunc() {
  console.log(this);
}
simpleFunc();

class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  };
}

const counter = new Counter();
counter.increase();
const caller = counter.increase;
caller();

function helloWorld() {
  console.log("hello");
}

console.log(global);
