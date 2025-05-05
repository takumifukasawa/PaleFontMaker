import { FontCircuitDotTypeDot, FontCircuitDotTypeStrokeDot, ShapeFontCircuit } from './shapeFontCircuit.ts';

const ty = 19; // yの上端
const by = 109; // yの下端

export const fontCircuit: ShapeFontCircuit = {
    rawCellWidth: 91,
    rawCellHeight: 150,
    colNum: 18,
    lineWidth: 6,
    dotLineWidth: 4,
    dotRadius: 5,
    charInfo: [
        {
            char: 'A',
            paths: [
                [
                    [15, by, FontCircuitDotTypeStrokeDot],
                    [45, ty],
                    [76, by, FontCircuitDotTypeStrokeDot],
                ],
                [
                    [25, 82, FontCircuitDotTypeDot],
                    [67, 82, FontCircuitDotTypeDot],
                ],
            ],
        },
        {
            char: 'B',
            paths: [
                [
                    [22, 61, FontCircuitDotTypeDot], // 左側の中点
                    [60, 61, FontCircuitDotTypeDot], // 右の中点
                    [70, 52], // 上に反時計回りに進む
                    [70, 28],
                    [59, ty],
                    [23, ty],
                    [23, by],
                    [59, by],
                    [73, 97],
                    [73, 73],
                    [60, 61],
                ],
            ],
        },
        {
            char: 'C',
            paths: [
                [
                    [74, ty, FontCircuitDotTypeDot],
                    [40, ty],
                    [19, 38],
                    [19, 89],
                    [40, by],
                    [74, by, FontCircuitDotTypeDot],
                ],
            ],
        },
    ],
};
