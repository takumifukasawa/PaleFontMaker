import {
    ShapeFontCircuit,
} from './shapeFontCircuit.ts';

const ty = 19; // yの上端
const by = 109; // yの下端

const closePathIndex = -1;

export const fontCircuit: ShapeFontCircuit = {
    rawCellWidth: 91,
    rawCellHeight: 150,
    colNum: 18,
    lineWidth: 6,
    dotLineWidth: 4,
    dotRadius: 5,
    charInfo: new Map([
        [
            'A',
            [
                // coords
                // prettier-ignore
                [
                    15, by, // 0
                    45, ty, // 1
                    76, by, // 2
                    25, 82, // 3 // 横線
                    67, 82, // 4
                ],
                // lines
                // prettier-ignore
                [
                    [
                        0, 1, 2
                    ],
                    [
                        3, 4
                    ]
                ],
                // dots
                [3, 4],
                // stroke dots
                [0, 2],
            ],
        ],
        // [
        //     'A',
        //     [
        //         [
        //             // prettier-ignore
        //             [15, by, FontCircuitDotTypeStrokeDot],
        //             [45, ty],
        //             [76, by, FontCircuitDotTypeStrokeDot],
        //         ],
        //         [
        //             // prettier-ignore
        //             [25, 82, FontCircuitDotTypeDot],
        //             [67, 82, FontCircuitDotTypeDot],
        //         ],
        //     ],
        // ],
        // [
        //     'B',
        //     [
        //         [
        //             // prettier-ignore
        //             [22, 61, FontCircuitDotTypeDot], // 左側の中点
        //             [60, 61, FontCircuitDotTypeDot], // 右の中点
        //             [70, 52], // 上に反時計回りに進む
        //             [70, 28],
        //             [59, ty],
        //             [23, ty],
        //             [23, by],
        //             [59, by],
        //             [73, 97],
        //             [73, 73],
        //             [60, 61],
        //         ],
        //     ],
        // ],
        // [
        //     'C',
        //     [
        //         [
        //             // prettier-ignore
        //             [74, ty, FontCircuitDotTypeDot],
        //             [40, ty],
        //             [19, 38],
        //             [19, 89],
        //             [40, by],
        //             [74, by, FontCircuitDotTypeDot],
        //         ],
        //     ],
        // ],
        // [
        //     'D',
        //     [
        //         [
        //             // prettier-ignore
        //             [19, ty, FontCircuitDotTypeDot],
        //             [55, ty],
        //             [76, 37],
        //             [76, 90],
        //             [55, by, FontCircuitDotTypeDot],
        //             [19, by, FontCircuitClosePath],
        //         ],
        //     ],
        // ],
        // [
        //     'E',
        //     [
        //         [
        //             // prettier-ignore
        //             [71, ty, FontCircuitDotTypeStrokeDot],
        //             [23, ty],
        //             [23, by],
        //             [71, by, FontCircuitDotTypeStrokeDot],
        //         ],
        //         [
        //             // prettier-ignore
        //             [23, 61, FontCircuitDotTypeDot],
        //             [68, 61, FontCircuitDotTypeStrokeDot],
        //         ],
        //     ],
        // ],
        // [
        //     'F',
        //     [
        //         [
        //             // prettier-ignore
        //             [71, ty, FontCircuitDotTypeStrokeDot],
        //             [23, ty],
        //             [23, by],
        //         ],
        //         [
        //             // prettier-ignore
        //             [23, 66, FontCircuitDotTypeDot],
        //             [68, 66, FontCircuitDotTypeStrokeDot],
        //         ],
        //     ],
        // ],
        // [
        //     'G',
        //     [
        //         [
        //             // prettier-ignore
        //             [75, ty, FontCircuitDotTypeStrokeDot],
        //             [38, ty],
        //             [17, 38],
        //             [17, 90],
        //             [38, by],
        //             [75, by],
        //             [75, 66],
        //             [53, 66, FontCircuitDotTypeStrokeDot],
        //         ],
        //     ],
        // ],
        // [
        //     'H',
        //     [
        //         [
        //             // prettier-ignore
        //             [19, ty, FontCircuitDotTypeStrokeDot],
        //             [19, by, FontCircuitDotTypeStrokeDot],
        //         ],
        //         [
        //             [74, ty, FontCircuitDotTypeStrokeDot],
        //             [74, by, FontCircuitDotTypeStrokeDot],
        //         ],
        //         [
        //             // prettier-ignore
        //             [19, 61, FontCircuitDotTypeDot],
        //             [74, 61, FontCircuitDotTypeDot],
        //         ],
        //     ],
        // ],
        // [
        //     'I',
        //     [
        //         [
        //             // prettier-ignore
        //             [22, ty, FontCircuitDotTypeStrokeDot],
        //             [46, ty],
        //             [70, ty, FontCircuitDotTypeStrokeDot],
        //         ],
        //         [
        //             // prettier-ignore
        //             [46, ty, FontCircuitDotTypeDot],
        //             [46, by, FontCircuitDotTypeDot],
        //         ],
        //         [
        //             // prettier-ignore
        //             [22, by, FontCircuitDotTypeStrokeDot],
        //             [46, by],
        //             [70, by, FontCircuitDotTypeStrokeDot],
        //         ],
        //     ],
        // ],
        // [
        //     'J',
        //     [
        //         [
        //             // prettier-ignore
        //             [66, ty, FontCircuitDotTypeStrokeDot],
        //             [65, 90],
        //             [44, by],
        //             [22, by, FontCircuitDotTypeStrokeDot],
        //         ],
        //     ],
        // ],
        // [
        //     'k',
        //     [
        //         [
        //             // prettier-ignore
        //             [18, ty, FontCircuitDotTypeStrokeDot],
        //             [18, by, FontCircuitDotTypeStrokeDot],
        //         ],
        //         [
        //             // prettier-ignore
        //             [70, ty, FontCircuitDotTypeStrokeDot],
        //             [18, 83, FontCircuitDotTypeDot],
        //         ],
        //         [
        //             // prettier-ignore
        //             [70, by, FontCircuitDotTypeStrokeDot],
        //             [40, 57, FontCircuitDotTypeDot],
        //         ],
        //     ],
        // ],
        // [
        //     'L',
        //     [
        //         [
        //             // prettier-ignore
        //             [25, ty, FontCircuitDotTypeStrokeDot],
        //             [25, by],
        //             [72, by, FontCircuitDotTypeStrokeDot],
        //         ],
        //     ],
        // ],
        // [
        //     'M',
        //     [
        //         [
        //             // prettier-ignore
        //             [16, by, FontCircuitDotTypeStrokeDot],
        //             [16, ty],
        //             [46, 83],
        //             [76, ty],
        //             [76, by, FontCircuitDotTypeStrokeDot],
        //         ],
        //     ],
        // ],
        // [
        //     'N',
        //     [
        //         [
        //             // prettier-ignore
        //             [16, by, FontCircuitDotTypeStrokeDot],
        //             [16, ty],
        //             [76, by],
        //             [76, ty, FontCircuitDotTypeStrokeDot],
        //         ],
        //     ],
        // ],
        // [
        //     'O',
        //     [
        //         [
        //             // prettier-ignore
        //             [37, ty, FontCircuitDotTypeDot], // 左上から
        //             [57, ty],
        //             [75, 36],
        //             [75, 90],
        //             [57, by, FontCircuitDotTypeDot],
        //             [37, by],
        //             [19, 90],
        //             [19, 36, FontCircuitClosePath],
        //         ],
        //     ],
        // ],
        // [
        //     'P',
        //     [
        //         [
        //             // prettier-ignore
        //             [23, 109, FontCircuitDotTypeStrokeDot],
        //             [23, ty],
        //             [57, ty],
        //             [75, 31],
        //             [75, 57],
        //             [57, 73],
        //             [23, 73, FontCircuitDotTypeDot],
        //         ],
        //     ],
        // ],
        // [
        //     'Q',
        //     [
        //         [
        //             // prettier-ignore
        //             [70, 139, FontCircuitDotTypeStrokeDot],
        //             [57, by],
        //         ],
        //         [
        //             // prettier-ignore
        //             [37, ty], // 左上から
        //             [57, ty],
        //             [75, 36],
        //             [75, 90],
        //             [57, by, FontCircuitDotTypeDot],
        //             [37, by],
        //             [19, 90],
        //             [19, 36, FontCircuitClosePath],
        //         ],
        //     ],
        // ],
        // [
        //     'R',
        //     [
        //         [
        //             // prettier-ignore
        //         ]
        //     ]
        // ]
    ]),
};
