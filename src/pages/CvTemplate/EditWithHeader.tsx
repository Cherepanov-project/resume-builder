import { FC, useState } from 'react';
import { templatePDFStyles } from '../CvTemplatePDF/const';
import { Box, Button, Input, MenuItem, Paper, Select, Typography } from '@mui/material';
import { buttonStyle } from '@/assets/style/buttonStyle';
import { CvTemplatePDF } from '../CvTemplatePDF';
import ColorPicker from './ColorPicker';
interface IProps {
  setChooseTemplate: React.Dispatch<React.SetStateAction<number>>;
}

const EditWithHeader: FC<IProps> = ({ setChooseTemplate }) => {
  if (templatePDFStyles.custom.style.Header === undefined) {
    templatePDFStyles.custom.style.Header = { backgroundColor: '' };
  }
  const [styles, setStyles] = useState({
    color: templatePDFStyles.custom.style.Header.backgroundColor,
    colorTitle: templatePDFStyles.custom.style.Title.color,
    fontSizeTitle: templatePDFStyles.custom.style.Title.fontSize,
    fontFamilyTitle: templatePDFStyles.custom.style.Title.fontFamily,
    colorContact: templatePDFStyles.custom.style.ContactLink.color,
    fontSizeContact: templatePDFStyles.custom.style.Text.fontSize,
    fontFamilyContact: templatePDFStyles.custom.style.Text.fontFamily,
    colorSubtitle: templatePDFStyles.custom.style.Subtitle.color,
    fontSizeSubtitle: templatePDFStyles.custom.style.Subtitle.fontSize,
    fontFamilySubtitle: templatePDFStyles.custom.style.Subtitle.fontFamily,
  });

  const fontFamily = [
    {
      value: 'Courier',
      label: 'Courier',
    },
    {
      value: 'Courier-Bold',
      label: 'Courier-Bold',
    },
    {
      value: 'Courier-Oblique',
      label: 'Courier-Oblique',
    },
    {
      value: 'Courier-BoldOblique',
      label: 'Courier-BoldOblique',
    },
    {
      value: 'Helvetica',
      label: 'Helvetica',
    },
    {
      value: 'Helvetica-Bold',
      label: 'Helvetica-Bold',
    },
    {
      value: 'Helvetica-Oblique',
      label: 'Helvetica-Oblique',
    },
    {
      value: 'Helvetica-BoldOblique',
      label: 'Helvetica-BoldOblique',
    },
    {
      value: 'Times-Roman',
      label: 'Times-Roman',
    },
    {
      value: 'Times-Bold',
      label: 'Times-Bold',
    },
    {
      value: 'Times-Italic',
      label: 'Times-Italic',
    },
    {
      value: 'Times-BoldItalic',
      label: 'Times-BoldItalic',
    },
  ];

  function handleStyleChange(event, place, type) {
    setStyles((prevStyles) => ({
      ...prevStyles,
      [type]: event,
    }));
    templatePDFStyles.custom.style = {
      ...templatePDFStyles.custom.style,
      [place]: {
        ...templatePDFStyles.custom.style[place],
        [type]: event,
      },
    };
  }

  return (
    <>
      <Box display="flex" justifyContent="space-between" sx={{ m: 5 }}>
        <Box display="flex" flexDirection="column" sx={{ width: '100%', mr: 5 }}>
          <Paper
            elevation={8}
            sx={{ p: 3, mb: 2, display: 'flex', justifyContent: 'space-around' }}
          >
            {templatePDFStyles.custom.style.Header.backgroundColor === '' ? (
              <Box sx={{ mr: 3 }}>
                <Typography sx={{ fontStyle: 'bold' }}>Sidebar color</Typography>
                <ColorPicker
                  handleStyleChange={handleStyleChange}
                  place="Sidebar"
                  styles="backgroundColor"
                />
              </Box>
            ) : (
              <Box sx={{ mr: 3 }}>
                <Typography sx={{ fontStyle: 'bold' }}>Header color</Typography>
                <ColorPicker
                  handleStyleChange={handleStyleChange}
                  place="Header"
                  styles="backgroundColor"
                />
              </Box>
            )}

            <Box>
              <Typography>Body color</Typography>
              <ColorPicker
                handleStyleChange={handleStyleChange}
                place="MainPage"
                styles="backgroundColor"
              />
            </Box>
          </Paper>
          <Paper
            elevation={8}
            sx={{
              p: 3,
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            <Box sx={{ mr: 2 }}>
              <Typography>Title color</Typography>
              <ColorPicker handleStyleChange={handleStyleChange} place="Title" styles="color" />
            </Box>
            <Box sx={{ mr: 2 }}>
              <Typography>Title font size</Typography>
              <Input
                onChange={(e) => handleStyleChange(Number(e.target.value), 'Title', 'fontSize')}
                type="number"
                placeholder="Choose title font size"
                defaultValue={styles.fontSizeTitle}
              />
            </Box>
            <Box>
              <Typography>Title font family</Typography>
              <Select
                defaultValue={`${styles.fontFamilyTitle}`}
                onChange={(e) => handleStyleChange(e, 'Title', 'fontFamily')}
              >
                {fontFamily.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </Paper>
          <Paper elevation={8} sx={{ p: 3, mb: 2, display: 'flex', alignItems: 'center' }}>
            <Box sx={{ mr: 2 }}>
              <Typography>Contact color</Typography>
              <input
                defaultValue={styles.colorContact}
                placeholder="Choose color"
                type="color"
                onChange={(e) => {
                  handleStyleChange(e.target.value, 'Text', 'color');
                  handleStyleChange(e.target.value, 'ContactLink', 'color');
                }}
              />
              <ColorPicker handleStyleChange={handleStyleChange} place="Text" styles="color" />
            </Box>
            <Box sx={{ mr: 2 }}>
              <Typography>Contact font size</Typography>
              <Input
                onChange={(e) => {
                  handleStyleChange(Number(e.target.value), 'Text', 'fontSize');
                  handleStyleChange(Number(e.target.value), 'ContactLink', 'fontSize');
                }}
                type="number"
                placeholder="Choose title font size"
                defaultValue={styles.fontSizeContact}
              />
            </Box>
            <Box sx={{ mr: 2 }}>
              <Typography>Contact font family</Typography>
              <Select
                defaultValue={`${styles.fontFamilyContact}`}
                onChange={(e) => {
                  handleStyleChange(e.target.value, 'Text', 'fontFamily');
                  handleStyleChange(e.target.value, 'ContactLink', 'fontFamily');
                }}
              >
                {fontFamily.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </Paper>
          <Paper elevation={8} sx={{ p: 3, mb: 2, display: 'flex', alignItems: 'center' }}>
            <Box sx={{ mr: 2 }}>
              <Typography>Subtitle color</Typography>
              <ColorPicker handleStyleChange={handleStyleChange} place="Subtitle" styles="color" />
            </Box>
            <Box sx={{ mr: 2 }}>
              <Typography>Subtitle font size</Typography>
              <Input
                onChange={(e) => handleStyleChange(Number(e.target.value), 'Subtitle', 'fontSize')}
                type="number"
                placeholder="Choose title font size"
                defaultValue={styles.fontSizeSubtitle}
              />
            </Box>
            <Box>
              <Typography>Subtitle font family</Typography>
              <Select
                defaultValue={`${styles.fontFamilySubtitle}`}
                onChange={(e) => handleStyleChange(e.target.value, 'Subtitle', 'fontFamily')}
              >
                {fontFamily.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </Paper>
        </Box>
        <CvTemplatePDF styleName={'custom'} />
      </Box>
      <Button sx={{ ...buttonStyle, ml: 5 }} onClick={() => setChooseTemplate(0)}>
        Back
      </Button>
    </>
  );
};

export default EditWithHeader;
