import { buildShapeFontAtlas, ShapeFontAtlas } from './buildShaderFontAtlas.ts';
import { ShapeFontBase } from './shapeFont.ts';

export type ShapeFontRenderer<U, T extends ShapeFontBase<U>> = {
    shapeFont: T;
    shapeFontAtlas: ShapeFontAtlas;
    canvasWidth: number;
    canvasHeight: number;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
};

export const createShapeFontRenderer: <U, T extends ShapeFontBase<U>>(
    srcCanvas: HTMLCanvasElement | null,
    shapeFont: T,
    canvasWidth: number,
    canvasHeight: number
) => ShapeFontRenderer<U, T> = (srcCanvas, shapeFont, canvasWidth, canvasHeight) => {
    const canvas = srcCanvas || document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const shapeFontAtlas = buildShapeFontAtlas(shapeFont, canvasWidth, canvasHeight);

    return { shapeFont, shapeFontAtlas, canvasWidth, canvasHeight, canvas, ctx };
};
