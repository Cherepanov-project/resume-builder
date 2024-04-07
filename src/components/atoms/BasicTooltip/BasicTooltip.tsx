// import { useAppSellector } from '@/hooks/cvTemplateHooks';
import { T_BlockElement } from '@/types/landingBuilder';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { default as Tool } from '@mui/material/Tooltip';

import './BasicToolTip.scss';

const BasicTooltip: React.FC<T_BlockElement> = (props) => {
  const size = props.props.size!;

  return (
    <Tool title="Delete">
      <IconButton>
        <DeleteIcon
          sx={{
            fontSize: size === 0 ? 30 : 30 + size,
          }}
        />
      </IconButton>
    </Tool>
  );
};

export default BasicTooltip;
