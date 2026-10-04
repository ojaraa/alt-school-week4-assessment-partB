function createCounter() {
  let count = 0; 

  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
console.log("counter")
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.value);
console.log(counter.count);       // undefined 
