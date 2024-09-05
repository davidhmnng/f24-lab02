import { Shape } from "./shape";


interface Rectangle {
    width: number,
    height: number,
    computeArea: () => number
}

function newRectangle(width: number, height: number): Shape {
    return {
        computeArea: function (): number {
            return width * height
        },
        draw: function (): void {
            console.log(`Drawing a rectangle with width ${width} and height ${height}`);
        }
    }
}

export { Rectangle, newRectangle }
