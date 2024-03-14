import { View } from '@react-pdf/renderer';

import { AvatarDataType, PersonalDataType } from '../../../../../assets/const';
import { StyleOptionType } from '../../../const';

import { ImagePDF } from '../../atoms';
import { AboutPDF, ContactsPDF } from '../../molecules';

interface ISidebarShortPDFProps {
  data: {
    personalData: PersonalDataType;
    photoData: AvatarDataType;
  };
  style: StyleOptionType;
}

export const SidebarShortPDF = (props: ISidebarShortPDFProps) => {
  const { data, style } = props;
  const { personalData, photoData } = data;

  const {
    SidebarShort,
    SidebarShortImage,
    SidebarShortWrapper,
    Img,
    Text,
    Subtitle,
    Contact,
    ContactLink,
    ContactIcon,
  } = style;

  const propsImage = { imgPath: photoData.avatar, style: Img };
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
    <View style={SidebarShort}>
      <View style={SidebarShortImage}>
        <ImagePDF {...propsImage} />
      </View>
      <View style={SidebarShortWrapper}>
        <AboutPDF {...propsAbout} />
      </View>
      <View style={SidebarShortWrapper}>
        <ContactsPDF {...propsContacts} />
      </View>
    </View>
  );
};
