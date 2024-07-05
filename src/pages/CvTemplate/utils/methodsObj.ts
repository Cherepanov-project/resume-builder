import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '@pages/CvTemplate/utils/index.ts';

interface EducationData {
  study: string;
  degree: string;
  school: string;
  educationFromYear: number | undefined;
  'education-to-year': number | undefined;
}

interface ExperienceData {
  'work-title': string;
  company: string;
  'experience-from-year': number | undefined;
  'experience-to-year': number | undefined;
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
  resolver: Resolver<any>;
  defaultValues: DefaultValues;
}

const methodsObj: IMethodsObj = {
  mode: 'onSubmit',
  resolver: yupResolver(validationSchema), // Приведение к типу Resolver<any>
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
        educationFromYear: undefined,
        'education-to-year': undefined,
      },
    ],

    experienceData: [
      {
        'work-title': 'qweqwe',
        company: 'qweqwewqe',
        'experience-from-year': undefined,
        'experience-to-year': undefined,
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
