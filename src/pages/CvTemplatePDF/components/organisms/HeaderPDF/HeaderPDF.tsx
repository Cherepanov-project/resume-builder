import { View } from '@react-pdf/renderer';

import photo from '../.././../assets/images/lukeSky.jpg';

import { uniqueKey } from '../../../../../assets/lib';
import { PersonalDataType } from '../../../../../assets/const';
import { StyleOptionType } from '../../../const';

import { TitlePDF, TextPDF, ImagePDF } from '../../atoms';
import { ContactsPDF } from '../../molecules';

interface IHeaderPDF extends PersonalDataType {
  style: StyleOptionType;
}

export const HeaderPDF = (props: IHeaderPDF) => {
  // позже исправить, должны пояыляться из формы
  const imgPath = photo;
  const { fullName, position, adress, phone, website, mail, style } = props;
  const {
    Header,
    HeaderWrapper,
    ContactsWrapeer,
    Contact,
    ContactLink,
    ContactIcon,
    Title,
    Text,
    TextSpecial,
    SubtitleNone,
    Img,
  } = style;

  const fullNameTitiles = fullName.split(' ');

  const propsImage = { imgPath: imgPath, style: Img };
  const propsSubtitle = { str: position, style: { Text: { ...Text, ...TextSpecial } } };
  const propsConcats = {
    data: { adress, phone, website, mail },
    style: { Subtitle: SubtitleNone, Contact, ContactLink, ContactIcon, Text },
  };

  return (
    <View style={Header}>
      <View style={style.HeaderWrapper}>
        <ImagePDF {...propsImage} />
      </View>
      <View style={HeaderWrapper}>
        {fullNameTitiles.map((str) => (
          <TitlePDF key={uniqueKey()} {...{ fullName: str, style: Title }} />
        ))}
        <TextPDF {...propsSubtitle} />
      </View>
      <View style={ContactsWrapeer}>
        <ContactsPDF {...propsConcats} />
      </View>
    </View>
  );
};
