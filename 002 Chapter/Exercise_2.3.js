function drawChessboard(size = 8) {
  let s = "";
  for (let i = 0; i < (size * size); i++) {
    s += i % size === 0 && i > 0 ? '\n' : ''
    s += i % 2 === 0 ? '#' : ' '
  }
  return s
}

console.log(drawChessboard(10));
