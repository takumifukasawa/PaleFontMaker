import { ShapeFontRenderer } from './shapeFontRenderer.ts';
import { ShapeFontCircuit, ShapeFontCircuitCharInfo } from './shapeFontCircuit.ts';

const renderChar: (
    ctx: CanvasRenderingContext2D,
    shapeFont: ShapeFontCircuit,
    charInfo: ShapeFontCircuitCharInfo,
    srcX: number,
    srcY: number,
    ratio: number
) => void = (ctx, shapeFont, charInfo, srcX, srcY, ratio) => {
    const { lineWidth, dotLineWidth, dotRadius } = shapeFont;
    const { paths } = charInfo;

    const dots: [number, number][] = [];
    const strokeDots: [number, number][] = [];

    // draw lines
    ctx.save();
    ctx.lineWidth = lineWidth * ratio;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'white';
    for (let i = 0; i < paths.length; i++) {
        for (let j = 0; j < paths[i].length - 1; j++) {
            const path = paths[i];
            const beginIndex = j;
            const toIndex = beginIndex + 1;
            const [fromX, fromY, fromDesignTypes] = path[beginIndex];
            const [toX, toY, toDesignTypes] = path[toIndex];

            if (fromDesignTypes?.includes('d')) {
                dots.push([fromX, fromY]);
            }
            if (fromDesignTypes?.includes('sd')) {
                strokeDots.push([fromX, fromY]);
            }
            if (toDesignTypes?.includes('d')) {
                dots.push([toX, toY]);
            }
            if (toDesignTypes?.includes('sd')) {
                strokeDots.push([toX, toY]);
            }

            // draw line
            ctx.beginPath();
            ctx.moveTo(srcX + fromX * ratio, srcY + fromY * ratio);
            ctx.lineTo(srcX + toX * ratio, srcY + toY * ratio);
            ctx.closePath();
            ctx.stroke();
        }
    }
    ctx.restore();
    
    // draw dots
    ctx.save();
    ctx.lineWidth = dotLineWidth * ratio;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'white';
    for (let i = 0; i < dots.length; i++) {
        const [x, y] = dots[i];
        ctx.beginPath();
        ctx.arc(srcX + x * ratio, srcY + y * ratio, dotRadius * ratio, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
    
    // draw stroke dots
    ctx.save();
    ctx.lineWidth = dotLineWidth * ratio;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.fillStyle = 'black';
    ctx.strokeStyle = 'white';
    for (let i = 0; i < strokeDots.length; i++) {
        const [x, y] = strokeDots[i];
        ctx.beginPath();
        ctx.arc(srcX + x * ratio, srcY + y * ratio, dotRadius * ratio, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
    ctx.restore();

    // const dots = paths.filter(elem => {
    //     for (let i = 0; i < elem.length; i++) {
    //         const [,, designTypes] = elem[i];
    //         if (designTypes?.includes("d")) {
    //             return true;
    //         }
    //     }
    //     return false;
    // });

    // // draw lines
    // ctx.save();
    // ctx.lineWidth = lineWidth * ratio;
    // ctx.lineCap = 'round';
    // ctx.fillStyle = 'white';
    // ctx.strokeStyle = 'white';
    // for (let i = 0; i < lines.length; i++) {
    //     const path = lines[i];
    //     const pathNum = path.length / 2;
    //     ctx.beginPath();
    //     for (let j = 0; j < pathNum; j++) {
    //         const beginIndex = j * 2;
    //         const fromX = path[beginIndex];
    //         const fromY = path[beginIndex + 1];
    //         const toIndex = beginIndex + 2;
    //         const toX = path[toIndex];
    //         const toY = path[toIndex + 1];
    //         ctx.moveTo(srcX + fromX * ratio, srcY + fromY * ratio);
    //         ctx.lineTo(srcX + toX * ratio, srcY + toY * ratio);
    //     }
    //     ctx.closePath();
    //     ctx.stroke();
    // }
    // ctx.restore();

    // if (dots) {
    //     // draw dots
    //     ctx.save();
    //     ctx.lineWidth = dotLineWidth * ratio;
    //     ctx.lineCap = 'round';
    //     ctx.fillStyle = 'white';
    //     ctx.strokeStyle = 'white';
    //     for (let i = 0; i < dots.length; i++) {
    //         const beginIndex = i * 2;
    //         const x = dots[beginIndex];
    //         const y = dots[beginIndex + 1];
    //         ctx.beginPath();
    //         ctx.arc(srcX + x * ratio, srcY + y * ratio, dotRadius * ratio, 0, Math.PI * 2);
    //         ctx.closePath();
    //         ctx.fill();
    //         ctx.stroke();
    //     }
    //     ctx.restore();
    // }

    // if (strokeDots) {
    //     // draw stroke dots
    //     ctx.save();
    //     ctx.lineWidth = dotLineWidth * ratio;
    //     ctx.lineCap = 'round';
    //     ctx.fillStyle = 'black';
    //     ctx.strokeStyle = 'white';
    //     for (let i = 0; i < strokeDots.length; i++) {
    //         const beginIndex = i * 2;
    //         const x = strokeDots[beginIndex];
    //         const y = strokeDots[beginIndex + 1];
    //         ctx.beginPath();
    //         ctx.arc(srcX + x * ratio, srcY + y * ratio, dotRadius * ratio, 0, Math.PI * 2);
    //         ctx.closePath();
    //         ctx.fill();
    //         ctx.stroke();
    //     }
    //     ctx.restore();
    // }
};

export const renderShapeFontCircuit: (shapeFontRenderer: ShapeFontRenderer<ShapeFontCircuit>) => void = (shapeFontRenderer) => {
    const { shapeFont, shapeFontAtlas, ctx, canvasWidth, canvasHeight } = shapeFontRenderer;
    const { rowNum, colNum, charNum, cellWidth, cellHeight, ratio } = shapeFontAtlas;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    for (let y = 0; y < rowNum; y++) {
        for (let x = 0; x < colNum; x++) {
            const charIndex = y * colNum + x;
            if (charIndex >= charNum) {
                break;
            }
            const cellX = x * cellWidth;
            const cellY = y * cellHeight;
            const charInfo = shapeFont.charInfo[charIndex];
            ctx.save();
            renderChar(ctx, shapeFont, charInfo, cellX, cellY, ratio);
            ctx.restore();
        }
    }
};
