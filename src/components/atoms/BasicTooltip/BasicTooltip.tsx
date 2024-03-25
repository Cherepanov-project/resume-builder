import { useAppSellector } from '@/hooks/cvTemplateHooks';
import { T_BlockElement } from '@/types/landingBuilder';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import {default as Tool} from '@mui/material/Tooltip';
import React, { useEffect } from 'react';
import './BasicToolTip.scss'

const BasicTooltip: React.FC<T_BlockElement> = () => {
  const id = useAppSellector((state) => state.settingsPanel.sectionID);
  const activeElement = useAppSellector(state => state.layout.activeElements)
  const size: number = Number(activeElement.map(el => el.layout.i === id?  el.props.style?.size: null).join())
  
  useEffect(() => {
  }, [])

  return (
    <Tool title="Delete">
      <IconButton>
        <DeleteIcon
          sx={{
            fontSize: size === 0 ? 30 : 30 + size
          }}
        />
      </IconButton>
    </Tool>
  );
}

export default BasicTooltip;