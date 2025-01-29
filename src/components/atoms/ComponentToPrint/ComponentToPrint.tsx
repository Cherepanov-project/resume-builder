import React, { ReactNode } from 'react';

type Ref = React.ForwardedRef<null>;

interface ComponentToPrintProps {
  content: ReactNode;
}

export const ComponentToPrint = React.forwardRef((props: ComponentToPrintProps, ref: Ref) => {
  const { content } = props;

  return <div ref={ref}>{content}</div>;
});
