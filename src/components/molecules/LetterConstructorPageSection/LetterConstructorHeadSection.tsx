import { Box, Typography, Button, useMediaQuery, Container, ThemeProvider, Grid } from '@mui/material';
import theme from '@components/molecules/LetterConstructorPageSection/LetterConstructorTheme'

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
    const md = useMediaQuery('(min-width: 992px)')
  
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
  0
    const buttonElement = buttonText && href ? <Button sx={{display: md ? 'inline-block' : 'block'}} href={href}>{buttonText}</Button> : null
    const imageElement = (
      <Grid item md={5} width={{md: '60%', xs: '40%'}} sx={{m: 'auto'}}>
        <img style={{maxWidth: '100%', height: 'auto'}} src={image} alt={imageAlt} />
      </Grid>
    )
    return (
      <ThemeProvider theme={theme}>
        <Box sx={containerStyle}>
          <Container sx={{position: 'relative', m: 'auto', pt: '30px', pb: '30px'}}>
            <Grid container direction={{xs: 'column', md: 'row'}}>
              {!md && imageElement}
              <Grid item  md={7} sx={{p: 3, m: 'auto'}}>
                <Typography variant='h1' width={'100%'}>
                  {title}
                </Typography>
                <Typography variant='body2' width={{md: '75%', xs: '100%'}}>{content}</Typography>
                {buttonElement}
              </Grid>
              {md && imageElement}  
            </Grid>
          </Container>
        </Box>
      </ThemeProvider>
    )
  }

  export default LetterConstructorHeadSection