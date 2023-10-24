import { View } from '@react-pdf/renderer';

import photo from '../.././../assets/images/lukeSky.jpg';

import { PersonalDataType } from '../../../../../assets/const';
import { StyleOptionType } from '../../../const';

import { ImagePDF } from '../../atoms';
import { AboutPDF, ContactsPDF } from '../../molecules';

interface ISidebarShortPDF extends PersonalDataType {
  style: StyleOptionType;
}

export const SidebarShortPDF = (props: ISidebarShortPDF) => {
  // позже исправить, должны пояыляться из Формы
  const imgPath = photo;
  const { bio, style, phone, mail, website, adress } = props;
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

  const propsImage = { imgPath, style: Img };
  const propsAbout = { bio, style: { Text, Subtitle: Subtitle } };
  const propsContacts = {
    data: { phone, mail, website, adress },
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
