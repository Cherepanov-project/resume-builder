import { Container, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const IntroPage = () => {
  const navigate = useNavigate();
  const onClickNavigate = () => {
    navigate('/landing-builder');
  };
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
        <Box
          px={4.7}
          py={3.7}
          sx={{
            width: '824px',
            height: '445px',
            background: '#F9F5F5',
            borderBottom: '4px solid green',
            position: 'relative',
            cursor: 'pointer',
          }}
          onClick={onClickNavigate}
        >
          <Typography variant="h5" sx={{ fontWeight: '700' }}>
            Use the styles
          </Typography>
          <Typography>
            Styles in Figma mean you don’t have to repetitively enter values for typography, colors
            and elevations minimising the risk of inconsistencies and streamlining the design
            process.
          </Typography>
          <br />
          <Typography>
            Within this template you can find color and type styles, and their definitions on the
            style guide page. To use them simply select them from the Figma style panel as shown
            below.
          </Typography>
          <Box my={5} sx={{ display: 'flex', gap: '40px', justifyContent: 'center' }}>
            <Box
              sx={{
                width: '300px',
                height: '218px',
                background: '#fff',
                boxShadow: 2,
                backgroundImage: 'url("./../../../src/assets/images/defaultSlides/5.jpg")',
                backgroundSize: 'cover',
              }}
            ></Box>
            <Box
              sx={{
                width: '300px',
                height: '218px',
                background: '#fff',
                boxShadow: 2,
                backgroundImage: 'url("./../../../src/assets/images/defaultSlides/8.jpg")',
                backgroundSize: 'cover',
              }}
            ></Box>
          </Box>
        </Box>
        <Box
          px={4.7}
          py={3.7}
          sx={{
            width: '824px',
            height: '445px',
            background: '#F9F5F5',
            borderBottom: '4px solid green',
            position: 'relative',
            cursor: 'pointer',
          }}
          onClick={onClickNavigate}
        >
          <Typography variant="h5" sx={{ fontWeight: '700' }}>
            Use the components{' '}
          </Typography>
          <Typography>
            We’ve included granular components such as checkboxes and buttons for your convenience.
            Build your own blocks using the colors, type and components from scratch to add to the
            library of pre-prepared content blocks.
          </Typography>
          <Box
            my={5}
            sx={{
              display: 'flex',
              gap: '40px',
              position: 'absolute',
              margin: 'auto 50px',
              bottom: '0',
              background: '#F9F5F5',
            }}
          >
            <Box
              sx={{
                width: '300px',
                height: '218px',
                background: '#fff',
                boxShadow: 2,
                backgroundImage: 'url("./../../../src/assets/images/defaultSlides/7.jpg")',
                backgroundSize: 'cover',
              }}
            ></Box>
            <Box
              sx={{
                width: '300px',
                height: '218px',
                background: '#fff',
                boxShadow: 2,
                backgroundImage: 'url("./../../../src/assets/images/defaultSlides/3.jpg")',
                backgroundSize: 'cover',
              }}
            ></Box>
          </Box>
        </Box>
        <Box
          px={4.7}
          py={3.7}
          sx={{
            width: '824px',
            height: '445px',
            background: '#F9F5F5',
            borderBottom: '4px solid green',
            position: 'relative',
            cursor: 'pointer',
          }}
          onClick={onClickNavigate}
        >
          <Typography variant="h5" sx={{ fontWeight: '700' }}>
            Use the content blocks{' '}
          </Typography>
          <Typography>
            We’ve built out a multitude of content blocks for you to use in your landing pages. From
            hero sections, forms, CTAs to pricing sections. Everything you need to get started
            building polished, modern landing pages.
          </Typography>

          <Box
            sx={{
              width: '640px',
              height: '218px',
              // background: '#fff',
              boxShadow: 2,
              position: 'absolute',
              margin: 'auto',
              bottom: '0',
              left: '0',
              right: '0',
              backgroundImage: 'url("./../../../src/assets/images/defaultSlides/2.jpg")',
              backgroundSize: 'cover',
              overflowWrap: 'break-word',
              overflow: 'hidden',
            }}
          ></Box>
        </Box>
      </Box>
    </Container>
  );
};
export default IntroPage;
