/**
 * получить состояние клетки
 * @param field {number[][]} - состояние поля
 * @param x {number} - номер колонки
 * @param y {number} - номер строки
 * @return number
 */
interface Field {
  [key: number]: string;
}
export function getCellState(field: Field, x: number, y: number) {
  const row = field[y];
  if (row === undefined) {
    return 0;
  }
  const cell = row[x];
  if (cell === undefined) {
    return 0;
  }
  return cell;
}
