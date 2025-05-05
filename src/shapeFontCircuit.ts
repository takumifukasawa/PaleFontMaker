import { ShapeFontBase } from './shapeFont.ts';
// import {renderShapeFontCircuit} from "./renderShapeFontCircuit.ts";

// const L = "l"; // line
export const FontCircuitDotTypeDot = "d"; // dot
export const FontCircuitDotTypeStrokeDot = "sd";  // stroke dot

// type DesignType = 'l' | 'd' | 'sd';
type DesignType = 'd' | 'sd';

type AnchorPoint = [number, number, DesignType?];

type Path = AnchorPoint[];

// export type ShapeFontCircuitCharInfo = ShapeCharInfoBase & {
//     char: string;
//     paths: Path[];
// };

export type ShapeFontCircuitChar = Path[];

export type ShapeFontCircuit = ShapeFontBase<ShapeFontCircuitChar> & {
    lineWidth: number;
    dotLineWidth: number;
    dotRadius: number;
    charInfo: Map<string, ShapeFontCircuitChar>
};
