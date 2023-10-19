type PersonalDateKeys = 'fullName' | 'adress' | 'bio' | 'position' | 'phone' | 'website' | 'mail';
type EductionDataTypeKeys = 'name' | 'position' | 'fromYear' | 'toYear' | 'description';
type ExperienceDataTypeKyes = 'name' | 'position' | 'fromYear' | 'toYear' | 'description';
type SocialDataTypeKeys = 'name' | 'link';

export type PersonalDateType = {
  [K in PersonalDateKeys]: string;
};

export type EductionDataType = {
  [K in EductionDataTypeKeys]: string;
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
  personalData: PersonalDateType;
  eductionData: EductionDataType[];
  experienceData: ExperienceDataType[];
  socialData: SocialDataType[];
  hobbyData: HobbyDataType[];
}

export const temporaryCvDataSlice: ITemporaryCvDataSliceProps = {
  personalData: {
    fullName: 'Luke Skywalker',
    adress: 'Tatooine',
    bio: 'A long, long time ago',
    position: 'Jedi Master',
    phone: '0-000-000-00-00',
    website: 'theforce.com',
    mail: 'luke@theforce.com',
  },
  eductionData: [
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
