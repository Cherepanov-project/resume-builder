import { useAppSellector } from '../../../hooks/cvTemplateHooks';
import PresetButton from '../ConstructorPresetsList';
import ElementEdit from '../ElementEditMenu/ElementEditMenu';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ConstructorList = () => {
  const edit = useAppSellector((state): string => state.previewElements.edit);

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
        <AccordionDetails>{edit ? <ElementEdit /> : <PresetButton />}</AccordionDetails>
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
