import { ITemporaryCvDataSliceProps } from '../../../assets/const';
import { StyleOptionType } from '../const';
import { HeaderShortPDF, SidebarShortPDF, MainPDF } from '../components/organisms';
import { Box, Divider, Typography } from '@mui/material';
import { Image } from '@mui/icons-material';

interface IPageDefaultPDF extends ITemporaryCvDataSliceProps {
  style: StyleOptionType;
}

export const PageToronto = (props: IPageDefaultPDF) => {
  const { personalData, photoData, style, ...otherDate } = props;
  const { PageWrapper, SidebarPage, MainPage, ...otherStyle } = style;

  const propsHeader = { ...personalData, style: otherStyle };
  const propsSidebar = { data: { personalData, photoData }, style: otherStyle };
  const propsMain = { data: otherDate, style: otherStyle };

  console.log(otherDate);

  return (
    <Box sx={{ p: 2 }}>
      <Box display={'flex'}>
        <Box sx={{ mr: 2 }}>
          <Box
            component="img"
            sx={{
              height: 70,
              width: 50,
            }}
            alt="Avatar"
            src={photoData.avatar}
          />
          <Typography sx={{ fontWeight: 700, fontSize: 30 }}>{personalData.position}</Typography>
          <Typography>{personalData.email}</Typography>
          <Typography>{personalData.phone}</Typography>
          <Typography>{personalData.address}</Typography>
        </Box>
        <Box sx={{ width: '100%' }}>
          <Typography sx={{ fontWeight: 700, fontSize: 70 }}>{personalData.fullName}</Typography>
          <Box sx={{ background: '#d4b2b2', borderRadius: '10px', p: 1 }}>
            <Typography sx={{ fontWeight: 700, fontSize: 20 }}>About me</Typography>
            <Typography>{personalData.bio}</Typography>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ mb: 1 }} />
      <Box display={'flex'}>
        <Box flex={'60%'} sx={{ mr: 1 }}>
          <Typography sx={{ fontWeight: 700, fontSize: 30 }}>Experience</Typography>
          {otherDate.experienceData.map((experience) => {
            return (
              <Box>
                <Typography
                  sx={{
                    background: 'black',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: 25,
                    display: 'inline-block',
                  }}
                >
                  {experience.position}
                </Typography>
                <Typography>
                  {experience.fromYear}-{experience.toYear}
                </Typography>
                <Typography sx={{ ml: 1 }}>{experience.description}</Typography>
              </Box>
            );
          })}
          <Typography sx={{ fontWeight: 700, fontSize: 30 }}>Education</Typography>
          {otherDate.educationData.map((education) => {
            return (
              <Box>
                <Typography
                  sx={{
                    background: 'black',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: 25,
                    display: 'inline-block',
                    p: 0.3,
                  }}
                >
                  {education.position}
                </Typography>
                <Typography>
                  {education.fromYear}-{education.toYear}
                </Typography>
                <Typography sx={{ ml: 1 }}>{education.description}</Typography>
              </Box>
            );
          })}
        </Box>
        <Box flex={'40%'}>
          <Box sx={{ background: '#d4b2b2', borderRadius: '10px', p: 1, mb: 1 }}>
            <Typography sx={{ fontWeight: 700, fontSize: 25 }}>Hobby</Typography>
            {otherDate.hobbyData.map((hobby) => {
              return <Typography>{hobby.hobby}</Typography>;
            })}
          </Box>
          <Box sx={{ background: '#d4b2b2', borderRadius: '10px', p: 1 }}>
            <Typography sx={{ fontWeight: 700, fontSize: 25 }}>Social</Typography>
            {otherDate.socialData.map((social) => {
              return (
                <Box>
                  <Typography sx={{ fontWeight: 700 }}> {social.name}</Typography>
                  <Typography sx={{ ml: 1 }}>{social.link}</Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
