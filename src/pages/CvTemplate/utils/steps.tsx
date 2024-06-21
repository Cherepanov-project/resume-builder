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
import Education from '@organisms/Education';
import Experience from '@organisms/Experience';
import Social from '@organisms/Social';
import Hobbies from '@organisms/Hobbies';
import PersonalPhoto from '@organisms/PersonalPhoto';
import { ElementType, ReactElement } from 'react';

export interface Step {
  id: number;
  label: ReactElement;
  icon: ElementType;
  form: ReactElement;
}

const steps: Step[] = [
  {
    id: 1,
    label: <Typography variant="h5">Personal Info</Typography>,
    icon: PermIdentity,
    form: <PersonalInfo />,
  },
  {
    id: 2,
    label: <Typography variant="h5">Education</Typography>,
    form: <Education />,
    icon: School,
  },
  {
    id: 3,
    label: <Typography variant="h5">Experience</Typography>,
    form: <Experience />,
    icon: WorkHistory,
  },
  {
    id: 4,
    label: <Typography variant="h5">Social</Typography>,
    form: <Social />,
    icon: Twitter,
  },
  {
    id: 5,
    label: <Typography variant="h5">Hobbies</Typography>,
    form: <Hobbies />,
    icon: FitnessCenter,
  },
  {
    id: 6,
    label: <Typography variant="h5">Photo</Typography>,
    form: <PersonalPhoto />,
    icon: AddPhotoAlternate,
  },
];

export default steps;
