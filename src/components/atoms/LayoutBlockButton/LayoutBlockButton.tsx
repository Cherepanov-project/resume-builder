import { ILayoutBlock } from '@/types/landingBuilder';

const LayoutBlockButton: React.FC<ILayoutBlock> = (props) => {
  console.log(props);

  const { text, inputStyle, textStyle, wrapperStyle } = props.props;

  const text2 = props.props.style!.text;
  const { border, color, backgroundColor } = props.props.style;

  console.log(props.props?.style);
  return (
    <div style={wrapperStyle}>
      <button
        type="button"
        style={
          props.props.style === undefined
            ? { ...inputStyle, ...textStyle }
            : { border: border, backgroundColor: backgroundColor, color: color }
        }
      >
        {text2 === undefined ? text : text2}
      </button>
    </div>
  );
};

export default LayoutBlockButton;
