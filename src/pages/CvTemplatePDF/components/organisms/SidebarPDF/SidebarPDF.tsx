import { View } from '@react-pdf/renderer';

import photo from '../.././../assets/images/lukeSky.jpg';

import { PersonalDataType } from '../../../../../assets/const';
import { uniqueKey } from '../../../../../assets/lib';
import { StyleOptionType } from '../../../const';

import { ImagePDF, TitlePDF, SubtitlePDF } from '../../atoms';
import { AboutPDF, ContactsPDF } from '../../molecules';

interface ISidebarPDF extends PersonalDataType {
  style: StyleOptionType;
}

export const SidebarPDF = (props: ISidebarPDF) => {
  // позже исправить, должны пояыляться из Формы
  const imgPath = photo;

  const { fullName, bio, position, adress, phone, website, mail, style } = props;
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

  const fullNameTitiles = fullName.split(' ');

  const propsImage = { imgPath: imgPath, style: Img };
  const propsSubtitle = { str: position, style: { Text: { ...Text, ...TextSpecial } } };
  const propsAbout = { bio, style: { Text, Subtitle: Subtitle } };
  const propsContacts = {
    data: { phone, mail, website, adress },
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
