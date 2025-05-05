// import { ShapeCharInfo, ShapeFont } from './shapeFont.ts';
import { fontCircuit } from './font-circuit.ts';
import { createShapeFontRenderer } from './shapeFontRenderer.ts';
import { renderShapeFontCircuit } from './renderShapeFontCircuit.ts';

const canvasWidth = 4096;
const canvasHeight = canvasWidth / 4;

const canvas = document.getElementById('js-canvas') as HTMLCanvasElement;

const shapeFontRenderer = createShapeFontRenderer(canvas, fontCircuit, canvasWidth, canvasHeight);

const tick = () => {
    renderShapeFontCircuit(shapeFontRenderer);
    // requestAnimationFrame(tick);
};

requestAnimationFrame(tick);
