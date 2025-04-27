import React, { Suspense, lazy, memo } from "react";
import { DynamicComponentRendererProps } from "@/types/landingBuilder";
import ComponentPreloader from "@/components/atoms/ComponentPreloader";

export type LetterDynamicComponentRendererProps = DynamicComponentRendererProps;

export const DynamicComponentRenderer: React.FC<LetterDynamicComponentRendererProps> = memo(
  ({ id, Component, props, columns, source, children, layout, containerId }) => {
    const DynamicComponent = lazy(() => import(`../${source}/LineBlocks/index.ts`));

    return (
      <Suspense fallback={<ComponentPreloader />}>
        <div style={{ position: "relative" }}>
          <DynamicComponent
            id={id}
            key={Component}
            props={props}
            columns={columns}
            source={source}
            children={children}
            layout={layout}
            containerId={containerId}
            widths={(props as unknown as { blockWidth: string[] }).blockWidth} 
          />
        </div>
      </Suspense>
    );
  },
);
