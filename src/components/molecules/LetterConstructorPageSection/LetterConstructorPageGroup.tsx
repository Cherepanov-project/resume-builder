import { Typography, Container, ThemeProvider, Grid } from '@mui/material';
import Link from '@mui/material/Link';

import theme from '@components/molecules/LetterConstructorPageSection/LetterConstructorTheme'
import React from 'react';

type Card = {
  id: number,
  subTitle: string;
  content?: string;
  buttonText?: string;
  href?: string;
  image?: string;
  imageAlt?: string;
}

interface LetterConstructorPageGroupProps {
  title?: string;
  arrayCards?: Array<Card>;
  isBorder?: boolean;
  isBigPicture?: boolean;
}

interface CardItem {
  imageElement: JSX.Element | null;
  buttonElement: JSX.Element | null;
  content?: string;
  subTitle: string;
}

const BorderCard: React.FC<CardItem> = ({subTitle, imageElement, buttonElement, content}) => {
  return (
    <Grid container item md={3.8} sx={{
        border: '1.7px solid rgba(213, 212, 214, .5)', 
        borderRadius: '25px',
        p: 3,
        gap: 1,
      }}
      direction={'column'}
      width={{xs: '100%', sm: '45%'}}
    >
      <Grid item>
        {imageElement}
      </Grid>
      <Grid item>
        <Typography variant='h5'>{subTitle}</Typography>
        <Typography variant='body1' sx={{color: 'grey'}}>{content}</Typography>
        {buttonElement}
      </Grid>
    </Grid>
  )
}

const Card: React.FC<CardItem> = ({subTitle, imageElement, buttonElement, content}) => {
  return (
    <Grid 
      container 
      item 
      md={3.8} 
      sx={{
        p: 3,
        gap: 1,
      }}
      direction={{xs: 'row', md: 'column'}}
    >
      <Grid item width={{xs: '54px', md: '100%'}} mr={2}>
        {imageElement}
      </Grid>
      <Grid item width={{xs: 'calc(100% - 100px)', md: '100%'}}>
        <Typography variant='h5'>{subTitle}</Typography>
        <Typography variant='body1' sx={{color: 'black'}}>{content}</Typography>
        {buttonElement}
      </Grid>
    </Grid>
  )
}

const BigPictureCard: React.FC<CardItem> = ({subTitle, imageElement, buttonElement, content}) => {
  return (
    <Grid 
      container 
      item  
      md={3.8} 
      sx={{
        p: 2,
        gap: 1,
      }}
      direction={'column'}
      width={{xs: '100%', sm: '45%'}}
    >
      <Grid item>
        {imageElement}
      </Grid>
      <Grid item>
        <Typography variant='h5'>{subTitle}</Typography>
        <Typography variant='body1' sx={{color: 'black'}}>{content}</Typography>
        {buttonElement}
      </Grid>
    </Grid>
  )
}

const LetterConstructorPageGroup: React.FC<LetterConstructorPageGroupProps> = ({
  title,
  arrayCards,
  isBorder,
  isBigPicture
}) => {
  const arrayCardElements: React.ReactNode[] | null = arrayCards ? arrayCards.map((card) => {
    const buttonElement: JSX.Element|null = card.buttonText && card.href ? <Link color='inherit' href={card.href}>{card.buttonText}</Link> : null
    const imageElement: JSX.Element|null = card.image && card.imageAlt ? <img style={{maxWidth: '100%', height: 'auto'}} src={card.image} alt={card.imageAlt} /> : null

    let result: React.ReactNode | null = null

    if (isBorder) {
      result = (
        <BorderCard 
          buttonElement={buttonElement}
          imageElement={imageElement}
          key={card.id}
          content={card.content}
          subTitle={card.subTitle}
        />
      )
    }

    if (isBorder === false && isBigPicture === false) {
      result = (
        <Card 
          buttonElement={buttonElement}
          imageElement={imageElement}
          key={card.id}
          content={card.content}
          subTitle={card.subTitle}
        />
      )
    }

    if (isBigPicture) {
      result = (
        <BigPictureCard 
          buttonElement={buttonElement}
          imageElement={imageElement}
          key={card.id}
          content={card.content}
          subTitle={card.subTitle}
        />
      )
    }

    return result
  }) : null

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{mt: 15, mb: 10}}>
        <Typography variant="h2" textAlign={'center'} mb={{xs: '40px', md: '90px'}}>{title}</Typography>
        <Grid p={{xs: 3, md: 0}} container gap={3} justifyContent={'space-around'} direction={{xs: 'column', sm: 'row'}}>
          {arrayCardElements}
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default LetterConstructorPageGroup
