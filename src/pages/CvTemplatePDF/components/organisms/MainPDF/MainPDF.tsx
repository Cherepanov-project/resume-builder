import {
  EducationDataType,
  ExperienceDataType,
  SocialDataType,
  HobbyDataType,
  PersonalDataType,
  AvatarDataType,
} from '../../../../../assets/const';
import { StyleOptionType } from '../../../const';

import { ExperiencePDF, SocialPDF, HobbiesPDF, AboutPDF } from '../../molecules';
import { Box } from '@mui/material';
import { EducationPDF } from '../../molecules/EducationPDF';
import { ImagePDF, TextPDF, TitlePDF } from '../../atoms';
import { uniqueKey } from '@/assets/lib';

interface IMainPDFProps {
  data: {
    educationData: EducationDataType[];
    experienceData: ExperienceDataType[];
    socialData: SocialDataType[];
    hobbyData: HobbyDataType[];
    personalData: PersonalDataType;
    photoData: AvatarDataType;
  };
  style: StyleOptionType;
}

export const MainPDF = (props: IMainPDFProps) => {
  const { data, style } = props;
  const { educationData, experienceData, socialData, hobbyData, personalData, photoData } = data;

  const {
    Main,
    Subtitle,
    Title,
    SubtitleSpecial,
    SubtitleWrapper,
    Experiences,
    Experience,
    ExperienceTitle,
    ExperienceTime,
    ExperiencePosition,
    ExperienceDescription,
    Educations,
    Education,
    EducationTitle,
    EducationTime,
    EducationPosition,
    Socials,
    Social,
    SocialTitle,
    SocialText,
    Hobbies,
    Hobbie,
    HobbieBullets,
    Text,
    Img,
  } = style;

  const propsEducation = {
    data: educationData,
    experienceName: 'Education',
    style: {
      Subtitle: { ...Subtitle, ...SubtitleSpecial },
      Educations,
      Education,
      EducationTitle,
      EducationTime,
      EducationPosition,
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
      ExperienceTime,
      ExperiencePosition,
      Text,
      ExperienceDescription,
    },
  };

  const propsSocial = {
    data: socialData,
    style: {
      Socials,
      Social,
      SocialTitle,
      SocialText,
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

  const propsImage = { imgPath: photoData.avatar, style: Img };
  const propsAbout = {
    bio: personalData.bio,
    style: { Text, Subtitle: Subtitle, SubtitleWrapper },
  };
  const fullNameTitiles = personalData.fullName.split(' ');
  const propsSubtitle = {
    str: personalData.position,
    style: { ...Text },
  };

  return (
    <>
      {Main.type === 'sydney' ? (
        <Box sx={{ mt: '30px', ml: '30px', mr: '30px', height: '100%' }}>
          <Box sx={{ display: 'flex', mb: '10px' }}>
            <ImagePDF {...propsImage} />
            <Box>
              <TitlePDF
                key={uniqueKey()}
                {...{ fullName: fullNameTitiles[0] + ' ' + fullNameTitiles[1], style: Title }}
              />
              <TextPDF {...propsSubtitle} />
            </Box>
          </Box>
          <AboutPDF {...propsAbout} />
          <ExperiencePDF {...propsExperience} />
          <EducationPDF {...propsEducation} />
        </Box>
      ) : Main.type === 'oslo' ? (
        <Box sx={{ mt: '30px', ml: '70px', mr: '70px', height: '100%' }}>
          <AboutPDF {...propsAbout} />
          <ExperiencePDF {...propsExperience} />
          <EducationPDF {...propsEducation} />
          <SocialPDF {...propsSocial} />
          <HobbiesPDF {...propsHobbies} />
        </Box>
      ) : (
        <Box style={Main}>
          <Box sx={{ height: '100%' }}>
            <EducationPDF {...propsEducation} />
            <ExperiencePDF {...propsExperience} />
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'column' }}>
            <SocialPDF {...propsSocial} />
            <HobbiesPDF {...propsHobbies} />
          </Box>
        </Box>
      )}
    </>
  );
};
