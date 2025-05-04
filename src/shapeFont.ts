export type ShapeCharInfo = {
    char: string;
    lines: number[][]; // fromX, fromY,,,
    dots?: number[]; // fromX, fromY
    strokeDots?: number[]; // fromX, fromY
};

export type ShapeFont = {
    rawCellWidth: number;
    rawCellHeight: number;
    colNum: number;
    lineWidth: number;
    dotLineWidth: number;
    dotRadius: number;
    charInfo: ShapeCharInfo[];
};
