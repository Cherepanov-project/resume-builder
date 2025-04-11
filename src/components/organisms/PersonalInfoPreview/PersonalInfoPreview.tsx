import { useWatch } from 'react-hook-form';
import { Box } from '@mui/material';

import { HeaderPDF, HeaderShortPDF, SidebarPDF } from '@/pages/CvTemplatePDF/components/organisms';
import { TitlePDF, TextPDF } from '@/pages/CvTemplatePDF/components/atoms';
import { AboutPDF } from '@/pages/CvTemplatePDF/components/molecules';
import { templatePDFStyles } from '@/pages/CvTemplatePDF/const';
import { uniqueKey } from '@/assets/lib';
import { StyleOptionType } from '@/pages/CvTemplatePDF/const';
import { AvatarDataType, PersonalDataType, SocialDataType, HobbyDataType } from '@/assets/const';

const PersonalInfoPreview = ({styleName}: {styleName: string}) => {

  const style: StyleOptionType = templatePDFStyles[styleName as keyof typeof templatePDFStyles].style;
  const structure = templatePDFStyles[styleName as keyof typeof templatePDFStyles].structure
  const isWithHeader = structure.header.isPresented;
  const isWithSidebar = structure.sidebar.isPresented;
  const isShort = structure.isShort;
  const { Text, SubtitleWrapper = {background: "#eeeeee", borderRadius: "20px", padding: "2%"}, Subtitle, Title } = style

  const fullNameTitiles = useWatch({name: 'fullName'}).split(' ');
  const propsAbout = {
    bio: useWatch({name: 'bio'}),
    style: { Text, Subtitle: Subtitle, SubtitleWrapper },
  };

  const { phone, email, website, address, position, bio, fullName } = useWatch();

  const personalData: PersonalDataType  = { address, phone, email, website, position, bio, fullName }
  const photoData: AvatarDataType = { avatar: ''}
  const propsHeader = {
    data: { personalData, photoData},
    style: style
  }
  const propsShortHeader = { ...personalData, style: style}

  const socialFormData = useWatch({name: 'socialData'})
  const socialData: SocialDataType[] = []
  socialFormData.forEach((social: { 'social-name': string, 'social-link': string }) => {
    const newSocial: SocialDataType = {
      name: social['social-name'],
      link: social['social-link']
    }
    socialData.push(newSocial)
  })
  const hobbyFormData = useWatch({name: 'hobbyData'})
  const hobbyData: HobbyDataType[] = []
  hobbyFormData.forEach((hobbyForm: { label: string }) => {
    const newHobby: HobbyDataType = {
      hobby: hobbyForm.label
    }
    hobbyData.push(newHobby)
  })
  const propsSidebar = { data: { personalData, photoData, socialData, hobbyData }, style: {...style, Sidebar: {...style.Sidebar, padding: '0, 25, 25, 25'}} };

  const propsSubtitle = {
    str: useWatch({name: position}),
    style: { ...Text },
  };
  
  return (
    <>
      {isWithHeader && !isShort ? <HeaderPDF {...propsHeader} />
      : isShort && isWithHeader ? <HeaderShortPDF {...propsShortHeader}/>
      : isWithSidebar ? (
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ width: '40%' }}>
        {styleName === 'sydney' && (<TitlePDF
          key={uniqueKey()}
          {...{ fullName: fullNameTitiles[0] + ' ' + fullNameTitiles[1], style: Title }}
        />)}
        {styleName === 'sydney' && <AboutPDF {...propsAbout} />}
        </Box>
        <SidebarPDF {...propsSidebar}/>
      </Box>)
      : (
        <>
          <Box sx={{ display: 'flex', mb: '10px' }}>
            <Box>
              <TitlePDF
                key={uniqueKey()}
                {...{ fullName: fullNameTitiles[0] + ' ' + fullNameTitiles[1], style: Title }}
              />
              <TextPDF {...propsSubtitle} />
            </Box>
          </Box>
          <AboutPDF {...propsAbout} />
        </>
      )
    }
    {styleName !== 'toronto' && styleName !== 'sydney' && styleName !== 'chrono' && styleName !== 'metro' && <AboutPDF {...propsAbout} />}
    </>
  )
}

export default PersonalInfoPreview