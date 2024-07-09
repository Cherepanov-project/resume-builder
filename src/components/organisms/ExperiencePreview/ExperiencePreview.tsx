import { ExperiencePDF } from "@/pages/CvTemplatePDF/components/molecules";
import { ExperienceDataType } from "@/assets/const";
import { useFormContext } from "react-hook-form";
import { templatePDFStyles } from '@/pages/CvTemplatePDF/const';
import { StyleOptionType } from '@/pages/CvTemplatePDF/const';

const ExperiencePreview = () => {

  const styleName = 'toronto';
  const style: StyleOptionType = templatePDFStyles[styleName].style;
  const { Subtitle, SubtitleSpecial, Experiences, Experience, ExperienceTitle, ExperienceTime, ExperiencePosition, Text} = style

  const { watch } = useFormContext();
  const experienceFormData = watch('experienceData')
  const experienceData: ExperienceDataType[] = []
  experienceFormData.forEach((experience) => {
    const newExperience: ExperienceDataType = {
      position: experience['work-title'],
      name: experience.company,
      fromYear: new Date(experience['experience-from-year']).getFullYear().toString(),
      toYear: new Date(experience['experience-to-year']).getFullYear().toString(),
      description: experience['company-info']
    }
    experienceData.push(newExperience)
  })

  const propsExperience = {
    data: experienceData,
    experienceName: 'Experience',
    style: {
      Subtitle: { ...Subtitle, ...SubtitleSpecial },
      Experiences,
      Experience,
      ExperienceTitle,
      ExperienceTime,
      ExperiencePosition,
      Text,
    },
  };

  return (
    <ExperiencePDF {...propsExperience} />
  )
}

export default ExperiencePreview