export type ShapeFontBase<T> = {
    rawCellWidth: number;
    rawCellHeight: number;
    colNum: number;
    charInfo: Map<string, T>;
};
