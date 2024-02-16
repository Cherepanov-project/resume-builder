import { View } from '@react-pdf/renderer';

import { uniqueKey } from '../../../../../assets/lib';
import { PersonalDataType, AvatarDataType } from '../../../../../assets/const';
import { StyleOptionType } from '../../../const';

import { TitlePDF, TextPDF, ImagePDF } from '../../atoms';
import { ContactsPDF } from '../../molecules';

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
