import IntroPageSection from '@molecules/IntroPageSection';
import { Container, Box, Typography } from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from 'react-redux';
import { setUser } from '@/store/userSlice';


const IntroPage = () => {
  const dispatch  = useDispatch();
  const { user } = useAuth0();
  
  if(user){
    dispatch(setUser(user));
  }

  return (
    <Container
      sx={{
        width: '984px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box my={5} sx={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <Box sx={{ width: '610px' }}>
          <Typography variant="h4" sx={{ fontWeight: '700' }}>
            🎉 Get started with Quickly
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: '#20484F', fontSize: '14px', lineHeight: '27px' }}
          >
            How to get the most out of this landing page building template. <br />
            Read how to use the components, variants and styles to your advantage.
          </Typography>
        </Box>
        <IntroPageSection
          title="Use the styles"
          content="Styles in Figma mean you don't have to repetitively enter values for typography, colors
          and elevations minimising the risk of inconsistencies and streamlining the design
          process."
          contentPlus="Within this template you can find color and type styles, and their definitions on the
          style guide page. To use them simply select them from the Figma style panel as shown
          below."
          firstBox='url("./../../../src/assets/images/defaultSlides/5.jpg")'
          secondBox='url("./../../../src/assets/images/defaultSlides/3.jpg")'
        />
        <IntroPageSection
          title="Use the resume builder"
          content="We've included granular components such as checkboxes and buttons for your convenience.
          Build your own blocks using the colors, type and components from scratch to add to the
          library of pre-prepared content blocks."
          firstBox='url("./../../../src/assets/images/defaultSlides/7.jpg")'
          secondBox='url("./../../../src/assets/images/defaultSlides/3.jpg")'
        />
        <IntroPageSection
          title="Use the content blocks"
          content="We've built   out a multitude of content blocks for you to use in your landing pages. From
          hero sections, forms, CTAs to pricing sections. Everything you need to get started
          building polished, modern landing pages."
          firstBox='url("./../../../src/assets/images/defaultSlides/7.jpg")'
        />
      </Box>
    </Container>
  );
};
export default IntroPage;
