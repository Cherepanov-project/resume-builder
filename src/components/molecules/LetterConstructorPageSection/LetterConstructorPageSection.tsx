import { Box, Typography, Button, useMediaQuery } from '@mui/material';
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
}

export const LetterConstructorPageSection: React.FC<LetterConstructorPageSectionProps> = ({
  title,
  subTitle,
  content,
  buttonText,
  href,
  image,
  imageAlt,
}) => {
  const sm = useMediaQuery('(min-width: 576px)')
  const md = useMediaQuery('(min-width: 768px)')
  const lg = useMediaQuery('(min-width: 992px)')
  const xl = useMediaQuery('(min-width: 1200px)')
  const xxl = useMediaQuery('(min-width: 1400px)')
  const xxxl = useMediaQuery('(min-width: 1600px)')
  const xxxxl = useMediaQuery('(min-width: 1800px)')

  const buttonStyle = {
    boxSizing: 'border-box',
    marginTop: '40px',
    textDecoration: 'none',
    textTransform: 'none',
    padding: xl ? '7px 30px 7px 30px' : md ? '15px 40px' : '13px 20px',
    fontWeight: '600',
    fontSize: xl ? '22px' : '16px',
    backgroundColor: '#852876',
    border: '1px solid #852876',
    color: '#fff',
    borderRadius: '16px',
    transition: 'background-color .3s',
    textAlign: 'center',
    width: md ? 'auto' : '100%',

    '&:hover': {
        backgroundColor: '#5d145f',
        color: '#fff',
    }
}
  // buttonStyle = isFooter ? { ...buttonStyle, marginTop: '30px', paddingRight: '80px', paddingLeft: '80px' } : buttonStyle

  const titleStyle = {
    marginTop: '0',
    marginBottom: md ? '90px' : '40px',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
    fontSize: md ? '40px' : '24px',
    lineHeight: '1.3',
    letterSpacing: '-.8px',
    color: 'black',
    maxWidth: '835px',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  }

  const buttonElement = buttonText && href ? <Button sx={buttonStyle} href={href}>{buttonText}</Button> : null
  const titleElement = title && (
    <Typography 
      variant='h2' 
      sx={titleStyle}
    >
      {title}
    </Typography>)
  
  const subTitleStyle = {
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
    fontSize: lg ? '32px' : '20px',
    lineHeight: '1.3',
    letterSpacing: lg ? '-.8px' : '-.2px',
    color: 'black',
    margin: '0',
    marginBottom: lg ? '20px' : '10px',
  }

  // subTitleStyle = isFooter ? { ...subTitleStyle, fontSize: '40px'} : subTitleStyle 

  const containerStyle = {
    boxSizing: 'border-box',
    margin: '0',
    width: '100%',
    padding: '40px 0',
    paddingLeft: '15px',
    paddingRight: '15px',
    marginBottom: '0',
  }

  const wrapperImageStyle = {
    boxSizing: 'border-box',
    paddingRight: '15px',
    paddingLeft: '15px',
    margin: 'auto',
    width: 'auto',
    overflow: 'clip',
    order: lg ? '2' : '-1',
    flex: lg ? '0 0 50%' : '',
  }

  const wrapperTextStyle = {
    margin: 'auto',
    maxWidth: '526px',
  }

  const sectionWrapperStyle = {
    boxSizing: 'border-box',
    width: '100%',
    paddingRight: '15px',
    paddingLeft: '15px', 
    margin: '0',
    marginTop: lg ? '0' : '20px',
    flex: lg ? '0 0 50%' : '0 0 100%',
    maxWidth: lg ? '50%' : '100%',
  }

  // sectionWrapperStyle = isHead ? sectionWrapperStyle + ' ' + classes['section-wrapper--head'] : sectionWrapperStyle

  const cardStyle = {
    boxSizing: 'border-box',
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    marginRight: 'auto',
    marginLeft: 'auto',
    maxWidth: 
      xxxxl ? '1600px' : 
      xxxl ? '1400px' : 
      xxl ? '1200px' : 
      xl ? '1140px' : 
      lg ? '960px' : 
      md ? '840px' : 
      sm ? '660px' :
      'none',
    padding: 
      lg ? '100px 0' : 
      sm ? '50px 0' :
      '0',
  }
  // cardStyle = isHead ? cardStyle + ' ' + classes['card--head'] : cardStyle

  const descriptionStyle = {
    marginTop: '0',
    marginBottom: '0',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '400',
    fontSize: lg ? '20px' : '16px',
    lineHeight: '1.5',
    letterSpacing: '-0.6px',
    color: 'black',
  }

  // descriptionStyle = isHead ? descriptionStyle + ' ' + classes['description--head'] : descriptionStyle
  // descriptionStyle = isFooter ? descriptionStyle + ' ' + classes['description--footer'] : descriptionStyle

  // const imageElement: JSX.Element = 
  //   <img className={classes['image'] + ' ' + classes['image--visible']} src={image} alt={imageAlt} />
  
  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
  }
  // imageStyle = isFooter ? imageStyle + ' ' + classes['image--invisible'] : imageStyle

  return (
    <Box sx={containerStyle}>
      {titleElement}
      <Box sx={cardStyle}>
        <Box sx={sectionWrapperStyle}>
          <Box sx={wrapperTextStyle}>
            <Typography variant='h3' sx={subTitleStyle}>{subTitle}</Typography>
            <Typography sx={descriptionStyle}>{content}</Typography>
            {buttonElement}
          </Box>
        </Box>
        <Box sx={wrapperImageStyle}>
          <img style={imageStyle} src={image} alt={imageAlt} />
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
