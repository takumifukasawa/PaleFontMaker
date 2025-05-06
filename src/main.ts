import { fontCircuit } from '@/PaleGL/shapeFont/fontCircuit/font-circuit.ts';
import { createShapeFontRenderer } from '@/PaleGL/shapeFont/shapeFontRenderer.ts';
import { renderShapeFontCircuit } from '@/PaleGL/shapeFont/fontCircuit/renderShapeFontCircuit.ts';

const canvasWidth = 4096;
const canvasHeight = canvasWidth / 4;

const canvas = document.getElementById('js-canvas') as HTMLCanvasElement;

const shapeFontRenderer = createShapeFontRenderer(canvas, fontCircuit, canvasWidth, canvasHeight);

const tick = () => {
    renderShapeFontCircuit(shapeFontRenderer);
    // requestAnimationFrame(tick);
};

requestAnimationFrame(tick);
