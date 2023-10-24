import { View, Text } from '@react-pdf/renderer';

import { uniqueKey } from '../../../../../assets/lib';
import { StyleOptionType } from '../../../const';

type TitlePropsType = {
  name: string;
  position: string;
  fromYear: string;
  toYear: string;
};

interface ITitleProps {
  data: TitlePropsType;
  style: StyleOptionType;
}

export const ListTitlePDF = (props: ITitleProps) => {
  const { data, style } = props;
  const { name, position, fromYear, toYear } = data;
  const { ExperienceTitle } = style;

  return (
    <View>
      <Text key={uniqueKey()} style={ExperienceTitle}>
        {`${name} | ${fromYear} -- ${toYear}`}
      </Text>
      <Text style={ExperienceTitle}>{position}</Text>
    </View>
  );
};
