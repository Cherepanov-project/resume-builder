import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom' 
import classes from './LetterConstructorPageSection.module.scss'

interface LetterConstructorPageSectionProps {
  title?: string;
  subTitle: string;
  content: string;
  buttonText?: string;
  href?: string;
  image: string;
  imageAlt: string;
  isHead?: boolean;
  isFooter?: boolean;
}

export const LetterConstructorPageSection: React.FC<LetterConstructorPageSectionProps> = ({
  title,
  subTitle,
  content,
  buttonText,
  href,
  image,
  imageAlt,
  isHead = false,
  isFooter = false,
}) => {
  let buttonStyle = {
    boxSizing: 'border-box',
    marginTop: '40px',
    display: 'inline-block',
    textDecoration: 'none',
    paddingTop: '7px',
    paddingBottom: '7px',
    paddingRight: '30px',
    paddingLeft: '30px',
    fontWeight: '600',
    fontSize: '22px',
    backgroundColor: '#852876',
    border: '1px solid #852876',
    color: '#fff',
    borderRadius: '16px',
    transition: 'background-color .3s',
    textAlign: 'center',

    '&:hover': {
        backgroundColor: '#5d145f',
        color: '#fff',
    }

    // '@media (max-width: 768px)': {
    //     width: '100%',
    //     textAlign: 'center',
    //     padding: '13px 20px',
    // }
    
    // '@media (max-width: 1200px)': {
    //     padding: '15px 40px',
    //     fontSize: '16px !important',
    // }

    // '&--footer': {
    //     paddingLeft: '80px',
    //     paddingRight: '80px',
    //     marginTop: '30px',
    // }
}
  buttonStyle = isFooter ? { ...buttonStyle, marginTop: '30px', paddingRight: '80px', paddingLeft: '80px' } : buttonStyle

  const titleStyle = {
    marginTop: '0',
    marginBottom: '90px',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
    fontSize: '40px',
    lineHeight: '1.3',
    letterSpacing: '-.8px',
    color: 'black',
    maxWidth: '835px',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  }

  const buttonElement = buttonText && href ? <Button sx={buttonStyle} href={href}>{buttonText}</Button> : null
  const titleElement = title && !isHead ? 
    <Typography 
      variant='h2' 
      sx={titleStyle}
    >
      {title}
    </Typography> : null
  
  let subTitleStyle = {
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
    fontSize: '32px',
    lineHeight: '1.3',
    letterSpacing: '-.8px',
    color: 'black',
    margin: '0',
    marginBottom: '20px',
  }

  subTitleStyle = isFooter ? { ...subTitleStyle, fontSize: '40px'} : subTitleStyle
  
  const subTitleElement: JSX.Element|null = !isHead ? 
    <Typography variant='h3' sx={subTitleStyle}>{subTitle}</Typography> :
    <Typography 
      variant='h1' 
      sx={{
        ...titleStyle, 
        letterSpacing: '-1.4px', 
        margin: '0', 
        marginBottom: '20px',
        fontWeight: '600',
        fontSize: '64px',
        lineHeight: '1.3',
        marginLeft: '0',
        marginRight: '0',
      }}>
      {subTitle}
    </Typography> 

  let containerStyle = classes['container']
  containerStyle = isHead ? containerStyle + ' ' + classes['container--head'] : containerStyle
  containerStyle = isFooter ? containerStyle + ' ' + classes['container--footer'] : containerStyle

  let wrapperImageStyle = classes['wrapper-image']
  wrapperImageStyle = isHead ? wrapperImageStyle + ' ' + classes['wrapper-image--head'] : wrapperImageStyle

  let wrapperTextStyle = classes['wrapper-text']
  wrapperTextStyle = isHead ? wrapperTextStyle + ' ' + classes['wrapper-text--head'] : wrapperTextStyle
  wrapperTextStyle = isFooter ? wrapperTextStyle + ' ' + classes['wrapper-text--footer'] : wrapperTextStyle

  let sectionWrapperStyle = classes['section-wrapper']
  sectionWrapperStyle = isHead ? sectionWrapperStyle + ' ' + classes['section-wrapper--head'] : sectionWrapperStyle

  let cardStyle = classes['card'] + ' ' + classes['card--large']
  cardStyle = isHead ? cardStyle + ' ' + classes['card--head'] : cardStyle

  let descriptionStyle = classes['description']
  descriptionStyle = isHead ? descriptionStyle + ' ' + classes['description--head'] : descriptionStyle
  descriptionStyle = isFooter ? descriptionStyle + ' ' + classes['description--footer'] : descriptionStyle

  const imageElement: JSX.Element = 
    <img className={classes['image'] + ' ' + classes['image--visible']} src={image} alt={imageAlt} />
  
  let imageStyle = classes['image']
  imageStyle = isFooter ? imageStyle + ' ' + classes['image--invisible'] : imageStyle

  return (
    <Box className={containerStyle}>
      {titleElement}
      <Box className={cardStyle}>
        <Box className={sectionWrapperStyle}>
          <Box className={wrapperTextStyle}>
            {subTitleElement}
            <Typography className={descriptionStyle}>{content}</Typography>
            {isFooter ? imageElement : null}
            {buttonElement}
          </Box>
        </Box>
        <Box className={wrapperImageStyle}>
          <img className={imageStyle} src={image} alt={imageAlt} />
        </Box>
      </Box>
    </Box>
  )
}

