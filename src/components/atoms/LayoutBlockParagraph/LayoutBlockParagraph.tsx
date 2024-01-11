import { ILayoutBlock } from '@/types/landingBuilder';
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';

const LayoutBlockParagraph: React.FC<ILayoutBlock> = ({ props }) => {
  const [isEdit, setEdit] = useState(false);
  const [text, setText] = useState(props.text);

  useEffect(() => {
    setText(props.text)
  }, [props.text]) 

  const handleDoubleClick = () => {
    setEdit(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') setEdit(false);
  };

  return (
    <div style={props.wrapperStyle}>
      <p style={props.textStyle} onDoubleClick={handleDoubleClick}>
        {isEdit ? (
          <input
            type="text"
            style={{ ...props.textStyle, ...props.inputStyle }}
            value={text}
            onChange={handleChange}
            onKeyDown={handleSubmit}
            autoFocus
            onFocus={(e) => e.target.select()}
          />
        ) : (
          text
        )}
      </p>
    </div>
  );
};

export default LayoutBlockParagraph;
