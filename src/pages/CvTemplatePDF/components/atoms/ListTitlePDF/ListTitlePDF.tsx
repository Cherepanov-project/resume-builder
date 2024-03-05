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
  const { ExperienceTitle } = style;

  return (
    <Box>
      <Typography key={uniqueKey()} style={ExperienceTitle}>
        {`${name} | ${fromYear} -- ${toYear}`}
      </Typography>
      <Typography style={ExperienceTitle}>{position}</Typography>
    </Box>
  );
};
