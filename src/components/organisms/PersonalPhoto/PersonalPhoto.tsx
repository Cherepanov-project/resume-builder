import React, { useRef, useState } from 'react';

import placeholderImage from './placeholder.jpg';
import Button from '@mui/material/Button';
import classes from './PersonalPhoto.module.scss';

const PersonalPhoto = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedImage(file ? URL.createObjectURL(file) : null);
  };

  return (
    <div className={classes.PersonalPhoto}>
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        ref={inputRef}
        onChange={handleFileChange}
      />
      {selectedImage ? (
        <img
          src={selectedImage}
          alt="Выбранное изображение"
          style={{ width: '200px', height: 'auto' }}
        />
      ) : (
        <img
          src={placeholderImage}
          alt="Заглушка изображения"
          style={{ width: '200px', height: 'auto' }}
        />
      )}

      <Button
        onClick={handleButtonClick}
        className={classes.PersonalPhotoButton}
        sx={{
          mt: 1,
          mr: 1,
          backgroundColor: '#462174',
          color: 'white',
          ':hover': {
            backgroundColor: 'white',
            color: '#462174',
            border: '1px solid #462174',
          },
        }}
      >
        Выбрать изображение
      </Button>
    </div>
  );
};

export default PersonalPhoto;
