const fibonacci = function (pos) {
  if (pos < 1) {
    return "OOPS";
  }
  let fib = [];
  for (i = 0; i < pos; i++) {
    if (fib.length < 1) {
      fib[i] = 1;
    } else if (fib.length < 2) {
      fib[i] = 1;
    } else {
      fib[i] = (fib[i - 2] + fib[i - 1]);
    }
  }
  return fib[pos - 1];
};
debugger
fibonacci(4);

module.exports = fibonacci;
