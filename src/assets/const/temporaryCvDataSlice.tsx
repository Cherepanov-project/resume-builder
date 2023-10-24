type PersonalDateKeys = 'fullName' | 'adress' | 'bio' | 'position' | 'phone' | 'website' | 'mail';
type EducationDataTypeKeys = 'name' | 'position' | 'fromYear' | 'toYear' | 'description';
type ExperienceDataTypeKyes = 'name' | 'position' | 'fromYear' | 'toYear' | 'description';
type SocialDataTypeKeys = 'name' | 'link';

export type PersonalDataType = {
  [K in PersonalDateKeys]: string;
};

export type EducationDataType = {
  [K in EducationDataTypeKeys]: string;
};

export type ExperienceDataType = {
  [K in ExperienceDataTypeKyes]: string;
};

export type SocialDataType = {
  [K in SocialDataTypeKeys]: string;
};

export type HobbyDataType = {
  hobby: string;
};

export interface ITemporaryCvDataSliceProps {
  personalData: PersonalDataType;
  educationData: EducationDataType[];
  experienceData: ExperienceDataType[];
  socialData: SocialDataType[];
  hobbyData: HobbyDataType[];
}

export const temporaryCvDataSlice: ITemporaryCvDataSliceProps = {
  personalData: {
    fullName: 'Luke Skywalker',
    adress: 'Tatooine',
    bio: "Hello, it's nice to meet you And can you tell me where I am? I don't know how I got here But I think I'm starting to understand",
    position: 'Jedi Master',
    phone: '0-000-000-00-00',
    website: 'theforce.com',
    mail: 'luke@theforce.com',
  },
  educationData: [
    {
      description: 'The light side of power',
      position: 'Padawan',
      fromYear: '2020',
      toYear: '2021',
      name: 'Yoda Jungles School',
    },
    {
      description: 'The dark side of power',
      position: 'Jedi',
      fromYear: '2021',
      toYear: '2022',
      name: 'Darth Vader School',
    },
  ],
  experienceData: [
    {
      position: 'Jedi',
      fromYear: '2022',
      toYear: '2023',
      name: 'Alliance',
      description: 'It was funny, I found the ship',
    },
    {
      position: 'Master Jedi',
      fromYear: '2023',
      toYear: '2025',
      name: 'Jedi Order',
      description: '',
    },
  ],
  socialData: [
    { link: 'stargram', name: 'LuSky' },
    { link: 'jedin', name: 'LukeSkywalker' },
  ],
  hobbyData: [{ hobby: 'Piloting starships' }, { hobby: 'Chatting with chewbacca' }],
};
