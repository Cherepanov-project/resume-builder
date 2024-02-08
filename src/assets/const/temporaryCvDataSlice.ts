import photo from '../images/lukeSky.jpg';

export type PersonalDataType = {
  fullName: string;
  address: string;
  bio: string;
  position: string;
  phone: string;
  website: string;
  email: string;
};

export type EducationDataType = {
  description: string;
  position: string;
  fromYear: string;
  toYear: string;
  name: string;
};

export type ExperienceDataType = {
  position: string;
  fromYear: string;
  toYear: string;
  name: string;
  description: string;
};

export type SocialDataType = {
  link: string;
  name: string;
};

export type HobbyDataType = {
  hobby: string;
};

export type AvatarDataType = {
  avatar: string;
};

export interface ITemporaryCvDataSliceProps {
  personalData: PersonalDataType;
  educationData: EducationDataType[];
  experienceData: ExperienceDataType[];
  socialData: SocialDataType[];
  hobbyData: HobbyDataType[];
  photoData: AvatarDataType;
}

export const temporaryCvDataSlice: ITemporaryCvDataSliceProps = {
  personalData: {
    fullName: 'Artem Chuprak',
    address: 'Saint-Petersburg',
    bio: "Hello, it's nice to meet you And can you tell me where I am? I don't know how I got here But I think I'm starting to understand",
    position: 'Jedi Master',
    phone: '1234567',
    website: 'theforce.com',
    email: 'luke@theforce.com',
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
  photoData: { avatar: photo },
};
