import { View } from '@react-pdf/renderer';

import { SubtitlePDF, ListTitlePDF, TextPDF } from '../../atoms';

import { ExperienceDataType } from '../../../../../assets/const';
import { StyleOptionType } from '../../../const';
import { uniqueKey } from '../../../../../assets/lib';

interface IExperienceProps {
  data: ExperienceDataType[];
  experienceName: string;
  style: StyleOptionType;
}

const experienceContent = (data: ExperienceDataType[], style: StyleOptionType) => {
  const children = data.map((experience) => {
    const { Experience, ExperienceTitle, Text } = style;
    const { description, ...otherData } = experience;

    const propsText = { str: description, style: Text };
    const listTitleProps = { data: otherData, style: { ExperienceTitle } };

    return (
      <View key={uniqueKey()} style={Experience}>
        <ListTitlePDF {...listTitleProps} />
        <TextPDF key={uniqueKey()} {...propsText} />
      </View>
    );
  });

  return children;
};

export const ExperiencePDF = (props: IExperienceProps) => {
  const { data, experienceName, style } = props;
  const { Experiences, Experience, ExperienceTitle, Subtitle, Text } = style;

  const propsSubtitle = { str: experienceName, style: Subtitle };
  const currStyle = { Experience, ExperienceTitle, Text };

  return (
    <View style={Experiences}>
      <SubtitlePDF {...propsSubtitle} />
      {experienceContent(data, currStyle)}
    </View>
  );
};
