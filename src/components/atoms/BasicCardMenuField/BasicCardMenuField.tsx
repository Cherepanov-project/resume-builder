import { ChangeEventHandler } from 'react';

interface IBasicCardMenuField {
  id: string;
  title: string;
  type: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  max?: number;
}

export const BasicCardMenuField = (props: IBasicCardMenuField) => {
  const { id, title, type, onChange, max } = props;
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <input id={id} type={type} onChange={onChange} max={max} />
    </>
  );
};
