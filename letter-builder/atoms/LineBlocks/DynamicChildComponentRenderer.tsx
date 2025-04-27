import { FC, lazy, memo, Suspense } from "react";
import ComponentPreloader from "../ComponentPreloader";

export interface DynamicChildComponentRendererProps {
  source?: string;
  Component: string;
  id: string;
}

const DynamicChildComponentRenderer: FC<DynamicChildComponentRendererProps> = ({
  Component,
  id,
}) => {
  if (!Component) return null;
  const DynamicComponent = lazy(() =>
    import(`../LineBlocksContent/${Component}/index.ts`).catch(() => ({
      default: () => <div>Компонент не найден</div>,
    })),
  );

  return (
    <Suspense fallback={<ComponentPreloader />}>
      <DynamicComponent key={id} id={id} />
    </Suspense>
  );
};

export default memo(DynamicChildComponentRenderer);
