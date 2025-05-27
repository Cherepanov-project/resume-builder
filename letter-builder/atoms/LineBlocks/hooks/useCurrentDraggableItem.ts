import { CustomLayout, T_BlockElement } from "../../../../src/types/landingBuilder";
import { useTypedSelector } from "../../../hooks/cvTemplateHooks"

export const useCurrentDraggableItem = (takeOnlyChild: boolean = true): T_BlockElement | null => {
    const currentDraggableItem = useTypedSelector((state) => state.letterLayout.currentDraggableItem);

    if (!currentDraggableItem) return null;
    const isChild = (currentDraggableItem as unknown as CustomLayout).props.isChild;

    return takeOnlyChild === isChild ? currentDraggableItem as T_BlockElement : null;
} 