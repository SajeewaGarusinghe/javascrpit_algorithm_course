function fun1(x, y) {
  if (x == 0) return y;
  else {
    console.log(`x-1=${x - 1} and x+y=${x + y}`);
    return fun1(x - 1, x + y);
  }
}
