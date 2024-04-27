import { getNumOfAliveNeighbours } from "./getNumOfAliveNeighbours";
import { getCellState } from "./getCellState";
import { getNewCellState } from "./getNewCellState";

/**
 * получить новое состояние
 * @param field {number[][]} - состояние поля
 * @return number[][] - новое состояние поля
 */
export function getNextState(field: string) {
  // return field.map((row, rowIndex) =>
  //   {
  //     return row.map((cell, cellIndex) =>
  //     {
  //       const aliveNeighbours = getNumOfAliveNeighbours(cellIndex,rowIndex, field);
  //       const currentState = getCellState(field, cellIndex, rowIndex);
  //       const newState = getNewCellState(currentState, aliveNeighbours);
  //       return newState;
  //     })
  //   });

  if (Array.isArray(field)) {
    return field.map((row:any, rowIndex:any) =>
      row.map((cell:any, cellIndex:any) => {
        const an = getNumOfAliveNeighbours(cellIndex, rowIndex, field);
        const currentState = getCellState(field, cellIndex, rowIndex);
        const newState = getNewCellState(currentState, an);
        return newState;
      })
    );
  } else {
    // Handle the case when 'field' is not an array
    return []; // or any other appropriate action
  }
}
