import {
  AvatarDataType,
  HobbyDataType,
  PersonalDataType,
  SocialDataType,
} from '../../../../../assets/const';
import { uniqueKey } from '../../../../../assets/lib';
import { StyleOptionType } from '../../../const';

import { ImagePDF, TitlePDF, SubtitlePDF } from '../../atoms';
import { AboutPDF, ContactsPDF, HobbiesPDF, SocialPDF } from '../../molecules';
import { Box } from '@mui/material';

interface ISidebarPDFProps {
  data: {
    personalData: PersonalDataType;
    photoData: AvatarDataType;
    socialData: SocialDataType[];
    hobbyData: HobbyDataType[];
  };
  style: StyleOptionType;
}

export const SidebarPDF = (props: ISidebarPDFProps) => {
  const { data, style } = props;
  const { personalData, photoData, socialData, hobbyData } = data;

  const {
    Socials,
    Social,
    SocialTitle,
    Sidebar,
    SidebarWrapper,
    SidebarImage,
    SubtitleSpecial,
    Hobbies,
    Hobbie,
    HobbieBullets,
    Contact,
    ContactLink,
    ContactIcon,
    ContactWrapper,
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
    style: { Subtitle, Contact, ContactLink, ContactIcon, Text, ContactWrapper },
  };
  const propsSocial = {
    data: socialData,
    style: {
      Socials,
      Social,
      SocialTitle,
      Subtitle: { ...Subtitle, ...SubtitleSpecial },
      Text,
    },
  };

  const propsHobbies = {
    data: hobbyData,
    style: {
      Hobbies,
      Hobbie,
      HobbieBullets,
      Subtitle: { ...Subtitle, ...SubtitleSpecial },
      Text,
    },
  };

  return (
    <>
      {Sidebar.type === 'sydney' ? (
        <Box style={Sidebar}>
          <ContactsPDF {...propsContacts} />
          <SocialPDF {...propsSocial} />
          <HobbiesPDF {...propsHobbies} />
        </Box>
      ) : (
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
      )}
    </>
  );
};
