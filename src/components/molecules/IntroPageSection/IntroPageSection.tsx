import { Box, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface IIntroPageSectionProps {
  title: string;
  content: string;
  contentPlus?: string;
  firstBox: string;
  secondBox?: string;
}

const IntroPageSection: React.FC<IIntroPageSectionProps> = ({
  title,
  content,
  contentPlus,
  firstBox,
  secondBox,
}) => {
  const theme = useTheme()
  const imageBoxStyles = theme.custom.imageBoxStyles;

  const navigate = useNavigate();
  const onClickNavigate = () => {
    title === 'Use the resume builder'
      ? navigate('/resume-builder')
      : navigate('/landing-builder-start-page');
  };
  return (
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
        {title}
      </Typography>
      <Typography>{content}</Typography>
      <br />
      <Typography>{contentPlus}</Typography>
      {secondBox ? (
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
          <Box sx={{ ...imageBoxStyles, backgroundImage: firstBox }}></Box>
          <Box sx={{ ...imageBoxStyles, backgroundImage: secondBox }}></Box>
        </Box>
      ) : (
        <Box
          sx={{
            ...imageBoxStyles,
            width: '640px',
            height: '218px',
            position: 'absolute',
            margin: 'auto',
            bottom: '0',
            left: '0',
            right: '0',
            backgroundImage: firstBox,
          }}
        ></Box>
      )}
    </Box>
  );
};

export default IntroPageSection;
