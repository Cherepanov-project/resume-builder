import { ChangeEvent, KeyboardEvent, useState } from 'react';

type LayoutBlockTitleProps = {
  props: {
    text: string;
    titleStyle: { [key: string]: string | number };
    inputStyle: { [key: string]: string | number };
  };
};

const LayoutBlockTitle: React.FC<LayoutBlockTitleProps> = ({ props }) => {
  const [isEdit, setEdit] = useState(false);
  const [title, setTitle] = useState(props.text);

  const handleDoubleClick = () => {
    setEdit(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') setEdit(false);
  };

  return (
    <div>
      {isEdit ? (
        <input
          type="text"
          style={{ ...props.titleStyle, ...props.inputStyle }}
          value={title}
          onChange={handleChange}
          onKeyDown={handleSubmit}
          autoFocus
          onFocus={(e) => e.target.select()}
        />
      ) : (
        <h1 style={props.titleStyle} onDoubleClick={handleDoubleClick}>
          {title}
        </h1>
      )}
    </div>
  );
};

export default LayoutBlockTitle;
