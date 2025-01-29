import { uniqueKey } from '../../../../../assets/lib';
import { PersonalDataType, AvatarDataType } from '../../../../../assets/const';
import { StyleOptionType } from '../../../const';

import { TitlePDF, TextPDF, ImagePDF } from '../../atoms';
import { AboutPDF, ContactsPDF } from '../../molecules';
import { Box, Divider } from '@mui/material';

interface IHeaderPDFProps {
  data: {
    personalData: PersonalDataType;
    photoData: AvatarDataType;
  };
  style: StyleOptionType;
}

export const HeaderPDF = (props: IHeaderPDFProps) => {
  const { data, style } = props;
  const { personalData, photoData } = data;

  const {
    Header,
    HeaderWrapper,
    Contact,
    ContactLink,
    ContactIcon,
    ContactWrapper,
    Title,
    Text,
    TextSpecial,
    SubtitleNone,
    SubtitleWrapper,
    Subtitle,
    Img,
  } = style;

  const fullNameTitiles = personalData.fullName.split(' ');

  const propsImage = { imgPath: photoData.avatar, style: Img };
  const propsSubtitle = {
    str: personalData.position,
    style: { ...TextSpecial },
  };
  const propsConcats = {
    data: {
      address: personalData.address,
      phone: personalData.phone,
      website: personalData.website,
      email: personalData.email,
    },
    style: { Subtitle: Header.name === 'metro' ? Subtitle : SubtitleNone, Contact, ContactLink, ContactIcon, Text, ContactWrapper },
  };
  const propsAbout = { bio: personalData.bio, style: { Text, Subtitle: Subtitle, SubtitleWrapper } };
  return (
    <>
      {Header.name === 'toronto' ? (
        <>
          <Box style={Header} sx={{ display: 'flex' }}>
            <Box sx={{ mr: 4, maxWidth:'50%', wordBreak : 'break-word'}}>
              <ImagePDF {...propsImage} />
              <TextPDF {...propsSubtitle} />
              <ContactsPDF {...propsConcats} />
            </Box>
            <Box style={HeaderWrapper}>
              <TitlePDF
                key={uniqueKey()}
                {...{ fullName: fullNameTitiles[0] + ' ' + fullNameTitiles[1], style: Title }}
              />
              <Box sx={{ background: '#eeeeee', borderRadius: '20px', p: '2%', pl: '3%' }}>
                <AboutPDF {...propsAbout} />
              </Box>
            </Box>
          </Box>
          <Divider variant="middle" />
        </>
      ) : Header.name === 'oslo' ? (
        <>
          <Box style={Header} sx={{ display: 'flex', minHeight: '200px' }}>
            <Box
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
            >
              <ImagePDF {...propsImage} />
              <TitlePDF
                key={uniqueKey()}
                {...{ fullName: fullNameTitiles[0] + ' ' + fullNameTitiles[1], style: Title }}
              />
              <TextPDF {...propsSubtitle} />
              <div
                style={{
                  borderTop: '1px solid #c0c0c0',
                  width: '100%',
                  marginBottom: 10,
                }}
              ></div>
              <ContactsPDF {...propsConcats} />
            </Box>
          </Box>
        </>
      ) : Header.name === 'chrono' ? (
        <>
          <Box style={Header}>
            <TitlePDF
              {...{ fullName: fullNameTitiles[0] + ' ' + fullNameTitiles[1], style: Title }}
            />
            <AboutPDF {...propsAbout} />
            <ContactsPDF {...propsConcats} />
          </Box>
        </>
      ) : Header.name === 'metro' ? (
        <>
        <Box style={Header}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '5px solid #232961' }}>
            <TitlePDF
              {...{ fullName: fullNameTitiles[0] + ' ' + fullNameTitiles[1], style: Title }}
            />
            <ImagePDF {...propsImage} />
          </Box>
          <ContactsPDF {...propsConcats} />
          <AboutPDF {...propsAbout} />
        </Box>
        </>
      ) : (
        <Box style={Header} sx={{ display: 'flex' }}>
          <ImagePDF {...propsImage} />
          <Box style={HeaderWrapper}>
            {fullNameTitiles.map((str) => (
              <TitlePDF key={uniqueKey()} {...{ fullName: str, style: Title }} />
            ))}
            <TextPDF {...propsSubtitle} />
          </Box>
          <ContactsPDF {...propsConcats} />
        </Box>
      )}
    </>
  );
};
