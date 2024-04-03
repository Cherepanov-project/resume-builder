import { ILayoutBlock } from '@/types/landingBuilder';

const LayoutBlockButton: React.FC<ILayoutBlock> = (props): JSX.Element => {
  console.log(props);

  interface Style {
    textAlign: string;
  }

  interface Styles {
    [key: string]:
      | string
      | {
          border: string | 'none';
          color: string | '#fff';
          backgroundColor: string | '#fff';
        };
  }

  const text = props.props.style! === undefined ? props.props.text : props.props.style!.text;
  const { border, color, backgroundColor }: Styles = props.props.style!;
  const textAlign: Style | string = props.props.style!.wrapperStyle;

  return (
    <div style={textAlign}>
      <button
        type="button"
        style={{ border: border, backgroundColor: backgroundColor, color: color }}
      >
        {text}
      </button>
    </div>
  );
};

export default LayoutBlockButton;
