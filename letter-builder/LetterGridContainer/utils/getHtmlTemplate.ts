import { Layout } from "react-grid-layout";
import { IGridContainers } from "../../../src/store/LetterBuilderStore/letterLayoutSlice";

import classes from "../LetterGridContainer.module.scss";

export const getHtmlTemplate = (container: IGridContainers, workspaceLayout: Layout[], width: number) => `
      <div class="${classes["container"]}">
        <ResponsiveGridLayout
          class="${classes["grid"]}"
          layout="${JSON.stringify(workspaceLayout)}"
          cols="1"
          rowHeight="${container.height}"
          width="${String(width - 76 - (Number(width) - 120) * 0.3)}"
          margin="[8, 8]"
          isDraggable="false"
          isDroppable="false"
          isResizable="false"
        >
          ${container.elements.activeElements
    .map(
      (el) => `
            <div
              key="${el.layout.i}"
              class="${classes["item"]}"
            >
              <DynamicComponentRenderer
                id="${el.id}"
                Component="${el.name}"
                source="${el.source || "atoms"}"
                props="${JSON.stringify(el.props)}"
                columns="${el.columns || 1}"
                layout="${JSON.stringify(el.layout)}"
                children="${JSON.stringify(el.children)}"
                containerId="${container.id}"
              />
            </div>
          `,
    )
    .join("")}
        </ResponsiveGridLayout>
      </div>
    `;