import { View } from '@react-pdf/renderer';

import { AvatarDataType, PersonalDataType } from '../../../../../assets/const';
import { uniqueKey } from '../../../../../assets/lib';
import { StyleOptionType } from '../../../const';

import { ImagePDF, TitlePDF, SubtitlePDF } from '../../atoms';
import { AboutPDF, ContactsPDF } from '../../molecules';

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
    <View style={Sidebar}>
      <View style={SidebarImage}>
        <ImagePDF {...propsImage} />
      </View>
      <View>
        {fullNameTitiles.map((str) => (
          <TitlePDF key={uniqueKey()} {...{ fullName: str, style: Title }} />
        ))}
        <SubtitlePDF {...propsSubtitle} />
      </View>
      <View style={SidebarWrapper}>
        <AboutPDF {...propsAbout} />
      </View>
      <View style={SidebarWrapper}>
        <ContactsPDF {...propsContacts} />
      </View>
    </View>
  );
};
