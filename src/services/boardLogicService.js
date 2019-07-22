export function getWinner(moves) {
  function getCell(x, y) {
    return moves.find(m => m.x === x && m.y === y) || {};
  }

  if (moves.length < 5) {
    return null;
  }

  //check rows
  for (let y = 0; y < 3; y++) {
    const x0 = getCell(0, y);
    const x1 = getCell(1, y);
    const x2 = getCell(2, y);

    if (x0.player === x1.player && x1.player === x2.player) {
      return x0.player;
    }
  }

  //check columns
  for (let x = 0; x < 3; x++) {
    const y0 = getCell(x, 0);
    const y1 = getCell(x, 1);
    const y2 = getCell(x, 2);

    if (y0.player === y1.player && y1.player === y2.player) {
      return y0.player;
    }
  }

  //check across
  const x0y0 = getCell(0, 0);
  const x1y1 = getCell(1, 1);
  const x2y2 = getCell(2, 2);

  if (x0y0.player === x1y1.player && x1y1.player === x2y2.player) {
    return x0y0.player;
  }

  const x2y0 = getCell(2, 0);
  const x0y2 = getCell(0, 2);

  if (x2y0.player === x1y1.player && x1y1.player === x0y2.player) {
    return x2y0.player;
  }

  return null;
}
