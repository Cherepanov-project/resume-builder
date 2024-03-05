import { uniqueKey } from '../../../../../assets/lib';
import { PersonalDataType, AvatarDataType } from '../../../../../assets/const';
import { StyleOptionType } from '../../../const';

import { TitlePDF, TextPDF } from '../../atoms';
import { ContactsPDF } from '../../molecules';
import { Box } from '@mui/material';

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
    Title,
    Text,
    TextSpecial,
    SubtitleNone,
    Img,
  } = style;

  const fullNameTitiles = personalData.fullName.split(' ');

  const propsImage = { imgPath: photoData.avatar, style: Img };
  const propsSubtitle = {
    str: personalData.position,
    style: { Text: { ...Text, ...TextSpecial } },
  };
  const propsConcats = {
    data: {
      address: personalData.address,
      phone: personalData.phone,
      website: personalData.website,
      email: personalData.email,
    },
    style: { Subtitle: SubtitleNone, Contact, ContactLink, ContactIcon, Text },
  };

  return (
    <Box style={Header} sx={{ display: 'flex' }}>
      <img src={propsImage.imgPath} style={propsImage.style} />
      <Box style={HeaderWrapper}>
        {fullNameTitiles.map((str) => (
          <TitlePDF key={uniqueKey()} {...{ fullName: str, style: Title }} />
        ))}
        <TextPDF {...propsSubtitle} />
      </Box>
      <ContactsPDF {...propsConcats} />
    </Box>
  );
};
