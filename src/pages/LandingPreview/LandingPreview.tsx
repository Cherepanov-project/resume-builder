import PreviewSpace from '@organisms/PreviewSpace';
import { PrecisionManufacturing } from '@mui/icons-material';
import DefaultButton from '@atoms/DefaultButton';
import { useState } from 'react';
import createZip from '@/utils/jsZipper.tsx';

const LandingPreview = () => {
  const [isVisible, setIsVisible] = useState(true);
  //функция download
  const handleDownload = async () => {
    await setIsVisible(!isVisible);
    await createZip();
    console.log('Success');
  };

  return (
    <>
      <PreviewSpace />
      {isVisible && (
        <DefaultButton float onClick={handleDownload}>
          <PrecisionManufacturing /> Download
        </DefaultButton>
      )}
    </>
  );
};

export default LandingPreview;
