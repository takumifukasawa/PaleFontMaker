import { ShapeFont } from './shapeFont.ts';

const ty = 19; // yの上端
const by = 109; // yの下端

export const fontCircuit: ShapeFont = {
    rawCellWidth: 91,
    rawCellHeight: 150,
    colNum: 18,
    lineWidth: 6,
    dotLineWidth: 4,
    dotRadius: 5,
    charInfo: [
        {
            char: 'A',
            // prettier-ignore
            lines: [
                [
                    15, by, // 左下
                    45, ty,
                    76, by
                ],
                [
                    25, 82,
                    67, 82
                ]
            ],
            // prettier-ignore
            dots: [
                25, 82,
                66, 82
            ],
            // prettier-ignore
            strokeDots: [
                15, by,
                76, by
            ],
        },
        {
            char: 'B',
            // prettier-ignore
            lines: [
                [
                    22, 61, // 左側の中点
                    60, 61, // 右の中点
                    70, 52, // 上に反時計回りに進む
                    70, 28,
                    59, ty,
                    23, ty,
                    23, by,
                    59, by,
                    73, 97,
                    73, 73,
                    60, 61
                ]
            ],
            // prettier-ignore
            dots: [
                22, 61,
                60, 61
            ],
        },
        {
            char: 'B',
            // prettier-ignore
            lines: [
                [
                    74, ty,
                    40, ty,
                    19, 38,
                    19, 89,
                    40, by,
                    74, by
                ]
            ],
            // prettier-ignore
            strokeDots: [
                74, ty,
                74, by
            ],
        },
    ],
};
