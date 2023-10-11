import { useAppSellector } from '../../../hooks/cvTemplateHooks';
import PresetButton from '../ConstructorPresetsList';
import ElementEdit from '../ElementEditMenu/ElementEditMenu';

import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IElement } from '../../../types/landingBuilder';

const ConstructorList = () => {
  const edit: IElement | null = useAppSellector((state) => state.previewElements.edit);
  const editingElement = edit ? edit.element : null;

  return (
    <div style={{ height: 40 }}>
      <Accordion style={{ marginTop: 50 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          Button
        </AccordionSummary>
        <AccordionDetails>
          {editingElement === 'button' ? <ElementEdit /> : <PresetButton />}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          Accordion
        </AccordionSummary>
        <AccordionDetails>SDFSDFDSF</AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          Text
        </AccordionSummary>
        <AccordionDetails>SDFSDFDSF</AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ConstructorList;
