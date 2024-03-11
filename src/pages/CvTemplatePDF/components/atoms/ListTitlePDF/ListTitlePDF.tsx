import { uniqueKey } from '../../../../../assets/lib';
import { StyleOptionType } from '../../../const';
import { Box, Typography } from '@mui/material';

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
  const { ExperienceTitle, ExperienceTime, ExperiencePosition } = style;
  const { EducationTitle, EducationTime, EducationPosition } = style;

  return (
    <Box>
      <Typography key={uniqueKey()} style={{ ...ExperienceTitle, ...EducationTitle }}>
        {`${name}`}
      </Typography>
      <Typography style={{ ...ExperienceTime, ...EducationTime }}>
        {`${fromYear} - ${toYear}`}
      </Typography>
      <Typography style={{ ...ExperiencePosition, ...EducationPosition }}>{position}</Typography>
    </Box>
  );
};
