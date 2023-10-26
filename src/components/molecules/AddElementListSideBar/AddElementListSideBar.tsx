import { useAppSellector } from '../../../hooks/cvTemplateHooks';
import PresetButton from '../ConstructorPresetsList';
import ButtonEditForm from '../ElementEditMenu/';

import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AddElementListSideBar = () => {
  const edit = useAppSellector((state) => state.landigBuilder.edit);
  const editingElement = edit ? edit.element : null;

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        Button
      </AccordionSummary>
      <AccordionDetails>
        {editingElement === 'button' ? <ButtonEditForm /> : <PresetButton />}
      </AccordionDetails>
    </Accordion>
  );
};

export default AddElementListSideBar;
