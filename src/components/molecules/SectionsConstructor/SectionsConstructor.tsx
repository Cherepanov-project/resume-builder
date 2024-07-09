import MemoizedConstructorRowEl from '../SectionsConstructorRowEl';
import { useTypedSelector } from '@/hooks/cvTemplateHooks';
import { memo } from 'react';
import { Box } from '@mui/material';

type SectionsConstructorType = {
  setError: React.Dispatch<React.SetStateAction<string>>;
  setSeverity: React.Dispatch<React.SetStateAction<string>>;
};

const SectionsConstructor: React.FC<SectionsConstructorType> = ({ setError, setSeverity }) => {
  const rowsArr = Object.keys(useTypedSelector((state) => state.sectionsManager.layoutDate));
  // отображение рядов секции
  const rowEls = () => {
    return rowsArr.map((row) => (
      <MemoizedConstructorRowEl
        key={row}
        row={Number(row)}
        setError={setError}
        setSeverity={setSeverity}
      />
    ));
  };

  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        flexDirection: 'column',
        m: 'auto 0',
        width: 'fill-available',
        boxShadow: '1px 1px 5px 0px rgba(77,75,77,0.83)',
        borderRadius: '5px',
      }}
    >
      {rowEls()}
    </Box>
  );
};

export const MemoizedSectionsConstructor = memo(SectionsConstructor);