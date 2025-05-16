import { Box, Typography, Button, useMediaQuery, Container, ThemeProvider, Grid } from '@mui/material';
import theme from '@components/molecules/LetterConstructorPageSection/LetterConstructorTheme'

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
  const md = useMediaQuery('(min-width: 992px)')

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

  const buttonElement = buttonText && href ? <Button sx={{display: md ? 'inline-block' : 'block'}} href={href}>{buttonText}</Button> : null
  const imageElement = (
    <Grid item md={6} width={{md: '80%', xs: '60%'}} sx={{m: 'auto'}}>
      <img style={{maxWidth: '100%', height: 'auto'}} src={image} alt={imageAlt} />
    </Grid>
  )

  return (
    <ThemeProvider theme={theme}>
      <Box sx={containerStyle}>
        <Container sx={{m: 'auto', pt: '30px', pb: '30px'}}>
          <Grid container direction={{xs: 'column', md: 'row'}}>
            <Grid md={6} item sx={{p: 3, m: 'auto'}}>
              <Typography variant='h3' mb={3}>
                {title}
              </Typography>
              <Typography variant='body2' mb={3} width={{md: '75%', xs: '100%'}}>{content}</Typography>
              {!md && imageElement}
              {buttonElement}
            </Grid>
            {md && imageElement}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default LetterConstructorFooterSection
