// Определяем интерфейс для входных данных, соответствующий IFormInputs
interface FormData {
  fullName: string;
  position: string;
  address: string;
  phone: string;
  website: string | null;
  email: string;
  bio: string;
  avatar: string;
  socialData?: Array<{
    'social-name': string;
    'social-link': string;
  }>;
  hobbyData?: Array<{
    label: string;
  }>;
  educationData: Array<{
    study: string;
    degree: string;
    school: string;
    educationFromYear: string | Date | undefined;
    'education-to-year': string | Date | undefined;
  }>;
  experienceData: Array<{
    company: string;
    'work-title': string;
    'company-info': string;
    'experience-from-year': string | Date | undefined;
    'experience-to-year': string | Date | undefined;
  }>;
}

// Определяем интерфейс для выходных данных
interface TransformedData {
  personalData: {
    fullName: string;
    address: string;
    bio: string;
    position: string;
    phone: string;
    website: string | null;
    email: string;
  };
  photoData: {
    avatar: string;
  };
  educationData: Array<{
    description: string;
    position: string;
    fromYear: number | undefined;
    toYear: number | undefined;
    name: string;
  }>;
  experienceData: Array<{
    position: string;
    fromYear: number | undefined;
    toYear: number | undefined;
    name: string;
    description: string;
  }>;
  socialData?: Array<{
    link: string;
    name: string;
  }>;
  hobbyData?: Array<{
    hobby: string;
  }>;
}

// Безопасное преобразование даты в год
const safeGetYear = (dateValue: string | Date | undefined): number | undefined => {
  if (!dateValue) return undefined;
  
  try {
    return dateValue instanceof Date 
      ? dateValue.getFullYear() 
      : new Date(dateValue).getFullYear();
  } catch (error) {
    console.error("Ошибка преобразования даты:", error);
    return undefined;
  }
};

const transformedData = (data: FormData): TransformedData => ({
  personalData: {
    fullName: data.fullName,
    address: data.address,
    bio: data.bio,
    position: data.position,
    phone: data.phone,
    website: data.website,
    email: data.email,
  },
  
  photoData: {
    avatar: data.avatar,
  },

  educationData: data.educationData.map((education) => ({
    description: education.study,
    position: education.degree,
    fromYear: safeGetYear(education.educationFromYear),
    toYear: safeGetYear(education['education-to-year']),
    name: education.school,
  })),

  experienceData: data.experienceData.map((experience) => ({
    position: experience['work-title'],
    fromYear: safeGetYear(experience['experience-from-year']),
    toYear: safeGetYear(experience['experience-to-year']),
    name: experience.company,
    description: experience['company-info'],
  })),

  socialData: data.socialData?.map((social) => ({
    link: social['social-link'],
    name: social['social-name'],
  })),

  hobbyData: data.hobbyData?.map((hobby) => ({
    hobby: hobby.label,
  })),
});

export default transformedData;