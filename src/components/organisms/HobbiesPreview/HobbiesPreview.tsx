import { HobbiesPDF } from "@/pages/CvTemplatePDF/components/molecules"
import { HobbyDataType } from "@/assets/const";
import { useWatch } from "react-hook-form";
import { templatePDFStyles } from '@/pages/CvTemplatePDF/const';
import { StyleOptionType } from '@/pages/CvTemplatePDF/const';

const HobbiesPreview = ({styleName}) => {

  const style: StyleOptionType = templatePDFStyles[styleName].style;
  const { Subtitle, SubtitleSpecial, Hobbies, Hobbie, HobbieBullets, Text} = style

  const hobbyFormData = useWatch({name: 'hobbyData'})
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