import { DynamicBlockProps } from '@/types/landingBuilder';

const LayoutBlockButton: React.FC<DynamicBlockProps> = ({ props }) => {
  return (
    <div style={props.wrapperStyle}>
      <button style={props.textStyle}>{props.text}</button>
    </div>
  );
};

export default LayoutBlockButton;
