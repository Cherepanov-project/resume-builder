import { Switch, FormControlLabel, Container, Stack, Button } from '@mui/material';
import {
  FormatAlignJustify,
  FormatAlignLeft,
  FormatAlignRight,
  FormatAlignCenter,
} from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../../hooks/cvTemplateHooks';
import { addCard } from '../../../store/cardSlice';

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

  const handleChangeAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAvatar(e.target.checked);
  };

  const handleChangeBtnReadMore = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBtnReadMore(e.target.checked);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setImageUrl(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setAvatarUrl(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={classes.settings}>
      <div className={classes.settings__wrapper}>
        <label htmlFor="titleColor">Title Color</label>
        <input id="titleColor" type="color" onChange={(e) => setTitleColor(e.target.value)} />
      </div>

      <div className={classes.settings__wrapper}>
        <label htmlFor="titleSize">Title Size</label>
        <input
          id="titleSize"
          type="range"
          onChange={(e) => setTitleSize(parseInt(e.target.value))}
        />
      </div>

      <div className={classes.settings__wrapper}>
        <label htmlFor="titleWeight">Title Weight</label>
        <select id="titleWeight" onChange={(e) => setTitleWeight(parseInt(e.target.value))}>
          <option value={100}>100</option>
          <option value={200}>200</option>
          <option value={300}>300</option>
          <option value={400}>400</option>
          <option value={500}>500</option>
          <option value={600} selected>
            600
          </option>
          <option value={700}>700</option>
          <option value={800}>800</option>
          <option value={900}>900</option>
        </select>
      </div>

      <div className={classes.settings__wrapperContent}>
        <label htmlFor="titleContent">Title Content</label>
        <input id="titleContent" type="text" onChange={(e) => setTitleContent(e.target.value)} />
      </div>

      <div className={classes.settings__wrapper}>
        <label htmlFor="textColor">Text Color</label>
        <input id="textColor" type="color" onChange={(e) => setTextColor(e.target.value)} />
      </div>

      <div className={classes.settings__wrapper}>
        <label htmlFor="textSize">Text Size</label>
        <input id="textSize" type="range" onChange={(e) => setTextSize(parseInt(e.target.value))} />
      </div>

      <div className={classes.settings__wrapper}>
        <label htmlFor="textWeight">Text Weight</label>
        <select id="textWeight" onChange={(e) => setTextWeight(parseInt(e.target.value))}>
          <option value={100}>100</option>
          <option value={200}>200</option>
          <option value={300} selected>
            300
          </option>
          <option value={400}>400</option>
          <option value={500}>500</option>
          <option value={600}>600</option>
          <option value={700}>700</option>
          <option value={800}>800</option>
          <option value={900}>900</option>
        </select>
      </div>

      <div className={classes.settings__wrapperContent}>
        <label htmlFor="textContent">Text Content</label>
        <textarea id="textContent" onChange={(e) => setTextContent(e.target.value)} />
      </div>

      <div className={classes.settings__wrapper}>
        <label htmlFor="colorTitle">Background Color</label>
        <input id="colorTitle" type="color" onChange={(e) => setBackgroundColor(e.target.value)} />
      </div>

      <div className={classes.settings__wrapper}>
        <label htmlFor="heightImg">Height Img</label>
        <input
          id="heightImg"
          type="range"
          max="600"
          onChange={(e) => setHeightImg(e.target.value)}
        />
      </div>

      <div className={classes.settings__wrapper}>
        <FormControlLabel
          control={<Switch checked={avatar} onChange={handleChangeAvatar} />}
          label="Avatar"
          labelPlacement="start"
        />
      </div>

      <div className={classes.settings__wrapper}>
        <FormControlLabel
          control={<Switch checked={btnReadMore} onChange={handleChangeBtnReadMore} />}
          label="Read more"
          labelPlacement="start"
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
        <Stack direction="row" alignItems="center">
          <label htmlFor="upload-image">
            <Button variant="outlined" component="span">
              Upload image
            </Button>
            <input
              id="upload-image"
              hidden
              accept="image/*"
              type="file"
              onChange={handleImageUpload}
            />
          </label>
        </Stack>
      </Container>

      <Container>
        <Stack direction="row" alignItems="center">
          <label htmlFor="upload-avatar">
            <Button variant="outlined" component="span">
              Upload avatar
            </Button>
            <input
              id="upload-avatar"
              hidden
              accept="image/*"
              type="file"
              onChange={handleAvatarUpload}
            />
          </label>
        </Stack>
      </Container>
    </div>
  );
};
