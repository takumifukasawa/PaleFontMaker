// import { ShapeCharInfo, ShapeFont } from './shapeFont.ts';
import { fontCircuit } from './font-circuit.ts';
import { createShapeFontRenderer } from './shapeFontRenderer.ts';
import { renderShapeFont } from './renderShapeFont.ts';

const canvasWidth = 4096;
const canvasHeight = canvasWidth / 4;

const canvas = document.getElementById('js-canvas') as HTMLCanvasElement;
// const ctx = canvas.getContext('2d')!;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

// const drawChar = (fontData: ShapeFont, charInfo: ShapeCharInfo, srcX: number, srcY: number, ratio: number) => {
//     const { lineWidth, dotLineWidth, dotRadius } = fontData;
//     const { lines, dots, strokeDots } = charInfo;
//
//     // draw lines
//     ctx.save();
//     ctx.lineWidth = lineWidth * ratio;
//     ctx.lineCap = 'round';
//     ctx.fillStyle = 'black';
//     ctx.strokeStyle = 'black';
//     for (let i = 0; i < lines.length; i++) {
//         const path = lines[i];
//         const pathNum = path.length / 2;
//         ctx.beginPath();
//         for (let j = 0; j < pathNum; j++) {
//             const beginIndex = j * 2;
//             const fromX = path[beginIndex];
//             const fromY = path[beginIndex + 1];
//             const toIndex = beginIndex + 2;
//             const toX = path[toIndex];
//             const toY = path[toIndex + 1];
//             ctx.moveTo(srcX + fromX * ratio, srcY + fromY * ratio);
//             ctx.lineTo(srcX + toX * ratio, srcY + toY * ratio);
//         }
//         ctx.closePath();
//         ctx.stroke();
//     }
//     ctx.restore();
//
//     // draw dots
//     ctx.save();
//     ctx.lineWidth = dotLineWidth * ratio;
//     ctx.lineCap = 'round';
//     ctx.fillStyle = 'black';
//     ctx.strokeStyle = 'black';
//     for (let i = 0; i < dots.length; i++) {
//         const dot = dots[i];
//         ctx.beginPath();
//         ctx.arc(srcX + dot[0] * ratio, srcY + dot[1] * ratio, dotRadius * ratio, 0, Math.PI * 2);
//         ctx.closePath();
//         ctx.fill();
//         ctx.stroke();
//     }
//     ctx.restore();
//
//     // draw stroke dots
//     ctx.save();
//     ctx.lineWidth = dotLineWidth * ratio;
//     ctx.lineCap = 'round';
//     ctx.fillStyle = 'white';
//     ctx.strokeStyle = 'black';
//     for (let i = 0; i < strokeDots.length; i++) {
//         const dot = strokeDots[i];
//         ctx.beginPath();
//         ctx.arc(srcX + dot[0] * ratio, srcY + dot[1] * ratio, dotRadius * ratio, 0, Math.PI * 2);
//         ctx.closePath();
//         ctx.fill();
//         ctx.stroke();
//     }
//     ctx.restore();
// };
//
// const drawFont = (fontData: ShapeFont) => {
//     const { colNum } = fontData;
//     const charNum = fontData.charInfo.length;
//     const rowNum = Math.ceil(charNum / colNum);
//     const fontAspect = fontData.rawCellWidth / fontData.rawCellHeight; // w / h
//     const cellWidth = Math.floor(canvasWidth / colNum);
//     const ratio = cellWidth / fontData.rawCellWidth;
//     const cellHeight = Math.floor(cellWidth / fontAspect);
//     for (let y = 0; y < rowNum; y++) {
//         for (let x = 0; x < colNum; x++) {
//             const charIndex = y * colNum + x;
//             if (charIndex >= charNum) {
//                 break;
//             }
//             const cellX = x * cellWidth;
//             const cellY = y * cellHeight;
//             const charInfo = fontData.charInfo[charIndex];
//             ctx.save();
//             drawChar(fontData, charInfo, cellX, cellY, ratio);
//             ctx.restore();
//         }
//     }
// };

const shapeFontRenderer = createShapeFontRenderer(canvas, fontCircuit, canvasWidth, canvasHeight);

const tick = () => {
    renderShapeFont(shapeFontRenderer);
    // requestAnimationFrame(tick);
};

requestAnimationFrame(tick);
