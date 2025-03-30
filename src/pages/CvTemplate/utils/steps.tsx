import Typography from '@mui/material/Typography';
import {
  AddPhotoAlternate,
  FitnessCenter,
  PermIdentity,
  School,
  Twitter,
  WorkHistory,
} from '@mui/icons-material';
import PersonalInfo from '@organisms/PersonalInfo';
import PersonalInfoPreview from '@/components/organisms/PersonalInfoPreview';
import Education from '@organisms/Education';
import EducationPreview from '@/components/organisms/EducationPreview';
import Experience from '@organisms/Experience';
import ExperiencePreview from '@/components/organisms/ExperiencePreview';
import Social from '@organisms/Social';
import SocialPreview from '@/components/organisms/SocialPreview';
import Hobbies from '@organisms/Hobbies';
import HobbiesPreview from '@/components/organisms/HobbiesPreview/HobbiesPreview';
import PersonalPhoto from '@organisms/PersonalPhoto';
import { ElementType, ReactElement } from 'react';

export interface Step {
  id: number;
  label: ReactElement;
  icon: ElementType;
  form: ReactElement;
  preview: ReactElement;
}

const steps: Step[] = [
  {
    id: 1,
    label: <Typography variant="h5">Personal Info</Typography>,
    icon: PermIdentity,
    form: <PersonalInfo />,
    preview: <PersonalInfoPreview styleName=""/>,
  },
  {
    id: 2,
    label: <Typography variant="h5">Education</Typography>,
    form: <Education />,
    icon: School,
    preview: <EducationPreview styleName=""/>,
  },
  {
    id: 3,
    label: <Typography variant="h5">Experience</Typography>,
    form: <Experience />,
    icon: WorkHistory,
    preview: <ExperiencePreview styleName=""/>,
  },
  {
    id: 4,
    label: <Typography variant="h5">Social</Typography>,
    form: <Social />,
    icon: Twitter,
    preview: <SocialPreview styleName=""/>,
  },
  {
    id: 5,
    label: <Typography variant="h5">Hobbies</Typography>,
    form: <Hobbies />,
    icon: FitnessCenter,
    preview: <HobbiesPreview styleName=""/>,
  },
  {
    id: 6,
    label: <Typography variant="h5">Photo</Typography>,
    form: <PersonalPhoto />,
    icon: AddPhotoAlternate,
    preview: <></>,
  },
];

export default steps;
