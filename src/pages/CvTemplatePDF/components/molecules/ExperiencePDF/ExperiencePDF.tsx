import { SubtitlePDF, ListTitlePDF, TextPDF } from '../../atoms';

import { ExperienceDataType } from '../../../../../assets/const';
import { StyleOptionType } from '../../../const';
import { uniqueKey } from '../../../../../assets/lib';
import { Box } from '@mui/material';

interface IExperienceProps {
  data: ExperienceDataType[];
  experienceName: string;
  style: StyleOptionType;
}

const experienceContent = (data: ExperienceDataType[] | undefined, style: StyleOptionType) => {
  if (!data) {
    return null;
  }
  const children = data.map((experience) => {
    const { Experience, ExperienceTitle, Text, ExperienceTime, ExperiencePosition, ExperienceDescription } = style;
    const { description, ...otherData } = experience;

    const propsText = { str: description, style: Text };
    const listTitleProps = {
      data: Experience.name === 'chrono' ? experience : otherData,
      style: { ExperienceTitle, ExperienceTime, ExperiencePosition, Experience, ExperienceDescription },
    };

    return (
      <Box key={uniqueKey()} style={Experience}>
        <ListTitlePDF {...listTitleProps} />
        {Experience.name !== 'chrono' && <TextPDF {...propsText} />}
      </Box>
    );
  });

  return children;
};

export const ExperiencePDF = (props: IExperienceProps) => {
  const { data, experienceName, style } = props;
  if (!data) {
    return null;
  }
  const {
    Experiences,
    Experience,
    ExperienceTitle,
    Subtitle,
    Text,
    ExperienceTime,
    ExperiencePosition,
    ExperienceDescription,
  } = style;

  const propsSubtitle = { str: experienceName, style: Subtitle };
  const currStyle = { Experience, ExperienceTitle, Text, ExperienceTime, ExperiencePosition, ExperienceDescription };

  return (
    <Box style={Experiences}>
      <SubtitlePDF {...propsSubtitle} />
      {experienceContent(data, currStyle)}
    </Box>
  );
};
