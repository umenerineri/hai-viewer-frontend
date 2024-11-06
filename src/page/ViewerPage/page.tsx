"use client";

import { FC } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

import { useViewer } from "./hooks";

import { ViewerCard } from "@/components/application/ViewerCard";
import { ViewerControl } from "@/components/application/ViewerControl";
import { ViewerGrid } from "@/components/application/ViewerGrid";

import { viewerGrid, wrapper } from "./page.css";

export const ViewerPage = () => {
    return (
        <div className={wrapper}>
            <TransformWrapper
                initialScale={1}
                initialPositionX={0}
                initialPositionY={0}
                minScale={0} // 無限ズームアウトを可能にする
                limitToBounds={false}
            >
                <>
                    <ViewerControl />
                    <TransformComponent>
                        <InternalPage />
                    </TransformComponent>
                </>
            </TransformWrapper>
        </div>
    );
};

const InternalPage: FC = () => {
    const { data } = useViewer();

    return (
        <ViewerGrid className={viewerGrid}>
            {data.map((img, index) => (
                <ViewerCard key={index} x={img.position.x} y={img.position.y} src={img.url} />
            ))}
        </ViewerGrid>
    );
};
