import { View } from '@react-pdf/renderer';

import { SubtitlePDF, TextPDF } from '../../atoms';

import { HobbyDataType } from '../../../../../assets/const';
import { uniqueKey } from '../../../../../assets/lib';
import { StyleOptionType } from '../../../const';

interface IHobbiesProps {
  data: HobbyDataType[];
  style: StyleOptionType;
}

const hobbiesContent = (data: HobbyDataType[], style: StyleOptionType) => {
  const children = data.map((hobby) => {
    const { Hobbie, HobbieBullets, Text } = style;
    const hobbyTitle = hobby.hobby;

    const propsBullets = { str: '•', style: Text };
    const propsText = { str: hobbyTitle, style: HobbieBullets };

    return (
      <View key={uniqueKey()} style={Hobbie}>
        <TextPDF key={uniqueKey()} {...propsBullets} />
        <TextPDF key={uniqueKey()} {...propsText} />
      </View>
    );
  });

  return children;
};

export const HobbiesPDF = (props: IHobbiesProps) => {
  const { data, style } = props;
  const { Hobbies, Hobbie, HobbieBullets, Subtitle, Text } = style;

  const propsTitle = { str: 'Hobbies', style: Subtitle };
  const currStyle = { Hobbie, HobbieBullets, Text };

  return (
    <View style={Hobbies}>
      <SubtitlePDF {...propsTitle} />
      {hobbiesContent(data, currStyle)}
    </View>
  );
};
