import { getCellState } from "./getCellState";

describe("getCellState", () => {
  const field = [
    [0, 0, 0, 0],
    [1, 0, 0, 1],
    [0, 0, 0, 0],
    [1, 0, 1, 0],
  ];
  const expectedCellStates = [
    [0, 0, 0, 0],
    [1, 0, 0, 1],
    [0, 0, 0, 0],
    [1, 0, 1, 0],
  ];

  it("returns `0` for [[0]] 0:0", () => {
    // @ts-expect-error
    expect(getCellState([[0]], 0, 0).toString()).toBe("0");
  });
  it("returns list of cellStates", () => {
    for (let i = 0; i < field.length; i += 1) {
      for (let j = 0; j < field[i].length; j += 1) {
        // @ts-expect-error
        expect(getCellState(field, j, i)).toBe(expectedCellStates[i][j]);
      }
    }
  });

  it("returns `0` for fields out of range", () => {
    for (let i = -1; i < 1; i += 1) {
      for (let j = -1; j < 1; j += 1) {
        expect(getCellState([], i, j)).toBe(0);
        // @ts-expect-error
        expect(getCellState([[]], i, j)).toBe(0);
        // @ts-expect-error
        expect(getCellState([[0]], i, j)).toBe(0);
      }
    }
  });

  it("returns valid values for triangle", () => {
    const triangleField = [
      [1, 1],
      [1, 0],
    ]; // @ts-expect-error
    expect(getCellState(triangleField, 0, 0)).toBe(1);
    // @ts-expect-error
    expect(getCellState(triangleField, 1, 0)).toBe(1);
    // @ts-expect-error
    expect(getCellState(triangleField, 0, 1)).toBe(1);
    // @ts-expect-error
    expect(getCellState(triangleField, 1, 1)).toBe(0);
  });
});
