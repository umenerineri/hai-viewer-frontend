import { FC } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { SlReload } from "react-icons/sl";
import { useControls } from "react-zoom-pan-pinch";

import { IconButton } from "@/components/ui/IconButton";

import { controlWrapper } from "./Control.css";

export const Control: FC = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();

    return (
        <div className={controlWrapper}>
            <IconButton
                onClick={() => zoomIn()}
                variant="transparent"
                color="white"
                icon={FiPlus}
            />
            <IconButton
                onClick={() => zoomOut()}
                variant="transparent"
                color="white"
                icon={FiMinus}
            />
            <IconButton
                onClick={() => resetTransform()}
                variant="transparent"
                color="white"
                icon={SlReload}
            />
        </div>
    );
};
