import { ILayoutBlock } from '@/types/landingBuilder';

import classes from './HeaderTitle.module.scss';

const HeaderTitle: React.FC<ILayoutBlock> = ({ props }) => {
  return(
    <div style={{...props.wrapperStyle, ...props.style}}>
      <h1
        style={{...props!.textStyle, ...props.inputStyle}} 
        className={classes['h1']}
      >
        {props.text || 'Заголовок'}
      </h1>
    </div>
  )
};

export default HeaderTitle;