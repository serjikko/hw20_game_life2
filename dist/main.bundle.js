(self["webpackChunkhw20_game_life"] = self["webpackChunkhw20_game_life"] || []).push([["main"],{

/***/ "./src/createGameOfLife.ts":
/*!*********************************!*\
  !*** ./src/createGameOfLife.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGameOfLife: () => (/* binding */ createGameOfLife)
/* harmony export */ });
/* harmony import */ var _drawField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawField */ "./src/drawField.ts");
/* harmony import */ var _getNextState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNextState */ "./src/getNextState.ts");
/* harmony import */ var _isAnyoneAlive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isAnyoneAlive */ "./src/isAnyoneAlive.ts");
/* eslint-disable no-param-reassign */





/**
 * Создание игры Жизнь
 * @param sizeX {number} - число колонокр
 * @param sizeY {number} - число строк
 * @param htmlElement {HTMLElement} - элемент, в котором будет отрисована игра
 * @returns void
 */
function createGameOfLife(sizeX, sizeY, htmlElement) {
  let gameIsRunning = false;
  let timer;

  // Создать блок для поля
  // Создать кнопку управления игрой
  htmlElement.innerHTML = `<div class="field-wrapper"></div><button>Start</button>`;
  const fieldWrapper = htmlElement.querySelector(".field-wrapper");
  const button = htmlElement.querySelector("button");

  // Создать поле заданного размера
  let field = Array.from({
    length: sizeY
  }).map(() => Array.from({
    length: sizeX
  }).fill(0));
  const cellClickHandler = (x, y) => {
    field[y][x] = field[y][x] === 0 ? 1 : 0;
    (0,_drawField__WEBPACK_IMPORTED_MODULE_0__.drawField)(fieldWrapper, field, cellClickHandler);
  };

  // Отрисовать поле заданного размера
  (0,_drawField__WEBPACK_IMPORTED_MODULE_0__.drawField)(fieldWrapper, field, cellClickHandler);
  // При клике по ячейке поля
  // - поменять его состояние
  // - перерисовать поле
  function stopGame() {
    gameIsRunning = false;
    const button = document.getElementById("myButton");
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
    const button = document.getElementById("myButton");
    if (button) {
      button.textContent = "Stop";
    }
    // - запустить таймер для обновления поля
    let timer;
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
      field = (0,_getNextState__WEBPACK_IMPORTED_MODULE_1__.getNextState)(field);
      (0,_drawField__WEBPACK_IMPORTED_MODULE_0__.drawField)(fieldWrapper, field, cellClickHandler);
      if (!(0,_isAnyoneAlive__WEBPACK_IMPORTED_MODULE_2__.isAnyoneAlive)(field)) {
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

/***/ }),

/***/ "./src/drawField.ts":
/*!**************************!*\
  !*** ./src/drawField.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawField: () => (/* binding */ drawField)
/* harmony export */ });
/**
 * отрисовка поля
 * @param field {number[][]} - состояние поля
 * @param htmlElement {HTMLElement} - элемент, в котором будет отрисовано поле
 * @param onCellClick {(x: number, y: number) => void}
 * @returns void
 */
// @ts-ignore
function drawField(htmlElement, field, onCellClick) {
  const rowIterator = (row, rowIndex) => `<tr>${row.map((cell, columnIndex) => {
    if (cell === 1) {
      return `<td 
        data-x=${columnIndex}
        data-y=${rowIndex}
        class="cell alive" 
        style="background-color:#FA58D0; height:10px; width:10px;"></td>`;
    }
    return `<td 
      data-x=${columnIndex}
      data-y=${rowIndex}
      class="cell dead" 
      style="background-color:#FFFFFF; height:10px; width:10px;"></td>`;
  }).join("")}</tr>`;
  const table = `<table border=1>${field.map(rowIterator).join("")}</table>`;

  // eslint-disable-next-line no-param-reassign
  htmlElement.innerHTML = table;
  htmlElement.querySelector("table").addEventListener("click", ev => {
    const clickedElement = ev.target;
    // @ts-ignore
    const x = clickedElement.getAttribute("data-x");
    // @ts-ignore
    const y = clickedElement.getAttribute("data-y");
    if (x >= 0 && y >= 0) {
      onCellClick(Number(x), Number(y));
    }
  });
}

/***/ }),

/***/ "./src/getCellState.ts":
/*!*****************************!*\
  !*** ./src/getCellState.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCellState: () => (/* binding */ getCellState)
