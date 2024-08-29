import { ThemeProvider, Typography, Container, Button, useMediaQuery, Grid } from '@mui/material';
import theme from '@components/molecules/LetterConstructorPageSection/LetterConstructorTheme';

interface LetterConstructorPageSectionProps {
  title?: string;
  subTitle?: string;
  content?: string;
  buttonText?: string;
  href?: string;
  image?: string;
  imageAlt?: string;
}

const LetterConstructorPageSection: React.FC<LetterConstructorPageSectionProps> = ({
  title,
  subTitle,
  content,
  buttonText,
  href,
  image,
  imageAlt,
}) => {
  const md = useMediaQuery('(min-width: 992px)')

  const buttonElement = buttonText && href ? <Button href={href}>{buttonText}</Button> : null
  const titleElement = title && (
      <Typography variant='h2' textAlign={'center'} mb={{xs: '40px', md: '90px'}}>
        {title}
      </Typography>
  )

  const imageElement = (
    <Grid item md={6} width={{sm: '80%'}} sx={{p: 3, m: 'auto'}}>
      <img style={{maxWidth: '100%', height: 'auto'}} src={image} alt={imageAlt} />
    </Grid>
  )

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{pt: '40px', mt: 15, mb: 10}}>
        {titleElement}
        <Grid container direction={{xs: 'column', md: 'row'}}>
          {!md && imageElement}
          <Grid md={6} item sx={{p: 3}}>
            <Typography variant='h4' mb={3}>{subTitle}</Typography>
            <Typography variant='body1'>{content}</Typography>
            {buttonElement}
          </Grid>
          {md && imageElement}
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default LetterConstructorPageSection
