import { EducationPDF } from "@/pages/CvTemplatePDF/components/molecules/EducationPDF"
import { EducationDataType } from "@/assets/const";
import { useWatch } from "react-hook-form";
import { templatePDFStyles } from '@/pages/CvTemplatePDF/const';
import { StyleOptionType } from '@/pages/CvTemplatePDF/const';

const EducationPreview = ({styleName}) => {

  const style: StyleOptionType = templatePDFStyles[styleName].style;
  const { Subtitle, SubtitleSpecial, Education, Educations, EducationTitle, EducationTime, EducationPosition, Text} = style

  const educationFormData = useWatch({name: 'educationData'})
  const educationData: EducationDataType[] = []
  educationFormData.forEach((education) => {
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