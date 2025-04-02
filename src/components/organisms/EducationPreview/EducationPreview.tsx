import { EducationPDF } from "@/pages/CvTemplatePDF/components/molecules/EducationPDF"
import { EducationDataType } from "@/assets/const";
import { useWatch } from "react-hook-form";
import { templatePDFStyles } from '@/pages/CvTemplatePDF/const';
import { StyleOptionType } from '@/pages/CvTemplatePDF/const';

const EducationPreview = ({styleName}: {styleName: string}) => {

  const style: StyleOptionType = templatePDFStyles[styleName as keyof typeof templatePDFStyles].style;
  const { Subtitle, SubtitleSpecial, Education, Educations, EducationTitle, EducationTime, EducationPosition, Text} = style

  const educationFormData = useWatch({name: 'educationData'})
  const educationData: EducationDataType[] = []
  educationFormData.forEach((education: { study: string; degree: string; school: string; educationFromYear: string; 'education-to-year': string }) => {
    const newEducation: EducationDataType = {
      description: education.study,
      position: education.degree,
      name: education.school,
      fromYear: new Date(education.educationFromYear).getFullYear().toString(),
      toYear: new Date(education['education-to-year']).getFullYear().toString(),
    }
    educationData.push(newEducation)
  })

  const propsEducation = {
    data: educationData,
    experienceName: 'Education',
    style: {
      Subtitle: { ...Subtitle, ...SubtitleSpecial },
      Educations,
      Education,
      EducationTitle,
      EducationTime,
      EducationPosition,
      Text,
    },
  };

  return (
    <EducationPDF {...propsEducation} />
  )
}

export default EducationPreview