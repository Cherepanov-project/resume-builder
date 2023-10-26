import { FC } from 'react';
import { Button } from '@mui/material';
import { IElement } from '../../../types/landingBuilder';

interface IWorkSpaceElementsProps {
  elements: IElement[];
}

const WorkSpaceElements: FC<IWorkSpaceElementsProps> = ({ elements }) => {
  const renderedArr =
    elements && elements.length
      ? elements.map((el, i) => {
          if (el.element === 'button') {
            return (
              <Button key={i} style={el.style} variant="contained">
                {el.content}
              </Button>
            );
          }
        })
      : null;

  return <>{renderedArr}</>;
};

export default WorkSpaceElements;
