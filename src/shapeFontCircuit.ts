import { ShapeCharInfoBase, ShapeFontBase } from './shapeFont.ts';

// const L = "l"; // line
export const FontCircuitDotTypeDot = "d"; // dot
export const FontCircuitDotTypeStrokeDot = "sd";  // stroke dot

// type DesignType = 'l' | 'd' | 'sd';
type DesignType = 'd' | 'sd';

type Path = [number, number, DesignType?];

export type ShapeFontCircuitCharInfo = ShapeCharInfoBase & {
    char: string;
    paths: Path[][];
};

export type ShapeFontCircuit = ShapeFontBase<ShapeFontCircuitCharInfo> & {
    lineWidth: number;
    dotLineWidth: number;
    dotRadius: number;
    charInfo: ShapeFontCircuitCharInfo[];
};
