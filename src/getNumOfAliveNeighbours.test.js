"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getNumOfAliveNeighbours_1 = require("./getNumOfAliveNeighbours");
describe("getNumOfAliveNeighbours", () => {
    it("is a function", () => {
        expect(typeof getNumOfAliveNeighbours_1.getNumOfAliveNeighbours).toBe("function");
    });
    [
        { x: 0, y: 0, field: [[]], expectedResult: 0 },
        { x: 0, y: 0, field: [[0], [0]], expectedResult: 0 },
        { x: 0, y: 0, field: [[1], [1]], expectedResult: 1 },
        {
            x: 0,
            y: 0,
            field: [
                [0, 1, 0],
                [1, 0, 0],
            ],
            expectedResult: 2,
        },
        {
            x: 0,
            y: 0,
            field: [
                [1, 1],
                [1, 0],
            ],
            expectedResult: 2,
        },
        {
            x: 1,
            y: 0,
            field: [
                [1, 1],
                [1, 0],
            ],
            expectedResult: 2,
        },
        {
            x: 0,
            y: 1,
            field: [
                [1, 1],
                [1, 0],
            ],
            expectedResult: 2,
        },
        {
            x: 1,
            y: 1,
            field: [
                [1, 1],
                [1, 0],
            ],
            expectedResult: 3,
        },
        {
            x: 0,
            y: 0,
            field: [
                [1, 1],
                [1, 1],
            ],
            expectedResult: 3,
        },
    ].forEach((el) => {
        it(`should return ${el.expectedResult} for cell (${el.x},${el.y}) in field ${JSON.stringify(el.field)}`, () => {
            expect((0, getNumOfAliveNeighbours_1.getNumOfAliveNeighbours)(el.x, el.y, el.field)).toBe(el.expectedResult);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0TnVtT2ZBbGl2ZU5laWdoYm91cnMudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdldE51bU9mQWxpdmVOZWlnaGJvdXJzLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1RUFBb0U7QUFFcEUsUUFBUSxDQUFDLHlCQUF5QixFQUFFLEdBQUcsRUFBRTtJQUN2QyxFQUFFLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRTtRQUN2QixNQUFNLENBQUMsT0FBTyxpREFBdUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxRCxDQUFDLENBQUMsQ0FBQztJQUVIO1FBQ0UsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsY0FBYyxFQUFFLENBQUMsRUFBRTtRQUM5QyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUUsQ0FBQyxFQUFFO1FBQ3BELEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLGNBQWMsRUFBRSxDQUFDLEVBQUU7UUFDcEQ7WUFDRSxDQUFDLEVBQUUsQ0FBQztZQUNKLENBQUMsRUFBRSxDQUFDO1lBQ0osS0FBSyxFQUFFO2dCQUNMLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNWO1lBQ0QsY0FBYyxFQUFFLENBQUM7U0FDbEI7UUFDRDtZQUNFLENBQUMsRUFBRSxDQUFDO1lBQ0osQ0FBQyxFQUFFLENBQUM7WUFDSixLQUFLLEVBQUU7Z0JBQ0wsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNQO1lBQ0QsY0FBYyxFQUFFLENBQUM7U0FDbEI7UUFDRDtZQUNFLENBQUMsRUFBRSxDQUFDO1lBQ0osQ0FBQyxFQUFFLENBQUM7WUFDSixLQUFLLEVBQUU7Z0JBQ0wsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNQO1lBQ0QsY0FBYyxFQUFFLENBQUM7U0FDbEI7UUFDRDtZQUNFLENBQUMsRUFBRSxDQUFDO1lBQ0osQ0FBQyxFQUFFLENBQUM7WUFDSixLQUFLLEVBQUU7Z0JBQ0wsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNQO1lBQ0QsY0FBYyxFQUFFLENBQUM7U0FDbEI7UUFDRDtZQUNFLENBQUMsRUFBRSxDQUFDO1lBQ0osQ0FBQyxFQUFFLENBQUM7WUFDSixLQUFLLEVBQUU7Z0JBQ0wsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNQO1lBQ0QsY0FBYyxFQUFFLENBQUM7U0FDbEI7UUFDRDtZQUNFLENBQUMsRUFBRSxDQUFDO1lBQ0osQ0FBQyxFQUFFLENBQUM7WUFDSixLQUFLLEVBQUU7Z0JBQ0wsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNQO1lBQ0QsY0FBYyxFQUFFLENBQUM7U0FDbEI7S0FDRixDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO1FBQ2YsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsY0FBYyxjQUFjLEVBQUUsQ0FBQyxDQUFDLElBQ3JELEVBQUUsQ0FBQyxDQUNMLGNBQWMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUU7WUFDN0MsTUFBTSxDQUFDLElBQUEsaURBQXVCLEVBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDeEQsRUFBRSxDQUFDLGNBQWMsQ0FDbEIsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9