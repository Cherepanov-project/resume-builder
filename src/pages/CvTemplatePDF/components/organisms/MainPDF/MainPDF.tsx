import {
  EducationDataType,
  ExperienceDataType,
  SocialDataType,
  HobbyDataType,
} from '../../../../../assets/const';
import { StyleOptionType } from '../../../const';

import { ExperiencePDF, SocialPDF, HobbiesPDF } from '../../molecules';
import { Box } from '@mui/material';

interface IMainPDFProps {
  data: {
    educationData: EducationDataType[];
    experienceData: ExperienceDataType[];
    socialData: SocialDataType[];
    hobbyData: HobbyDataType[];
  };
  style: StyleOptionType;
}

export const MainPDF = (props: IMainPDFProps) => {
  const { data, style } = props;
  const { educationData, experienceData, socialData, hobbyData } = data;

  const {
    Main,
    Subtitle,
    SubtitleSpecial,
    Experiences,
    Experience,
    ExperienceTitle,
    Socials,
    Social,
    SocialTitle,
    Hobbies,
    Hobbie,
    HobbieBullets,
    Text,
  } = style;

  const propsEducation = {
    data: educationData,
    experienceName: 'Education',
    style: {
      Subtitle: { ...Subtitle, ...SubtitleSpecial },
      Experiences,
      Experience,
      ExperienceTitle,
      Text,
    },
  };

  const propsExperience = {
    data: experienceData,
    experienceName: 'Experience',
    style: {
      Subtitle: { ...Subtitle, ...SubtitleSpecial },
      Experiences,
      Experience,
      ExperienceTitle,
      Text,
    },
  };

  const propsSocial = {
    data: socialData,
    style: {
      Socials,
      Social,
      SocialTitle,
      Subtitle: { ...Subtitle, ...SubtitleSpecial },
      Text,
    },
  };

  const propsHobbies = {
    data: hobbyData,
    style: {
      Hobbies,
      Hobbie,
      HobbieBullets,
      Subtitle: { ...Subtitle, ...SubtitleSpecial },
      Text,
    },
  };

  return (
    <Box style={Main}>
      <Box style={style.MainWrapper}>
        <ExperiencePDF {...propsEducation} />
      </Box>
      <Box style={style.MainWrapper}>
        <ExperiencePDF {...propsExperience} />
      </Box>
      <Box style={style.MainWrapper}>
        <SocialPDF {...propsSocial} />
      </Box>
      <Box style={style.MainWrapper}>
        <HobbiesPDF {...propsHobbies} />
      </Box>
    </Box>
  );
};
