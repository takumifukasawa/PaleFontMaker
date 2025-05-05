import { ShapeFontBase } from './shapeFont.ts';

export const FontCircuitDotTypeDot = 'd'; // dot
export const FontCircuitDotTypeStrokeDot = 'sd'; // stroke dot
export const FontCircuitClosePath = 'cp'; // close path

type DesignType = 'd' | 'sd' | 'cp'; // dots, stroke dot, close path

// type Coord = [number, number];
// type Line = [number, number]; // index, index
// 
// type AnchorPoint = [number, number, (DesignType | DesignType[])?];
// type AnchorPoint = [number, number, boolean?]; // fromIndex, toIndex, isClosePath?

// type Path = AnchorPoint[];

// export type ShapeFontCircuitChar = Path[];
export type ShapeFontCircuitChar = [
    number[], // x, y ... : 2要素ずつ区切る
    number[][], // lines: fromIndex, toIndex ... : 2要素ずつ区切る. 末尾が-1ならclosePath
    number[], // dot indices
    number[], // stroke dot indices
]

export type ShapeFontCircuit = ShapeFontBase<ShapeFontCircuitChar> & {
    lineWidth: number;
    dotLineWidth: number;
    dotRadius: number;
    charInfo: Map<string, ShapeFontCircuitChar>;
};

// export const checkDesignType = (designType: DesignType | DesignType[] | undefined, needle: DesignType) => {
//     if (!designType) {
//         return false;
//     }
//     if (Array.isArray(designType)) {
//         return designType.includes(needle);
//     }
//     return designType === needle;
// };
