import { ChangeEventHandler } from 'react';

interface IBasicSelectWeight {
  id: string;
  title: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  defaultValue: number;
}

export const BasicSelectWeight = (props: IBasicSelectWeight) => {
  const { id, title, onChange, defaultValue } = props;
  const optionsValue = Array.from(Array(9), (_, i) => (i + 1) * 100);
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <select id={id} onChange={onChange} defaultValue={defaultValue}>
        {optionsValue.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
    </>
  );
};
