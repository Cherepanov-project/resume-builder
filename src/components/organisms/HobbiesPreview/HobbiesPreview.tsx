import { HobbiesPDF } from "@/pages/CvTemplatePDF/components/molecules"
import { HobbyDataType } from "@/assets/const";
import { useFormContext } from "react-hook-form";
import { templatePDFStyles } from '@/pages/CvTemplatePDF/const';
import { StyleOptionType } from '@/pages/CvTemplatePDF/const';

const HobbiesPreview = () => {

  const styleName = 'toronto';
  const style: StyleOptionType = templatePDFStyles[styleName].style;
  const { Subtitle, SubtitleSpecial, Hobbies, Hobbie, HobbieBullets, Text} = style

  const { watch } = useFormContext();
  const hobbyFormData = watch('hobbyData')
  const hobbyData: HobbyDataType[] = []
  hobbyFormData.forEach((hobbyForm) => {
    const newHobby: HobbyDataType = {
      hobby: hobbyForm.label
    }
    hobbyData.push(newHobby)
  })

  const propsHobbies = {
    data: hobbyData,
    style: {
      Hobbies,
      Hobbie,
      HobbieBullets,
      Subtitle: { ...Subtitle, ...SubtitleSpecial },
      Text,
    },
  };

  return (
    <HobbiesPDF {...propsHobbies} />
  )
}

export default HobbiesPreview