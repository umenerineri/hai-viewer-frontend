export const VIEWER_CARD_SIZE_NUMBER = 256 as const;

export type Position = {
    x: number;
    y: number;
};

export type ViewerDrawingData = {
    position: Position;
    url: string;
};
