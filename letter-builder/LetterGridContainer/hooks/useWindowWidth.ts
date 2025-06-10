import { useEffect } from "react";

import { useAppDispatch, useTypedSelector } from "../../hooks/cvTemplateHooks";
import { setWindowWidth } from "../../../src/store/LetterBuilderStore/letterLayoutSlice";

export const useWindowWidth = () => {
    const dispatch = useAppDispatch();
    const width = useTypedSelector((state) => state.layout.windowWidth);

    useEffect(() => {
        const handleResize = () => {
            dispatch(setWindowWidth(window.innerWidth));
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return width;
}