type card = {
  id: number,
  subTitle: string;
  content?: string;
  buttonText?: string;
  href?: string;
  image?: string;
  imageAlt?: string;
}

interface LetterConstructorPageGroupProps {
  title: string;
  arrayCards: Array<card>;
  isBorder: boolean;
  isBigPicture: boolean;
}

export const LetterConstructorPageGroup: React.FC<LetterConstructorPageGroupProps> = ({
  title,
  arrayCards,
  isBorder,
  isBigPicture
}) => {
  const arrayCardElements: JSX.Element[] = arrayCards.map((card) => {
    const buttonElement: JSX.Element|null = card.buttonText && card.href ? <Link className={classes['link']} to={card.href}>{card.buttonText}</Link> : null
    const imageElement: JSX.Element|null = card.image && card.imageAlt ? <img className={classes['group-image']} src={card.image} alt={card.imageAlt} /> : null

    let itemStyle = classes['item']
    itemStyle = isBorder ? itemStyle + ' ' + classes['item--border'] : itemStyle

    itemStyle = isBigPicture ? itemStyle + ' ' + classes['item--big'] : itemStyle

    let groupWrapperStyle = classes['group-wrapper']
    groupWrapperStyle = isBorder ? groupWrapperStyle + ' ' + classes['group-wrapper--border'] : groupWrapperStyle

    let groupWrapperImageStyle = classes['group-wrapper-image']
    groupWrapperImageStyle = isBorder ? groupWrapperImageStyle + ' ' + classes['group-wrapper-image--border'] : groupWrapperImageStyle

    groupWrapperImageStyle = isBigPicture ? groupWrapperImageStyle + ' ' + classes['group-wrapper-image--big'] : groupWrapperImageStyle
    
    let groupDescriptionStyle = classes['group-description']
    groupDescriptionStyle = isBorder ? groupDescriptionStyle + ' ' + classes['group-description--border'] : groupDescriptionStyle


    return (
      <Box key={card.id} className={groupWrapperStyle}>
        <Box className={itemStyle}>
          <Box className={groupWrapperImageStyle}>
            {imageElement}
          </Box>
          <Box className={classes['group-wrapper-description']}>
            <Typography variant='h5' className={classes['group-sub-title']}>{card.subTitle}</Typography>
            <Typography className={groupDescriptionStyle}>{card.content}</Typography>
            {buttonElement}
          </Box>
        </Box>
      </Box>
    )
  })

  return (
    <Box className={classes['container']}>
      <Typography component="h2" className={classes['title']}>{title}</Typography>
      <Box className={classes['card']}>
        {arrayCardElements}
      </Box>
    </Box>
  )
}
