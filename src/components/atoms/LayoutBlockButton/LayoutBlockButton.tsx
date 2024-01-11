import { ILayoutBlock } from "@/types/landingBuilder";

const LayoutBlockButton: React.FC<ILayoutBlock> = ({ props }) => {
  
  return (
    <div style={props.wrapperStyle}>
      <button style={props.textStyle}>{props.text}</button>
    </div>
  );
};

export default LayoutBlockButton;