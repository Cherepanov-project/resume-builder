const transformedData = (data) => ({
  personalData: {
    fullName: data.fullName,
    address: data.address,
    bio: data.bio,
    position: data.position,
    phone: data.phone,
    website: data.website,
    email: data.email,
  },

  educationData: data.educationData.map((education) => ({
    description: education.study,
    position: education.degree,
    fromYear: new Date(education.educationFromYear).getFullYear(),
    toYear: new Date(education['education-to-year']).getFullYear(),
    name: education.school,
  })),

  experienceData: data.experienceData.map((experience) => ({
    position: experience['work-title'],
    fromYear: new Date(experience['experience-from-year']).getFullYear(),
    toYear: new Date(experience['experience-to-year']).getFullYear(),
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
