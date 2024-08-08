import { StyleOptionType } from '../../../const';
import { Box, Typography } from '@mui/material';

type TitlePropsType = {
  name: string;
  position: string;
  fromYear: string;
  toYear: string;
  description?: string;
};

interface ITitleProps {
  data: TitlePropsType;
  style: StyleOptionType;
}

export const ListTitlePDF = (props: ITitleProps) => {
  const { data, style } = props;

  const { name, position, fromYear, toYear, description } = data;
  const { ExperienceTitle, ExperienceTime, ExperiencePosition, ExperienceDescription, Experience } = style;
  const { EducationTitle, EducationTime, EducationPosition, Education } = style;

  return (
    <>
      {(Education && Education.name === 'chrono') || (Experience && Experience.name === 'chrono') ? (
        <Box sx={{ display: 'flex'}}>
          <Box sx={{ position: 'absolute', height: '100%' }}>
            <Box sx={{ position: 'relative', backgroundColor: '#3e94e4', width: '10px', height: '10px', left: '110px', top: '5px' }} />
          </Box>
          <Typography style={{ ...ExperienceTime, ...EducationTime }}>
            {`${fromYear} - ${toYear}`}
          </Typography>
          <Box sx={{ width: 700}}>
            <Typography style={{ ...ExperiencePosition, ...EducationPosition }}>{position}</Typography>
            <Typography style={{ ...ExperienceTitle, ...EducationTitle }}>
              {`${name}`}
            </Typography>
            <Typography style={{ ...ExperienceDescription, ...EducationPosition }}>{description}</Typography>
          </Box>
        </Box>
      ) : (Education && Education.name === 'metro') || (Experience && Experience.name === 'metro') ? (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Typography style={{ ...ExperiencePosition, ...EducationPosition }}>{description}</Typography>
            {Education ?
            <Typography style={{ ...ExperienceTitle, ...EducationTitle }}>
              {`${name}, ${position}`}
            </Typography> :
            <>
              <Typography style={{ ...ExperiencePosition, ...EducationPosition }}>{position}</Typography>
              <Typography style={{ ...ExperienceTitle, ...EducationTitle }}>{name}</Typography>
            </>}
          </Box>
          <Typography style={{ ...ExperienceTime, ...EducationTime }}>
            {`${fromYear} - ${toYear}`}
          </Typography>
        </Box>
      ) : (Education && Education.name === 'oslo') || (Experience && Experience.name === 'oslo') || (Education && Education.name === 'sydney') || (Experience && Experience.name === 'sydney') ? (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography style={{ ...ExperienceTitle, ...EducationTitle }}>{Education && `${description}, `}{`${name}, ${position}`}</Typography>
          <Typography style={{ ...ExperienceTime, ...EducationTime }}>
            {`${fromYear} - ${toYear}`}
          </Typography>
        </Box>
      ) : (
        <Box>
          <Typography style={{ ...ExperienceTitle, ...EducationTitle }}>
            {`${name}`}
          </Typography>
          <Typography style={{ ...ExperienceTime, ...EducationTime }}>
            {`${fromYear} - ${toYear}`}
          </Typography>
          <Typography style={{ ...ExperiencePosition, ...EducationPosition }}>{position}</Typography>
        </Box>
      )}
    </>
  );
};
