import { Box, Typography, Button, useMediaQuery } from '@mui/material';

interface LetterConstructorHeadSectionProps {
    title?: string;
    content?: string;
    buttonText?: string;
    href?: string;
    image?: string;
    imageAlt?: string;
  }

const LetterConstructorHeadSection: React.FC<LetterConstructorHeadSectionProps> = ({
    title, 
    content, 
    image, 
    imageAlt, 
    buttonText,
    href
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
      position: 'relative',
      padding: '50px 0 50px',
      marginBottom: '50px',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '-77px',
        left: '-290px',
        bottom: '0',
        right: '-226px',
        backgroundColor: '#eafcff',
        borderRadius: '0 0 360px 0',
      }
    }
  
    const titleStyle = {
      fontFamily: 'Inter, sans-serif',
      color: 'black',
      maxWidth: '835px',
      textAlign: xl ? 'start' : 'center',
      letterSpacing: md ? '-1.4px' : '-.4px', 
      margin: '0', 
      marginBottom: md ? '20px' : '10px',
      fontWeight: '600',
      fontSize: md ? '64px' : '32px',
      lineHeight: '1.3'
    }
  
    const cardStyle = {
      boxSizing: 'border-box',
      position: 'relative',
      display: 'flex',
      flexWrap: 'wrap',
      marginRight: 'auto',
      marginLeft: 'auto',
      flexDirection: xl ? 'row' : 'column',
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
      margin: '0',
      marginTop: lg ? '0' : '20px',
      flex: xl ? '0 0 60%' : '0 0 100%',
      display: 'flex',
      maxWidth: xl ? '60%' : '100%',
      flexDirection: xl ? 'row' : 'column',
      alignItems: 'center',
    }
  
    const wrapperTextStyle = {
      margin: 'auto',
      maxWidth: 'none',
      textAlign: xl ? 'start' : 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: xl ? 'start' : 'center',
    }
  
    const descriptionStyle = {
      marginTop: '0',
      marginBottom: '0',
      fontFamily: 'Inter, sans-serif',
      fontWeight: '400',
      fontSize: lg ? '20px' : '16px',
      lineHeight: '1.5',
      letterSpacing: '-0.6px',
      color: 'black',
      width: lg ? '55%' : '100%',
    }
  
    const wrapperImageStyle = {
      boxSizing: 'border-box',
      paddingRight: '15px',
      paddingLeft: '15px',
      margin: 'auto',
      width: 'auto',
      overflow: 'clip',
      flex: xl ? '0 0 40%' : lg ? '0 0 60%' : '',
      maxWidth: xl ? 'none' : '300px',
      order: xl ? '2' : '-1',   
    }
  
    const imageStyle = {
      maxWidth: '100%',
      height: 'auto',
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
  
    return (
      <Box sx={containerStyle}>
        <Box sx={cardStyle}>
          <Box sx={sectionWrapperStyle}>
            <Box sx={wrapperTextStyle}>
              <Typography variant='h1' sx={titleStyle}>
                {title}
              </Typography>
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

  export default LetterConstructorHeadSection