import { newRenderer } from "./renderer";
import { Rectangle, newRectangle } from "./shapes/rectangle";
import { square } from "./shapes/square";
import { circle } from "./shapes/circle";
import { Shape } from "./shapes/shape"; 

const rectangle: Shape = newRectangle(2, 3)
const renderer = newRenderer(rectangle)
renderer.draw();

const mySquare: Shape = square(4);
const squareRenderer = newRenderer(mySquare);
squareRenderer.draw();

const myCircle: Shape = circle(5);
const circleRenderer = newRenderer(myCircle);
circleRenderer.draw();