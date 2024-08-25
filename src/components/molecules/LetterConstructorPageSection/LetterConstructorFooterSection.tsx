import { Box, Typography, Button, useMediaQuery } from '@mui/material';

interface LetterConstructorFooterSectionProps {
  title?: string;
  content?: string;
  buttonText?: string;
  href?: string;
  image?: string;
  imageAlt?: string;
}

const LetterConstructorFooterSection: React.FC<LetterConstructorFooterSectionProps> = ({
  title,
  content,
  buttonText,
  href,
  image,
  imageAlt
}) => {
  
  const sm = useMediaQuery('(min-width: 576px)')
  const md = useMediaQuery('(min-width: 768px)')
  const lg = useMediaQuery('(min-width: 992px)')
  const xl = useMediaQuery('(min-width: 1200px)')
  const xxl = useMediaQuery('(min-width: 1400px)')
  const xxxl = useMediaQuery('(min-width: 1600px)')
  const xxxxl = useMediaQuery('(min-width: 1800px)')

  const containerStyle = {
    boxSizing: 'border-box',
    margin: '0',
    width: '100%',
    padding: '80px 0',
    paddingLeft: '15px',
    paddingRight: '15px',
    marginBottom: '0',
    position: 'relative',
    backgroundColor: '#eafcff',
  }

  const titleStyle = {
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
    fontSize: '40px',
    lineHeight: '1.3',
    letterSpacing: '-.8px',
    color: 'black',
    margin: '0',
    marginBottom: lg ? '20px' : '10px',
  }

  const cardStyle = {
    boxSizing: 'border-box',
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    marginRight: 'auto',
    marginLeft: 'auto',
    flexDirection: lg ? 'row' : 'column',
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

  const sectionWrapperStyle = {
    boxSizing: 'border-box',
    width: '100%',
    paddingRight: '15px',
    paddingLeft: '15px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '0',
    marginTop: lg ? '0' : '20px',
    flex: lg ? '0 0 50%' : '0 0 100%',
    maxWidth: lg ? '50%' : '100%',
  }

  const wrapperTextStyle = {
    margin: 'auto',
    maxWidth: 'none',
    width: '100%',
    textAlign: lg ? 'start' : 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: lg ? 'flex-start' : 'center',
  }

  const descriptionStyle = {
    marginTop: '18px',
    marginBottom: '0',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '1.5',
    letterSpacing: '-0.6px',
    color: 'black',
    maxWidth: '600px',
  }

  const wrapperImageStyle = {
    boxSizing: 'border-box',
    paddingRight: '15px',
    paddingLeft: '15px',
    margin: 'auto',
    width: 'auto',
    overflow: 'clip',
    flex: lg ? '0 0 50%' : '',  
  }

  const imageStyle = {
    maxWidth: xl ? '100%' : '320px',
    height: 'auto',
    display: 'block',
    marginTop: '25px',
  }

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

  const buttonElement = buttonText && href ? <Button sx={buttonStyle} href={href}>{buttonText}</Button> : null
  const imageElement = (
    <Box sx={wrapperImageStyle}>
      <img style={imageStyle} src={image} alt={imageAlt} />
    </Box>
  )

  return (
    <Box sx={containerStyle}>
      <Box sx={cardStyle}>
        <Box sx={sectionWrapperStyle}>
          <Box sx={wrapperTextStyle}>
            <Typography variant='h2' sx={titleStyle}>
              {title}
            </Typography>
            <Typography sx={descriptionStyle}>{content}</Typography>
            {!lg && imageElement}
            {buttonElement}
          </Box>
        </Box>
        {lg && imageElement}
      </Box>
    </Box>
  )
}

export default LetterConstructorFooterSection