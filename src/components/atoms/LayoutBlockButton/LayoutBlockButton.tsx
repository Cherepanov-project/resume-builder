
import { useAppSellector } from '@/hooks/cvTemplateHooks';
import { ILayoutBlock } from '@/types/landingBuilder';

const LayoutBlockButton: React.FC<ILayoutBlock> = ({ props }) => {
  console.log(props)
  
  const { activeElements } = useAppSellector((state) => state.layout);
  console.log(activeElements)
  return (
    <div style={props.wrapperStyle}>
      <button style={props.style}>{props.text}</button>
    </div>
  );
};

export default LayoutBlockButton;