/* harmony export */ });
/**
 * получить состояние клетки
 * @param field {number[][]} - состояние поля
 * @param x {number} - номер колонки
 * @param y {number} - номер строки
 * @return number
 */

function getCellState(field, x, y) {
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

/***/ }),

/***/ "./src/getNewCellState.ts":
/*!********************************!*\
  !*** ./src/getNewCellState.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNewCellState: () => (/* binding */ getNewCellState)
/* harmony export */ });
function getNewCellState(currentCellState, numOfAliveNeighbours) {
  if (numOfAliveNeighbours === 3) {
    return 1;
  }
  if (numOfAliveNeighbours > 3 || numOfAliveNeighbours < 2) {
    return 0;
  }
  if (numOfAliveNeighbours === 2 && currentCellState === 1) {
    return 1;
  }
  return 0;
}

/***/ }),

/***/ "./src/getNextState.ts":
/*!*****************************!*\
  !*** ./src/getNextState.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNextState: () => (/* binding */ getNextState)
/* harmony export */ });
/* harmony import */ var _getNumOfAliveNeighbours__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNumOfAliveNeighbours */ "./src/getNumOfAliveNeighbours.ts");
/* harmony import */ var _getCellState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getCellState */ "./src/getCellState.ts");
/* harmony import */ var _getNewCellState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNewCellState */ "./src/getNewCellState.ts");




/**
 * получить новое состояние
 * @param field {number[][]} - состояние поля
 * @return number[][] - новое состояние поля
 */
function getNextState(field) {
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
    return field.map((row, rowIndex) => row.map((cell, cellIndex) => {
      const an = (0,_getNumOfAliveNeighbours__WEBPACK_IMPORTED_MODULE_0__.getNumOfAliveNeighbours)(cellIndex, rowIndex, field);
      const currentState = (0,_getCellState__WEBPACK_IMPORTED_MODULE_1__.getCellState)(field, cellIndex, rowIndex);
      const newState = (0,_getNewCellState__WEBPACK_IMPORTED_MODULE_2__.getNewCellState)(currentState, an);
      return newState;
    }));
  }
  // Handle the case when 'field' is not an array
  return []; // or any other appropriate action
}

/***/ }),

/***/ "./src/getNumOfAliveNeighbours.ts":
/*!****************************************!*\
  !*** ./src/getNumOfAliveNeighbours.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNumOfAliveNeighbours: () => (/* binding */ getNumOfAliveNeighbours)
/* harmony export */ });
/* harmony import */ var _getCellState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCellState */ "./src/getCellState.ts");


/**
 * узнать сколько живых соседей вокруг клетки
 * @param column {number} - номер колонки
 * @param row {number} - номер строки
 * @param field {number[][]} - состояние поля
 * @return number - число живых соседей
 */
function getNumOfAliveNeighbours(column, row, field) {
  let neighbours = 0;
  for (let j = column - 1; j <= column + 1; j += 1) {
    neighbours += Number((0,_getCellState__WEBPACK_IMPORTED_MODULE_0__.getCellState)(field, j, row - 1));
  }
  for (let j = column - 1; j <= column + 1; j += 1) {
    neighbours += Number((0,_getCellState__WEBPACK_IMPORTED_MODULE_0__.getCellState)(field, j, row + 1));
  }
  neighbours += Number((0,_getCellState__WEBPACK_IMPORTED_MODULE_0__.getCellState)(field, column - 1, row));
  neighbours += Number((0,_getCellState__WEBPACK_IMPORTED_MODULE_0__.getCellState)(field, column + 1, row));
  return neighbours;
}

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// Запуск игры
//
// - создать элемент и добавить его на страницу
// - создать на этом элементе игру с помощью `createGameOfLife` с размерами поля x / y

const {
  createGameOfLife
} = __webpack_require__(/*! ./createGameOfLife */ "./src/createGameOfLife.ts");

// - для проверки своего кода можно создать еще один элемент и создать вторую игру на этой же странице
const gameWrapper1 = document.createElement("div");
const gameWrapper2 = document.createElement("div");
document.body.appendChild(gameWrapper1);
document.body.appendChild(gameWrapper2);
createGameOfLife(3, 3, gameWrapper1);
createGameOfLife(10, 10, gameWrapper2);

/***/ }),

/***/ "./src/isAnyoneAlive.ts":
/*!******************************!*\
  !*** ./src/isAnyoneAlive.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAnyoneAlive: () => (/* binding */ isAnyoneAlive)
