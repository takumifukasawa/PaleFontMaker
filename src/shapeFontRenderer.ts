import { ShapeFont } from './shapeFont.ts';
import { buildShapeFontAtlas, ShapeFontAtlas } from './renderShapeFont.ts';

export type ShapeFontRenderer = {
    shapeFont: ShapeFont;
    shapeFontAtlas: ShapeFontAtlas;
    canvasWidth: number;
    canvasHeight: number;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
};

export const createShapeFontRenderer: (
    srcCanvas: HTMLCanvasElement | null,
    shapeFont: ShapeFont,
    canvasWidth: number,
    canvasHeight: number
) => ShapeFontRenderer = (srcCanvas, shapeFont, canvasWidth, canvasHeight) => {
    const canvas = srcCanvas || document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;

    const shapeFontAtlas = buildShapeFontAtlas(shapeFont, canvasWidth, canvasHeight);

    return { shapeFont, shapeFontAtlas, canvasWidth, canvasHeight, canvas, ctx };
};
