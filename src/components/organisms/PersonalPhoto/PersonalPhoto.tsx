import React, { useState } from 'react';

import placeholderImage from './placeholder.jpg';
import classes from './PersonalPhoto.module.scss';
import { BasicImageUpload } from '../../atoms/BasicImageUpload';
import { Box } from '@mui/material';
import { addPersonalPhoto } from '../../../store/cvTemplate/allPersonaInfoSlice';
import { useDispatch, useSelector } from 'react-redux';

type TAvatarState = {
  personalInfo: {
    photoData: {
      avatar: string;
    };
  };
};

const PersonalPhoto = () => {
  const [selectedImage, setSelectedImage] = useState<string>(
    useSelector((state: TAvatarState) => state.personalInfo.photoData.avatar),
  );

  const dispatch = useDispatch();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const imageUrl = file ? URL.createObjectURL(file) : '';
    setSelectedImage(imageUrl);
    dispatch(addPersonalPhoto({ avatar: imageUrl }));
  };

  return (
    <Box className={classes.PersonalPhoto}>
      {selectedImage ? (
        <Box
          component="img"
          src={selectedImage}
          alt="Выбранное изображение"
          sx={{ width: '200px', height: 'auto' }}
        />
      ) : (
        <Box
          component="img"
          src={placeholderImage}
          alt="Заглушка изображения"
          sx={{ width: '200px', height: 'auto' }}
        />
      )}

      <BasicImageUpload
        id="avatar"
        title="Загрузите фото"
        onChange={handleFileChange}
        sx={{
          mt: 1,
          mr: 1,
          backgroundColor: '#462174',
          color: 'white',
          border: '1px solid #462174',
          ':hover': {
            backgroundColor: 'white',
            color: '#462174',
            border: '1px solid #462174',
          },
        }}
      />
    </Box>
  );
};

export default PersonalPhoto;
