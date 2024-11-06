import { useCallback, useMemo, useState } from "react";

import { ViewerDrawingData } from "@/model";

import { useViewerData } from "@/usecase/getViwerData";
import { AbsoluteVector, getAbsoluteVectorToShiftForCentering } from "@/utils/viewer";

export const useViewer = () => {
    const { data, refetch } = useViewerData();

    const getGridSize = useCallback((data: ViewerDrawingData[]) => {
        const xValues = data.map((item) => item.position.x);
        const yValues = data.map((item) => item.position.y);

        const maxX = Math.max(...xValues);
        const minX = Math.min(...xValues);
        const maxY = Math.max(...yValues);
        const minY = Math.min(...yValues);

        return {
            cols: maxX - minX + 1,
            rows: maxY - minY + 1,
            offsetX: minX,
            offsetY: -maxY,
        };
    }, []);

    const { rows, cols, offsetX, offsetY } = useMemo(() => getGridSize(data), [data, getGridSize]);

    return {
        data,
        refetch,
        grid: { rows, cols },
        offset: { x: offsetX, y: offsetY },
    };
};

export const useViewerTransform = () => {
    const [absoluteVectorToShiftForCentering, setAbsoluteVectorToShiftForCentering] =
        useState<AbsoluteVector>({ height: 0, width: 0 });

    const handleReset = useCallback(
        (dataLength: number) => {
            const absoluteVector: AbsoluteVector = getAbsoluteVectorToShiftForCentering(
                dataLength,
                window.innerHeight
            );
            console.log(absoluteVector);

            setAbsoluteVectorToShiftForCentering({
                height: absoluteVector.height,
                width: absoluteVector.width,
            });
            console.log(absoluteVector);
        },
        [setAbsoluteVectorToShiftForCentering]
    );

    return { absoluteVectorToShiftForCentering, handleReset };
};
