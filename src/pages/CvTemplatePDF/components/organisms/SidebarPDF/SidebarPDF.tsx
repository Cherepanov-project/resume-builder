import { AvatarDataType, PersonalDataType } from '../../../../../assets/const';
import { uniqueKey } from '../../../../../assets/lib';
import { StyleOptionType } from '../../../const';

import { ImagePDF, TitlePDF, SubtitlePDF } from '../../atoms';
import { AboutPDF, ContactsPDF } from '../../molecules';
import { Box } from '@mui/material';

interface ISidebarPDFProps {
  data: {
    personalData: PersonalDataType;
    photoData: AvatarDataType;
  };
  style: StyleOptionType;
}

export const SidebarPDF = (props: ISidebarPDFProps) => {
  const { data, style } = props;
  const { personalData, photoData } = data;

  console.log('SIDEBAR PROPS', props);
  const {
    Sidebar,
    SidebarWrapper,
    SidebarImage,
    Contact,
    ContactLink,
    ContactIcon,
    Title,
    Text,
    TextSpecial,
    Subtitle,
    Img,
  } = style;

  const fullNameTitiles = personalData.fullName ? personalData.fullName.split(' ') : [];

  const propsImage = { imgPath: photoData.avatar, style: Img };
  const propsSubtitle = {
    str: personalData.position,
    style: { Text: { ...Text, ...TextSpecial } },
  };
  const propsAbout = { bio: personalData.bio, style: { Text, Subtitle: Subtitle } };
  const propsContacts = {
    data: {
      address: personalData.address,
      phone: personalData.phone,
      website: personalData.website,
      email: personalData.email,
    },
    style: { Subtitle, Contact, ContactLink, ContactIcon, Text },
  };

  return (
    <Box style={Sidebar}>
      <Box style={SidebarImage}>
        <ImagePDF {...propsImage} />
      </Box>
      <Box>
        {fullNameTitiles.map((str) => (
          <TitlePDF key={uniqueKey()} {...{ fullName: str, style: Title }} />
        ))}
        <SubtitlePDF {...propsSubtitle} />
      </Box>
      <Box style={SidebarWrapper}>
        <AboutPDF {...propsAbout} />
      </Box>
      <Box style={SidebarWrapper}>
        <ContactsPDF {...propsContacts} />
      </Box>
    </Box>
  );
};
