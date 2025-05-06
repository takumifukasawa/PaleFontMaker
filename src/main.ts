import { createShapeFontRenderer } from '@/PaleGL/shapeFont/shapeFontRenderer.ts';
import { renderShapeFontCircuit } from '@/PaleGL/shapeFont/shapeFontCircuit/renderShapeFontCircuit.ts';
import { shapeFontCircuitService } from '@/PaleGL/shapeFont/shapeFontCircuit/shapeFontCircuitService.ts';

const canvasWidth = 4096;
const canvasHeight = canvasWidth / 4;

const canvas = document.getElementById('js-canvas') as HTMLCanvasElement;

const shapeFontRenderer = createShapeFontRenderer(shapeFontCircuitService, canvas, canvasWidth, canvasHeight);

const tick = () => {
    renderShapeFontCircuit(shapeFontRenderer);
    // requestAnimationFrame(tick);
};

requestAnimationFrame(tick);
