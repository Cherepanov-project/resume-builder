// import { useAppSellector } from '@/hooks/cvTemplateHooks';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { default as Tool } from '@mui/material/Tooltip';

import './BasicToolTip.scss';
type BasicToolTipType = {
  props: number,
}
const BasicTooltip: React.FC<BasicToolTipType> = (props) => {

  return (
    <Tool title="Delete">
      <IconButton>
        <DeleteIcon
          sx={{
            fontSize: props ? 30 : 30 + props,
          }}
        />
      </IconButton>
    </Tool>
  );
};

export default BasicTooltip;
