import { SocialPDF } from "@/pages/CvTemplatePDF/components/molecules"
import { SocialDataType } from "@/assets/const";
import { useWatch } from "react-hook-form";
import { templatePDFStyles } from '@/pages/CvTemplatePDF/const';
import { StyleOptionType } from '@/pages/CvTemplatePDF/const';

const SocialPreview = ({styleName}) => {

  const style: StyleOptionType = templatePDFStyles[styleName].style;
  const { Subtitle, SubtitleSpecial, Socials, Social, SocialTitle, SocialText, Text} = style

  const socialFormData = useWatch({name: 'socialData'})
  const socialData: SocialDataType[] = []
  socialFormData.forEach((social) => {
    const newSocial: SocialDataType = {
      name: social['social-name'],
      link: social['social-link']
    }
    socialData.push(newSocial)
  })

  const propsSocial = {
    data: socialData,
    style: {
      Socials,
      Social,
      SocialTitle,
      SocialText,
      Subtitle: { ...Subtitle, ...SubtitleSpecial },
      Text,
    },
  };

  return (
    <SocialPDF {...propsSocial} />
  )
}

export default SocialPreview