
import { ILayoutBlock } from '@/types/landingBuilder';

const LayoutBlockButton: React.FC<ILayoutBlock> = ({ props }) => {
  console.log(props)
  return (
    <div style={props.wrapperStyle}>
      <button style={props.style}>{props.text}</button>
    </div>
  );
};

export default LayoutBlockButton;
