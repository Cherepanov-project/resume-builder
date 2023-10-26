import { Container } from '@mui/material';
import {
  FormatAlignJustify,
  FormatAlignLeft,
  FormatAlignRight,
  FormatAlignCenter,
} from '@mui/icons-material';
import { useState, useEffect, ChangeEvent, SetStateAction } from 'react';
import { useAppDispatch } from '../../../hooks/cvTemplateHooks';
import { addCard } from '../../../store/cardSlice';
import { BasicSelectWeight } from '../../atoms/BasicSelectWeight';
import { BasicImageUpload } from '../../atoms/BasicImageUpload';
import { BasicCardMenuField } from '../../atoms/BasicCardMenuField';
import { BasicSwitch } from '../../atoms/BasicSwitch';

import classes from './BasicCardMenu.module.scss';

export const BasicCardMenu = () => {
  const dispatch = useAppDispatch();

  const [titleColor, setTitleColor] = useState('');
  const [titleSize, setTitleSize] = useState(22);
  const [titleWeight, setTitleWeight] = useState(600);
  const [titleContent, setTitleContent] = useState('');
  const [textColor, setTextColor] = useState('');
  const [textSize, setTextSize] = useState(14);
  const [textWeight, setTextWeight] = useState(300);
  const [textContent, setTextContent] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [heightImg, setHeightImg] = useState('');
  const [alignment, setAlignment] = useState('left');
  const [imageUrl, setImageUrl] = useState<string | null | ArrayBuffer>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null | ArrayBuffer>(null);
  const [btnReadMore, setBtnReadMore] = useState(false);
  const [avatar, setAvatar] = useState(false);

  useEffect(() => {
    const cardObj = {
      titleColor: titleColor,
      titleSize: titleSize,
      titleWeight: titleWeight,
      titleContent: titleContent,
      textColor: textColor,
      textSize: textSize,
      textWeight: textWeight,
      textContent: textContent,
      backgroundColor: backgroundColor,
      heightImg: heightImg,
      alignment: alignment,
      imageUrl: imageUrl,
      avatarUrl: avatarUrl,
      avatar: avatar,
      btnReadMore: btnReadMore,
    };

    dispatch(addCard(cardObj));
  }, [
    alignment,
    avatar,
    avatarUrl,
    backgroundColor,
    btnReadMore,
    dispatch,
    heightImg,
    imageUrl,
    textColor,
    textContent,
    textSize,
    textWeight,
    titleColor,
    titleContent,
    titleSize,
    titleWeight,
  ]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    value: {
      (value: SetStateAction<boolean>): void;
      (arg0: boolean): void;
    },
  ) => {
    value(e.target.checked);
  };

  const handleImageUpload = (
    e: ChangeEvent<HTMLInputElement>,
    value: {
      (value: SetStateAction<string | ArrayBuffer | null>): void;
      (arg0: string | ArrayBuffer | null): void;
    },
  ) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        value(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={classes.settings}>
      <div className={classes.settings__wrapper}>
        <BasicCardMenuField
          id="titleColor"
          title="Title Color"
          type="color"
          onChange={(e) => setTitleColor(e.target.value)}
        />
      </div>

      <div className={classes.settings__wrapper}>
        <BasicCardMenuField
          id="titleSize"
          title="Title Size"
          type="range"
          onChange={(e) => setTitleSize(parseInt(e.target.value))}
        />
      </div>

      <div className={classes.settings__wrapper}>
        <BasicSelectWeight
          id="titleWeight"
          title="Title Weight"
          onChange={(e) => setTitleWeight(parseInt(e.target.value))}
          defaultValue={600}
        />
      </div>

      <div className={classes.settings__wrapperContent}>
        <BasicCardMenuField
          id="titleContent"
          title="Title Content"
          type="text"
          onChange={(e) => setTitleContent(e.target.value)}
        />
      </div>

      <div className={classes.settings__wrapper}>
        <BasicCardMenuField
          id="textColor"
          title="Text Color"
          type="color"
          onChange={(e) => setTextColor(e.target.value)}
        />
      </div>

      <div className={classes.settings__wrapper}>
        <BasicCardMenuField
          id="textSize"
          title="Text Size"
          type="range"
          onChange={(e) => setTextSize(parseInt(e.target.value))}
        />
      </div>

      <div className={classes.settings__wrapper}>
        <BasicSelectWeight
          id="textWeight"
          title="Text Weight"
          onChange={(e) => setTextWeight(parseInt(e.target.value))}
          defaultValue={300}
        />
      </div>

      <div className={classes.settings__wrapperContent}>
        <label htmlFor="textContent">Text Content</label>
        <textarea id="textContent" onChange={(e) => setTextContent(e.target.value)} />
      </div>

      <div className={classes.settings__wrapper}>
        <BasicCardMenuField
          id="colorTitle"
          title="Background Color"
          type="color"
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
      </div>

      <div className={classes.settings__wrapper}>
        <BasicCardMenuField
          id="heightImg"
          title="Height Img"
          type="range"
          onChange={(e) => setHeightImg(e.target.value)}
          max={600}
        />
      </div>

      <div className={classes.settings__wrapper}>
        <BasicSwitch checked={avatar} onChange={(e) => handleChange(e, setAvatar)} label="Avatar" />
      </div>

      <div className={classes.settings__wrapper}>
        <BasicSwitch
          checked={btnReadMore}
          onChange={(e) => handleChange(e, setBtnReadMore)}
          label="Read more"
        />
      </div>

      <div className={classes.settings__wrapperRadio}>
        <span>Alignment</span>
        <label htmlFor="left">
          <FormatAlignLeft />
        </label>
        <input
          id="left"
          type="radio"
          name="alignment"
          value="left"
          onChange={(e) => setAlignment(e.target.value)}
        />
        <label htmlFor="center">
          <FormatAlignCenter />
        </label>
        <input
          id="center"
          type="radio"
          name="alignment"
          value="center"
          onChange={(e) => setAlignment(e.target.value)}
        />
        <label htmlFor="right">
          <FormatAlignRight />
        </label>
        <input
          id="right"
          type="radio"
          name="alignment"
          value="right"
          onChange={(e) => setAlignment(e.target.value)}
        />
        <label htmlFor="justify ">
          <FormatAlignJustify />
        </label>
        <input
          id="justify "
          type="radio"
          name="alignment"
          value="justify "
          onChange={(e) => setAlignment(e.target.value)}
        />
      </div>

      <Container className={classes.settings__container}>
        <BasicImageUpload
          id="upload-image"
          title="Upload image"
          onChange={(e) => handleImageUpload(e, setImageUrl)}
        />
      </Container>

      <Container className={classes.settings__container}>
        <BasicImageUpload
          id="upload-avatar"
          title="Upload avatar"
          onChange={(e) => handleImageUpload(e, setAvatarUrl)}
        />
      </Container>
    </div>
  );
};
