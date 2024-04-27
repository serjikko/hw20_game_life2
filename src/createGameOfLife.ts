/* eslint-disable no-param-reassign */

import { drawField } from "./drawField";
import { getNextState } from "./getNextState";
import { isAnyoneAlive } from "./isAnyoneAlive";

/**
 * Создание игры Жизнь
 * @param sizeX {number} - число колонокр
 * @param sizeY {number} - число строк
 * @param htmlElement {HTMLElement} - элемент, в котором будет отрисована игра
 * @returns void
 */
export function createGameOfLife(sizeX: number, sizeY: number, htmlElement: HTMLElement) {
  let gameIsRunning = false;
  let timer: number;

  // Создать блок для поля
  // Создать кнопку управления игрой
  htmlElement.innerHTML = `<div class="field-wrapper"></div><button>Start</button>`;
  const fieldWrapper = htmlElement.querySelector(".field-wrapper");
  const button = htmlElement.querySelector("button");

  // Создать поле заданного размера
  let field = Array.from({ length: sizeY }).map(() =>
    Array.from({ length: sizeX }).fill(0)
  );

  const cellClickHandler = (x: number, y: number) => {
    field[y][x] = field[y][x] === 0 ? 1 : 0;
    drawField(fieldWrapper, field, cellClickHandler);
  };

  // Отрисовать поле заданного размера
  drawField(fieldWrapper, field, cellClickHandler);
  // При клике по ячейке поля
  // - поменять его состояние
  // - перерисовать поле
  function stopGame() {
    gameIsRunning = false;
    const button = document.getElementById('myButton');
    if (button) {
    button.textContent = "Start";
    }
    // При клике на кнопке `Stop` остановить таймер
    clearInterval(timer);
  }
  function startGame() {
    // При клике по кнопке старт
    // - поменять надпись на `Stop`
    gameIsRunning = true;
    const button = document.getElementById('myButton');
    if (button) {
    button.textContent = "Stop";
    }
    // - запустить таймер для обновления поля
    let timer: number;
    // @ts-expect-error FIXME
    timer = setInterval(() => {
      // В таймере обновления поля
      // - посчитать новое состояние поля df
      // - отрисовать новое состояние поля
      // - проверить, что есть живые клетки
      // - если живых клеток нет
      //    - остановить таймер
      //    - вывести сообщение
      // @ts-expect-error FIXME
      field = getNextState(field);
      drawField(fieldWrapper, field, cellClickHandler);
      if (!isAnyoneAlive(field)) {
        alert("Death on the block");
        stopGame();
      }
    }, 1000);
  }

  if (button !== null) {
    button.addEventListener("click", () => {
    if (!gameIsRunning) {
      startGame();
    } else {
      stopGame();
    }
  });
}
}
