import { SocialPDF } from "@/pages/CvTemplatePDF/components/molecules"
import { SocialDataType } from "@/assets/const";
import { useFormContext } from "react-hook-form";
import { templatePDFStyles } from '@/pages/CvTemplatePDF/const';
import { StyleOptionType } from '@/pages/CvTemplatePDF/const';

const SocialPreview = () => {

  const styleName = 'toronto';
  const style: StyleOptionType = templatePDFStyles[styleName].style;
  const { Subtitle, SubtitleSpecial, Socials, Social, SocialTitle, Text} = style

  const { watch } = useFormContext();
  const socialFormData = watch('socialData')
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
      Subtitle: { ...Subtitle, ...SubtitleSpecial },
      Text,
    },
  };

  return (
    <SocialPDF {...propsSocial} />
  )
}

export default SocialPreview