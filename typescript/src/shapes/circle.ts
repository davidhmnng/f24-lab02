import { Shape } from "./shape";


function circle(radius: number): Shape {
    return {
        computeArea: function (): number {
            return Math.PI * radius * radius
        },
        draw: function (): void {
            console.log(`Drawing a circle with radius ${radius}`); // Draw method
        }
    }
}

export { circle }
