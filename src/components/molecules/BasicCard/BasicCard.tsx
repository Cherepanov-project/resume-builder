import { Card, CardMedia, CardContent, Typography, Button, CardActions } from '@mui/material';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { useState } from 'react';
import { useAppSellector } from '../../../hooks/cvTemplateHooks';

import classes from './BasicCard.module.scss';

export const BasicCard = () => {
  const [btnReadMoreLimit, setBtnReadMoreLimit] = useState(75);
  const [isOpen, setIsOpen] = useState(false);

  const {
    imageUrl,
    avatarUrl,
    backgroundColor,
    alignment,
    titleColor,
    titleSize,
    titleWeight,
    titleContent,
    textSize,
    textColor,
    textWeight,
    textContent,
    avatar,
    btnReadMore,
    heightImg,
  } = useAppSellector((state) => state.card.style);

  const handleCutText = (text: string, limit = btnReadMoreLimit) => {
    text = text.trim();
    if (text.length <= limit) {
      return text;
    } else {
      text = text.slice(0, limit);
      const lastWord = text.lastIndexOf(' ');
      text = text.slice(0, lastWord);
      return `${text} ...`;
    }
  };

  const handleChangeBtnReadMoreLimit = () => {
    if (isOpen) {
      setBtnReadMoreLimit(75);
      setIsOpen(false);
    } else {
      setBtnReadMoreLimit(500);
      setIsOpen(true);
    }
  };

  return (
    <Card className={classes.Сard} variant="outlined" sx={{ maxWidth: 350, minWidth: 350 }}>
      <div className={classes.Card__media}>
        <CardMedia
          className={classes.Card__media__image}
          component="img"
          image={
            imageUrl
              ? imageUrl
              : 'https://w.forfun.com/fetch/f9/f9f2de5608f00f96a18f470547e52bef.jpeg'
          }
          alt="card-image"
          height={heightImg}
        />
        {avatar ? (
          <img
            className={classes.Card__media__avatar}
            src={
              avatarUrl
                ? avatarUrl
                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLZEpKMCUPwz_zmTY65JB4DmzUFCHn6QTmIw&usqp=CAU'
            }
          />
        ) : null}
      </div>
      <CardContent
        className={classes.Card__content}
        style={{ backgroundColor: backgroundColor, paddingTop: 50, textAlign: alignment as 'left' }}
      >
        <Typography
          className={classes.Card__content__title}
          component="div"
          style={{ color: titleColor, fontSize: titleSize, fontWeight: titleWeight }}
        >
          {titleContent}
        </Typography>
        <Typography
          className={classes.Card__content__text}
          component="div"
          style={{ fontSize: textSize, color: textColor, fontWeight: textWeight }}
        >
          {btnReadMore ? handleCutText(textContent) : textContent}
        </Typography>
      </CardContent>
      {btnReadMore && (
        <CardActions style={{ backgroundColor: backgroundColor }}>
          <Button size="small" color="primary" onClick={handleChangeBtnReadMoreLimit}>
            Read more {isOpen ? <ArrowDropUp /> : <ArrowDropDown />}
          </Button>
        </CardActions>
      )}
    </Card>
  );
};
