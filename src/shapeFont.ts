export type ShapeCharInfoBase = {
    char: string;
};

export type ShapeFontBase<T extends ShapeCharInfoBase> = {
    rawCellWidth: number;
    rawCellHeight: number;
    colNum: number;
    charInfo: T[];
};
