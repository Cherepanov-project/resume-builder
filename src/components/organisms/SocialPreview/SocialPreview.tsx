import { SocialPDF } from "@/pages/CvTemplatePDF/components/molecules"
import { SocialDataType } from "@/assets/const";
import { useWatch } from "react-hook-form";
import { templatePDFStyles } from '@/pages/CvTemplatePDF/const';
import { StyleOptionType } from '@/pages/CvTemplatePDF/const';

const SocialPreview = ({ styleName }: { styleName: string }) => {

  const style: StyleOptionType = templatePDFStyles[styleName as keyof typeof templatePDFStyles].style;
  const { Subtitle, SubtitleSpecial, Socials, Social, SocialPreview, SocialTitle, SocialText, Text} = style

  const socialFormData = useWatch({name: 'socialData'})
  const socialData: SocialDataType[] = []
  socialFormData.forEach((social: { 'social-name': string; 'social-link': string }) => {
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
      Social: SocialPreview ?? Social,
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