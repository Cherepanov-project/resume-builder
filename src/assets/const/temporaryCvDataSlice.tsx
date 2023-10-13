type PersonalDateKeys = 'fullName' | 'address' | 'bio' | 'jobTitle' | 'phone' | 'website' | 'email';
type EductionDataTypeKeys = 'study' | 'degree' | 'educationFromYear' | 'educationToYear' | 'school';

export type PersonalDateType = {
  [K in PersonalDateKeys]: string;
};

export type EductionDataType = {
  [K in EductionDataTypeKeys]: string;
};

export type ExperienceDataType = {
  workTitle: string;
  experienceFromYear: string;
  experienceToYear: string;
  company: string;
  companyInfo: string[];
};

export type SocialDataType = {
  socialLink: string;
  socialName: string;
};

export type HobbyDataType = {
  hobby: string;
};

export interface ITemporaryCvDataSliceProps {
  personalData: PersonalDateType;
  eductionData: EductionDataType[];
  experienceData: ExperienceDataType[];
  socialData: SocialDataType[];
  hobbyData: HobbyDataType[];
}

export const temporaryCvDataSlice: ITemporaryCvDataSliceProps = {
  personalData: {
    fullName: 'Luke Skywalker',
    address: 'Tatooine',
    bio: 'A long, long time ago',
    jobTitle: 'Jedi Master',
    phone: '0-000-000-00-00',
    website: 'theforce.com',
    email: 'luke@theforce.com',
  },
  eductionData: [
    {
      study: 'The light side of power',
      degree: 'Padawan',
      educationFromYear: '2020',
      educationToYear: '2021',
      school: 'Yoda Jungles School',
    },
    {
      study: 'The dark side of power',
      degree: 'Jedi',
      educationFromYear: '2021',
      educationToYear: '2022',
      school: 'Darth Vader School',
    },
  ],
  experienceData: [
    {
      workTitle: 'Jedi',
      experienceFromYear: '2022',
      experienceToYear: '2023',
      company: 'Alliance',
      companyInfo: ['It was funny', 'I found the ship'],
    },
    {
      workTitle: 'Master Jedi',
      experienceFromYear: '2023',
      experienceToYear: '2025',
      company: 'Jedi Order',
      companyInfo: [],
    },
  ],
  socialData: [
    { socialLink: 'stargram', socialName: 'LuSky' },
    { socialLink: 'jedin', socialName: 'LukeSkywalker' },
  ],
  hobbyData: [{ hobby: 'Piloting starships' }, { hobby: 'Chatting with chewbacca' }],
};
