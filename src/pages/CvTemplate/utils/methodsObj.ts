import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '@pages/CvTemplate/utils/index.ts';

interface EducationData {
  study: string;
  degree: string;
  school: string;
  educationFromYear: Date;
  'education-to-year': Date;
}

interface ExperienceData {
  'work-title': string;
  company: string;
  'experience-from-year': string;
  'experience-to-year': string;
  'company-info': string;
}

interface HobbyData {
  label: string;
}

interface SocialData {
  'social-name': string;
  'social-link': string;
}

interface DefaultValues {
  fullName: string;
  position: string;
  address: string;
  bio: string;
  email: string;
  phone: number;
  website: string;
  educationData: EducationData[];
  experienceData: ExperienceData[];
  hobbyData: HobbyData[];
  socialData: SocialData[];
}

interface IMethodsObj {
  mode: 'onSubmit';
  resolver: Resolver<DefaultValues>;
  defaultValues: DefaultValues;
}

const methodsObj: IMethodsObj = {
  mode: 'onSubmit',
  resolver: yupResolver(validationSchema) as Resolver<DefaultValues>,
  defaultValues: {
    fullName: 'Alex Ivanov',
    position: 'Team Lead',
    address: 'Russia',
    bio: 'Adept in creating a comprehensive and well-rounded curriculum that meets education requirements and standards. Experienced and passionate Early Childhood Teacher with a love for educating today youth.',
    email: 'qweqwen@inbox.ru',
    phone: 12313123,
    website: 'https://www.youtube.com/',

    educationData: [
      {
        study: 'qweqwe',
        degree: 'qweqwe',
        school: 'qweqwe',
        educationFromYear: new Date(),
        'education-to-year': new Date(),
      },
    ],

    experienceData: [
      {
        'work-title': 'qweqwe',
        company: 'qweqwewqe',
        'experience-from-year': '', 
        'experience-to-year': '', 
        'company-info':
          'Conducted comprehensive job analyses to update job descriptions and salary benchmarks, resulting in improved job satisfaction and equity',
      },
    ],

    hobbyData: [
      {
        label: 'asdasdsad',
      },
    ],
    socialData: [
      {
        'social-name': 'asdasd',
        'social-link': 'asdasdasd',
      },
    ],
  },
};

export default methodsObj;