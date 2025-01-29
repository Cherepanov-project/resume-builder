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
    const { Education, EducationTitle, EducationTime, EducationPosition, Text } = style;
    const { description, ...otherData } = experience;

    const propsText = { str: description, style: Text };
    const listTitleProps = {
      data: Education.name === 'chrono' || Education.name === 'metro' || Education.name === 'oslo' || Education.name === 'sydney' ? experience : otherData,
      style: { EducationTitle, EducationTime, EducationPosition, Education, Text },
    };

    return (
      <Box key={uniqueKey()} style={Education}>
        <ListTitlePDF {...listTitleProps} />
        {Education.name !== 'chrono' && Education.name !== 'metro' && Education.name !== 'oslo' && Education.name !== 'sydney' && <TextPDF key={uniqueKey()} {...propsText} />}
      </Box>
    );
  });

  return children;
};

export const EducationPDF = (props: IExperienceProps) => {
  const { data, experienceName, style } = props;
  if (!data) {
    return null;
  }
  const {
    Educations,
    Education,
    EducationTitle,
    EducationTime,
    EducationPosition,
    Subtitle,
    Text,
  } = style;

  const propsSubtitle = { str: experienceName, style: Subtitle };
  const currStyle = { Education, EducationTitle, EducationTime, EducationPosition, Text };

  return (
    <Box style={Educations}>
      <SubtitlePDF {...propsSubtitle} />
      {experienceContent(data, currStyle)}
    </Box>
  );
};
