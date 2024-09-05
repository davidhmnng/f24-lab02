import { Shape } from "./shape";

function square(sideLen: number): Shape {
    return {
        computeArea: function (): number {
            return sideLen * sideLen
        },
        draw: function (): void {
            console.log(`Drawing a square with side length ${sideLen}`);
        }
    }
}

export { square }