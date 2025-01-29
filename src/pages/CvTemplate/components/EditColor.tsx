import { FC } from 'react';
import EditWithHeader from './EditWithHeader.tsx';

interface IProps {
  setChooseTemplate: React.Dispatch<React.SetStateAction<number>>;
}

const EditColor: FC<IProps> = ({ setChooseTemplate }) => {
  return (
    <>
      <EditWithHeader setChooseTemplate={setChooseTemplate} />
    </>
  );
};

export default EditColor;