/* harmony export */ });
/**
 * проверка что есть живые клетки
 * @param field {number[][]} - состояние поля
 * @return boolean
 */
function isAnyoneAlive(field) {
  for (let i = 0; i < field.length; i += 1) {
    const row = field[i];
    for (let j = 0; j < row.length; j += 1) {
      const cell = row[j];
      if (cell) {
        return true;
      }
    }
  }
  return false;
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsSUFBSSxDQUFDLEVBQUU7TUFDdEMsTUFBTXRCLElBQUksR0FBR0YsR0FBRyxDQUFDd0IsQ0FBQyxDQUFDO01BQ25CLElBQUl0QixJQUFJLEVBQUU7UUFDUixPQUFPLElBQUk7TUFDYjtJQUNGO0VBQ0Y7RUFDQSxPQUFPLEtBQUs7QUFDZCIsInNvdXJjZXMiOlsid2VicGFjazovL2h3MjBfZ2FtZV9saWZlLy4vc3JjL2NyZWF0ZUdhbWVPZkxpZmUudHMiLCJ3ZWJwYWNrOi8vaHcyMF9nYW1lX2xpZmUvLi9zcmMvZHJhd0ZpZWxkLnRzIiwid2VicGFjazovL2h3MjBfZ2FtZV9saWZlLy4vc3JjL2dldENlbGxTdGF0ZS50cyIsIndlYnBhY2s6Ly9odzIwX2dhbWVfbGlmZS8uL3NyYy9nZXROZXdDZWxsU3RhdGUudHMiLCJ3ZWJwYWNrOi8vaHcyMF9nYW1lX2xpZmUvLi9zcmMvZ2V0TmV4dFN0YXRlLnRzIiwid2VicGFjazovL2h3MjBfZ2FtZV9saWZlLy4vc3JjL2dldE51bU9mQWxpdmVOZWlnaGJvdXJzLnRzIiwid2VicGFjazovL2h3MjBfZ2FtZV9saWZlLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2h3MjBfZ2FtZV9saWZlLy4vc3JjL2lzQW55b25lQWxpdmUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cblxuaW1wb3J0IHsgZHJhd0ZpZWxkIH0gZnJvbSBcIi4vZHJhd0ZpZWxkXCI7XG5pbXBvcnQgeyBnZXROZXh0U3RhdGUgfSBmcm9tIFwiLi9nZXROZXh0U3RhdGVcIjtcbmltcG9ydCB7IGlzQW55b25lQWxpdmUgfSBmcm9tIFwiLi9pc0FueW9uZUFsaXZlXCI7XG5cbi8qKlxuICog0KHQvtC30LTQsNC90LjQtSDQuNCz0YDRiyDQltC40LfQvdGMXG4gKiBAcGFyYW0gc2l6ZVgge251bWJlcn0gLSDRh9C40YHQu9C+INC60L7Qu9C+0L3QvtC60YBcbiAqIEBwYXJhbSBzaXplWSB7bnVtYmVyfSAtINGH0LjRgdC70L4g0YHRgtGA0L7QulxuICogQHBhcmFtIGh0bWxFbGVtZW50IHtIVE1MRWxlbWVudH0gLSDRjdC70LXQvNC10L3Rgiwg0LIg0LrQvtGC0L7RgNC+0Lwg0LHRg9C00LXRgiDQvtGC0YDQuNGB0L7QstCw0L3QsCDQuNCz0YDQsFxuICogQHJldHVybnMgdm9pZFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR2FtZU9mTGlmZShcbiAgc2l6ZVg6IG51bWJlcixcbiAgc2l6ZVk6IG51bWJlcixcbiAgaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuKSB7XG4gIGxldCBnYW1lSXNSdW5uaW5nID0gZmFsc2U7XG4gIGxldCB0aW1lcjogbnVtYmVyO1xuXG4gIC8vINCh0L7Qt9C00LDRgtGMINCx0LvQvtC6INC00LvRjyDQv9C+0LvRj1xuICAvLyDQodC+0LfQtNCw0YLRjCDQutC90L7Qv9C60YMg0YPQv9GA0LDQstC70LXQvdC40Y8g0LjQs9GA0L7QuVxuICBodG1sRWxlbWVudC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImZpZWxkLXdyYXBwZXJcIj48L2Rpdj48YnV0dG9uPlN0YXJ0PC9idXR0b24+YDtcbiAgY29uc3QgZmllbGRXcmFwcGVyID0gaHRtbEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWVsZC13cmFwcGVyXCIpO1xuICBjb25zdCBidXR0b24gPSBodG1sRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpO1xuXG4gIC8vINCh0L7Qt9C00LDRgtGMINC/0L7Qu9C1INC30LDQtNCw0L3QvdC+0LPQviDRgNCw0LfQvNC10YDQsFxuICBsZXQgZmllbGQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBzaXplWSB9KS5tYXAoKCkgPT5cbiAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiBzaXplWCB9KS5maWxsKDApLFxuICApO1xuXG4gIGNvbnN0IGNlbGxDbGlja0hhbmRsZXIgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHtcbiAgICBmaWVsZFt5XVt4XSA9IGZpZWxkW3ldW3hdID09PSAwID8gMSA6IDA7XG4gICAgZHJhd0ZpZWxkKGZpZWxkV3JhcHBlciwgZmllbGQsIGNlbGxDbGlja0hhbmRsZXIpO1xuICB9O1xuXG4gIC8vINCe0YLRgNC40YHQvtCy0LDRgtGMINC/0L7Qu9C1INC30LDQtNCw0L3QvdC+0LPQviDRgNCw0LfQvNC10YDQsFxuICBkcmF3RmllbGQoZmllbGRXcmFwcGVyLCBmaWVsZCwgY2VsbENsaWNrSGFuZGxlcik7XG4gIC8vINCf0YDQuCDQutC70LjQutC1INC/0L4g0Y/Rh9C10LnQutC1INC/0L7Qu9GPXG4gIC8vIC0g0L/QvtC80LXQvdGP0YLRjCDQtdCz0L4g0YHQvtGB0YLQvtGP0L3QuNC1XG4gIC8vIC0g0L/QtdGA0LXRgNC40YHQvtCy0LDRgtGMINC/0L7Qu9C1XG4gIGZ1bmN0aW9uIHN0b3BHYW1lKCkge1xuICAgIGdhbWVJc1J1bm5pbmcgPSBmYWxzZTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15QnV0dG9uXCIpO1xuICAgIGlmIChidXR0b24pIHtcbiAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU3RhcnRcIjtcbiAgICB9XG4gICAgLy8g0J/RgNC4INC60LvQuNC60LUg0L3QsCDQutC90L7Qv9C60LUgYFN0b3BgINC+0YHRgtCw0L3QvtCy0LjRgtGMINGC0LDQudC80LXRgFxuICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICB9XG4gIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgICAvLyDQn9GA0Lgg0LrQu9C40LrQtSDQv9C+INC60L3QvtC/0LrQtSDRgdGC0LDRgNGCXG4gICAgLy8gLSDQv9C+0LzQtdC90Y/RgtGMINC90LDQtNC/0LjRgdGMINC90LAgYFN0b3BgXG4gICAgZ2FtZUlzUnVubmluZyA9IHRydWU7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUJ1dHRvblwiKTtcbiAgICBpZiAoYnV0dG9uKSB7XG4gICAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIlN0b3BcIjtcbiAgICB9XG4gICAgLy8gLSDQt9Cw0L/Rg9GB0YLQuNGC0Ywg0YLQsNC50LzQtdGAINC00LvRjyDQvtCx0L3QvtCy0LvQtdC90LjRjyDQv9C+0LvRj1xuICAgIGxldCB0aW1lcjogbnVtYmVyO1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgRklYTUVcbiAgICB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIC8vINCSINGC0LDQudC80LXRgNC1INC+0LHQvdC+0LLQu9C10L3QuNGPINC/0L7Qu9GPXG4gICAgICAvLyAtINC/0L7RgdGH0LjRgtCw0YLRjCDQvdC+0LLQvtC1INGB0L7RgdGC0L7Rj9C90LjQtSDQv9C+0LvRjyBkZlxuICAgICAgLy8gLSDQvtGC0YDQuNGB0L7QstCw0YLRjCDQvdC+0LLQvtC1INGB0L7RgdGC0L7Rj9C90LjQtSDQv9C+0LvRj1xuICAgICAgLy8gLSDQv9GA0L7QstC10YDQuNGC0YwsINGH0YLQviDQtdGB0YLRjCDQttC40LLRi9C1INC60LvQtdGC0LrQuFxuICAgICAgLy8gLSDQtdGB0LvQuCDQttC40LLRi9GFINC60LvQtdGC0L7QuiDQvdC10YJcbiAgICAgIC8vICAgIC0g0L7RgdGC0LDQvdC+0LLQuNGC0Ywg0YLQsNC50LzQtdGAXG4gICAgICAvLyAgICAtINCy0YvQstC10YHRgtC4INGB0L7QvtCx0YnQtdC90LjQtVxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBGSVhNRVxuICAgICAgZmllbGQgPSBnZXROZXh0U3RhdGUoZmllbGQpO1xuICAgICAgZHJhd0ZpZWxkKGZpZWxkV3JhcHBlciwgZmllbGQsIGNlbGxDbGlja0hhbmRsZXIpO1xuICAgICAgaWYgKCFpc0FueW9uZUFsaXZlKGZpZWxkKSkge1xuICAgICAgICBhbGVydChcIkRlYXRoIG9uIHRoZSBibG9ja1wiKTtcbiAgICAgICAgc3RvcEdhbWUoKTtcbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIGlmIChidXR0b24gIT09IG51bGwpIHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmICghZ2FtZUlzUnVubmluZykge1xuICAgICAgICBzdGFydEdhbWUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0b3BHYW1lKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKlxuICog0L7RgtGA0LjRgdC+0LLQutCwINC/0L7Qu9GPXG4gKiBAcGFyYW0gZmllbGQge251bWJlcltdW119IC0g0YHQvtGB0YLQvtGP0L3QuNC1INC/0L7Qu9GPXG4gKiBAcGFyYW0gaHRtbEVsZW1lbnQge0hUTUxFbGVtZW50fSAtINGN0LvQtdC80LXQvdGCLCDQsiDQutC+0YLQvtGA0L7QvCDQsdGD0LTQtdGCINC+0YLRgNC40YHQvtCy0LDQvdC+INC/0L7Qu9C1XG4gKiBAcGFyYW0gb25DZWxsQ2xpY2sgeyh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gdm9pZH1cbiAqIEByZXR1cm5zIHZvaWRcbiAqL1xuLy8gQHRzLWlnbm9yZVxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdGaWVsZChodG1sRWxlbWVudCwgZmllbGQsIG9uQ2VsbENsaWNrKSB7XG4gIGNvbnN0IHJvd0l0ZXJhdG9yID0gKHJvdzogbnVtYmVyW10sIHJvd0luZGV4OiBudW1iZXIpID0+IGA8dHI+JHtyb3dcbiAgICAgIC5tYXAoKGNlbGwsIGNvbHVtbkluZGV4KSA9PiB7XG4gICAgICAgIGlmIChjZWxsID09PSAxKSB7XG4gICAgICAgICAgcmV0dXJuIGA8dGQgXG4gICAgICAgIGRhdGEteD0ke2NvbHVtbkluZGV4fVxuICAgICAgICBkYXRhLXk9JHtyb3dJbmRleH1cbiAgICAgICAgY2xhc3M9XCJjZWxsIGFsaXZlXCIgXG4gICAgICAgIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjojRkE1OEQwOyBoZWlnaHQ6MTBweDsgd2lkdGg6MTBweDtcIj48L3RkPmA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGA8dGQgXG4gICAgICBkYXRhLXg9JHtjb2x1bW5JbmRleH1cbiAgICAgIGRhdGEteT0ke3Jvd0luZGV4fVxuICAgICAgY2xhc3M9XCJjZWxsIGRlYWRcIiBcbiAgICAgIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjojRkZGRkZGOyBoZWlnaHQ6MTBweDsgd2lkdGg6MTBweDtcIj48L3RkPmA7XG4gICAgICB9KVxuICAgICAgLmpvaW4oXCJcIil9PC90cj5gO1xuXG4gIGNvbnN0IHRhYmxlID0gYDx0YWJsZSBib3JkZXI9MT4ke2ZpZWxkLm1hcChyb3dJdGVyYXRvcikuam9pbihcIlwiKX08L3RhYmxlPmA7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGh0bWxFbGVtZW50LmlubmVySFRNTCA9IHRhYmxlO1xuXG4gIGh0bWxFbGVtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCJ0YWJsZVwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBjbGlja2VkRWxlbWVudCA9IGV2LnRhcmdldDtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGNvbnN0IHggPSBjbGlja2VkRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIik7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBjb25zdCB5ID0gY2xpY2tlZEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS15XCIpO1xuICAgICAgaWYgKHggPj0gMCAmJiB5ID49IDApIHtcbiAgICAgICAgb25DZWxsQ2xpY2soTnVtYmVyKHgpLCBOdW1iZXIoeSkpO1xuICAgICAgfVxuICAgIH0pO1xufVxuIiwiLyoqXG4gKiDQv9C+0LvRg9GH0LjRgtGMINGB0L7RgdGC0L7Rj9C90LjQtSDQutC70LXRgtC60LhcbiAqIEBwYXJhbSBmaWVsZCB7bnVtYmVyW11bXX0gLSDRgdC+0YHRgtC+0Y/QvdC40LUg0L/QvtC70Y9cbiAqIEBwYXJhbSB4IHtudW1iZXJ9IC0g0L3QvtC80LXRgCDQutC+0LvQvtC90LrQuFxuICogQHBhcmFtIHkge251bWJlcn0gLSDQvdC+0LzQtdGAINGB0YLRgNC+0LrQuFxuICogQHJldHVybiBudW1iZXJcbiAqL1xuaW50ZXJmYWNlIEZpZWxkIHtcbiAgW2tleTogbnVtYmVyXTogc3RyaW5nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENlbGxTdGF0ZShmaWVsZDogRmllbGQsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gIGNvbnN0IHJvdyA9IGZpZWxkW3ldO1xuICBpZiAocm93ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBjb25zdCBjZWxsID0gcm93W3hdO1xuICBpZiAoY2VsbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgcmV0dXJuIGNlbGw7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0TmV3Q2VsbFN0YXRlKFxuICBjdXJyZW50Q2VsbFN0YXRlOiBhbnksXG4gIG51bU9mQWxpdmVOZWlnaGJvdXJzOiBhbnksXG4pIHtcbiAgaWYgKG51bU9mQWxpdmVOZWlnaGJvdXJzID09PSAzKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgaWYgKG51bU9mQWxpdmVOZWlnaGJvdXJzID4gMyB8fCBudW1PZkFsaXZlTmVpZ2hib3VycyA8IDIpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBpZiAobnVtT2ZBbGl2ZU5laWdoYm91cnMgPT09IDIgJiYgY3VycmVudENlbGxTdGF0ZSA9PT0gMSkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIHJldHVybiAwO1xufVxuIiwiaW1wb3J0IHsgZ2V0TnVtT2ZBbGl2ZU5laWdoYm91cnMgfSBmcm9tIFwiLi9nZXROdW1PZkFsaXZlTmVpZ2hib3Vyc1wiO1xuaW1wb3J0IHsgZ2V0Q2VsbFN0YXRlIH0gZnJvbSBcIi4vZ2V0Q2VsbFN0YXRlXCI7XG5pbXBvcnQgeyBnZXROZXdDZWxsU3RhdGUgfSBmcm9tIFwiLi9nZXROZXdDZWxsU3RhdGVcIjtcblxuLyoqXG4gKiDQv9C+0LvRg9GH0LjRgtGMINC90L7QstC+0LUg0YHQvtGB0YLQvtGP0L3QuNC1XG4gKiBAcGFyYW0gZmllbGQge251bWJlcltdW119IC0g0YHQvtGB0YLQvtGP0L3QuNC1INC/0L7Qu9GPXG4gKiBAcmV0dXJuIG51bWJlcltdW10gLSDQvdC+0LLQvtC1INGB0L7RgdGC0L7Rj9C90LjQtSDQv9C+0LvRj1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV4dFN0YXRlKGZpZWxkOiBzdHJpbmcpIHtcbiAgLy8gcmV0dXJuIGZpZWxkLm1hcCgocm93LCByb3dJbmRleCkgPT5cbiAgLy8gICB7XG4gIC8vICAgICByZXR1cm4gcm93Lm1hcCgoY2VsbCwgY2VsbEluZGV4KSA9PlxuICAvLyAgICAge1xuICAvLyAgICAgICBjb25zdCBhbGl2ZU5laWdoYm91cnMgPSBnZXROdW1PZkFsaXZlTmVpZ2hib3VycyhjZWxsSW5kZXgscm93SW5kZXgsIGZpZWxkKTtcbiAgLy8gICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gZ2V0Q2VsbFN0YXRlKGZpZWxkLCBjZWxsSW5kZXgsIHJvd0luZGV4KTtcbiAgLy8gICAgICAgY29uc3QgbmV3U3RhdGUgPSBnZXROZXdDZWxsU3RhdGUoY3VycmVudFN0YXRlLCBhbGl2ZU5laWdoYm91cnMpO1xuICAvLyAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gIC8vICAgICB9KVxuICAvLyAgIH0pO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGZpZWxkKSkge1xuICAgIHJldHVybiBmaWVsZC5tYXAoKHJvdzogYW55LCByb3dJbmRleDogYW55KSA9PlxuICAgICAgcm93Lm1hcCgoY2VsbDogYW55LCBjZWxsSW5kZXg6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBhbiA9IGdldE51bU9mQWxpdmVOZWlnaGJvdXJzKGNlbGxJbmRleCwgcm93SW5kZXgsIGZpZWxkKTtcbiAgICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gZ2V0Q2VsbFN0YXRlKGZpZWxkLCBjZWxsSW5kZXgsIHJvd0luZGV4KTtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSBnZXROZXdDZWxsU3RhdGUoY3VycmVudFN0YXRlLCBhbik7XG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH0gXG4gICAgLy8gSGFuZGxlIHRoZSBjYXNlIHdoZW4gJ2ZpZWxkJyBpcyBub3QgYW4gYXJyYXlcbiAgICByZXR1cm4gW107IC8vIG9yIGFueSBvdGhlciBhcHByb3ByaWF0ZSBhY3Rpb25cbiAgXG59XG4iLCJpbXBvcnQgeyBnZXRDZWxsU3RhdGUgfSBmcm9tIFwiLi9nZXRDZWxsU3RhdGVcIjtcblxuLyoqXG4gKiDRg9C30L3QsNGC0Ywg0YHQutC+0LvRjNC60L4g0LbQuNCy0YvRhSDRgdC+0YHQtdC00LXQuSDQstC+0LrRgNGD0LMg0LrQu9C10YLQutC4XG4gKiBAcGFyYW0gY29sdW1uIHtudW1iZXJ9IC0g0L3QvtC80LXRgCDQutC+0LvQvtC90LrQuFxuICogQHBhcmFtIHJvdyB7bnVtYmVyfSAtINC90L7QvNC10YAg0YHRgtGA0L7QutC4XG4gKiBAcGFyYW0gZmllbGQge251bWJlcltdW119IC0g0YHQvtGB0YLQvtGP0L3QuNC1INC/0L7Qu9GPXG4gKiBAcmV0dXJuIG51bWJlciAtINGH0LjRgdC70L4g0LbQuNCy0YvRhSDRgdC+0YHQtdC00LXQuVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TnVtT2ZBbGl2ZU5laWdoYm91cnMoY29sdW1uOiBhbnksIHJvdzogYW55LCBmaWVsZDogYW55KSB7XG4gIGxldCBuZWlnaGJvdXJzID0gMDtcblxuICBmb3IgKGxldCBqID0gY29sdW1uIC0gMTsgaiA8PSBjb2x1bW4gKyAxOyBqICs9IDEpIHtcbiAgICBuZWlnaGJvdXJzICs9IE51bWJlcihnZXRDZWxsU3RhdGUoZmllbGQsIGosIHJvdyAtIDEpKTtcbiAgfVxuXG4gIGZvciAobGV0IGogPSBjb2x1bW4gLSAxOyBqIDw9IGNvbHVtbiArIDE7IGogKz0gMSkge1xuICAgIG5laWdoYm91cnMgKz0gTnVtYmVyKGdldENlbGxTdGF0ZShmaWVsZCwgaiwgcm93ICsgMSkpO1xuICB9XG5cbiAgbmVpZ2hib3VycyArPSBOdW1iZXIoZ2V0Q2VsbFN0YXRlKGZpZWxkLCBjb2x1bW4gLSAxLCByb3cpKTtcbiAgbmVpZ2hib3VycyArPSBOdW1iZXIoZ2V0Q2VsbFN0YXRlKGZpZWxkLCBjb2x1bW4gKyAxLCByb3cpKTtcblxuICByZXR1cm4gbmVpZ2hib3Vycztcbn1cbiIsIi8vINCX0LDQv9GD0YHQuiDQuNCz0YDRi1xuLy9cbi8vIC0g0YHQvtC30LTQsNGC0Ywg0Y3Qu9C10LzQtdC90YIg0Lgg0LTQvtCx0LDQstC40YLRjCDQtdCz0L4g0L3QsCDRgdGC0YDQsNC90LjRhtGDXG4vLyAtINGB0L7Qt9C00LDRgtGMINC90LAg0Y3RgtC+0Lwg0Y3Qu9C10LzQtdC90YLQtSDQuNCz0YDRgyDRgSDQv9C+0LzQvtGJ0YzRjiBgY3JlYXRlR2FtZU9mTGlmZWAg0YEg0YDQsNC30LzQtdGA0LDQvNC4INC/0L7Qu9GPIHggLyB5XG5cbmNvbnN0IHsgY3JlYXRlR2FtZU9mTGlmZSB9ID0gcmVxdWlyZShcIi4vY3JlYXRlR2FtZU9mTGlmZVwiKTtcblxuLy8gLSDQtNC70Y8g0L/RgNC+0LLQtdGA0LrQuCDRgdCy0L7QtdCz0L4g0LrQvtC00LAg0LzQvtC20L3QviDRgdC+0LfQtNCw0YLRjCDQtdGJ0LUg0L7QtNC40L0g0Y3Qu9C10LzQtdC90YIg0Lgg0YHQvtC30LTQsNGC0Ywg0LLRgtC+0YDRg9GOINC40LPRgNGDINC90LAg0Y3RgtC+0Lkg0LbQtSDRgdGC0YDQsNC90LjRhtC1XG5jb25zdCBnYW1lV3JhcHBlcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgZ2FtZVdyYXBwZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChnYW1lV3JhcHBlcjEpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChnYW1lV3JhcHBlcjIpO1xuXG5jcmVhdGVHYW1lT2ZMaWZlKDMsIDMsIGdhbWVXcmFwcGVyMSk7XG5jcmVhdGVHYW1lT2ZMaWZlKDEwLCAxMCwgZ2FtZVdyYXBwZXIyKTtcbiIsIi8qKlxuICog0L/RgNC+0LLQtdGA0LrQsCDRh9GC0L4g0LXRgdGC0Ywg0LbQuNCy0YvQtSDQutC70LXRgtC60LhcbiAqIEBwYXJhbSBmaWVsZCB7bnVtYmVyW11bXX0gLSDRgdC+0YHRgtC+0Y/QvdC40LUg0L/QvtC70Y9cbiAqIEByZXR1cm4gYm9vbGVhblxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNBbnlvbmVBbGl2ZShmaWVsZDogYW55KSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCByb3cgPSBmaWVsZFtpXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvdy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgY29uc3QgY2VsbCA9IHJvd1tqXTtcbiAgICAgIGlmIChjZWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG4iXSwibmFtZXMiOlsiZHJhd0ZpZWxkIiwiZ2V0TmV4dFN0YXRlIiwiaXNBbnlvbmVBbGl2ZSIsImNyZWF0ZUdhbWVPZkxpZmUiLCJzaXplWCIsInNpemVZIiwiaHRtbEVsZW1lbnQiLCJnYW1lSXNSdW5uaW5nIiwidGltZXIiLCJpbm5lckhUTUwiLCJmaWVsZFdyYXBwZXIiLCJxdWVyeVNlbGVjdG9yIiwiYnV0dG9uIiwiZmllbGQiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJtYXAiLCJmaWxsIiwiY2VsbENsaWNrSGFuZGxlciIsIngiLCJ5Iiwic3RvcEdhbWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidGV4dENvbnRlbnQiLCJjbGVhckludGVydmFsIiwic3RhcnRHYW1lIiwic2V0SW50ZXJ2YWwiLCJhbGVydCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkNlbGxDbGljayIsInJvd0l0ZXJhdG9yIiwicm93Iiwicm93SW5kZXgiLCJjZWxsIiwiY29sdW1uSW5kZXgiLCJqb2luIiwidGFibGUiLCJldiIsImNsaWNrZWRFbGVtZW50IiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiTnVtYmVyIiwiZ2V0Q2VsbFN0YXRlIiwidW5kZWZpbmVkIiwiZ2V0TmV3Q2VsbFN0YXRlIiwiY3VycmVudENlbGxTdGF0ZSIsIm51bU9mQWxpdmVOZWlnaGJvdXJzIiwiZ2V0TnVtT2ZBbGl2ZU5laWdoYm91cnMiLCJpc0FycmF5IiwiY2VsbEluZGV4IiwiYW4iLCJjdXJyZW50U3RhdGUiLCJuZXdTdGF0ZSIsImNvbHVtbiIsIm5laWdoYm91cnMiLCJqIiwicmVxdWlyZSIsImdhbWVXcmFwcGVyMSIsImNyZWF0ZUVsZW1lbnQiLCJnYW1lV3JhcHBlcjIiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==