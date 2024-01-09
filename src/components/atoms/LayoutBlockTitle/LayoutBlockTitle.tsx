import { ILayoutBlock } from '@/types/landingBuilder';
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';

const LayoutBlockTitle: React.FC<ILayoutBlock> = ({ props }) => {

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
      {isEdit ? (
        <input
          type="text"
          style={{ ...props.textStyle, ...props.inputStyle }}
          value={props.text}
          onChange={handleChange}
          onKeyDown={handleSubmit}
          autoFocus
          onFocus={(e) => e.target.select()}
        />
      ) : (
        <h1 style={props.textStyle} onDoubleClick={handleDoubleClick}>
          {text}
        </h1>
      )}
    </div>
  );
};

export default LayoutBlockTitle;
