import { Box } from '@mui/material';
import { TitlePDF, SubtitlePDF, ContactPDF } from '@/pages/CvTemplatePDF/components/atoms';
import { AboutPDF } from '@/pages/CvTemplatePDF/components/molecules';
import { templatePDFStyles } from '@/pages/CvTemplatePDF/const';
import { uniqueKey } from '@/assets/lib';
import { StyleOptionType } from '@/pages/CvTemplatePDF/const';
import { useFormContext } from 'react-hook-form';

const PersonalInfoPreview = () => {

  const { watch } = useFormContext();

  const styleName = 'toronto';
  const style: StyleOptionType = templatePDFStyles[styleName].style;
  const { Title, Text, SubtitleWrapper = {background: "#eeeeee", borderRadius: "20px", padding: "2%"}, Subtitle, ContactWrapper, Contact, ContactLink, ContactIcon } = style

  const fullNameTitiles = watch('fullName').split(' ');
  const propsSubtitle = {
    str: watch('position'),
    style: { ...Text },
  };
  const propsAbout = {
    bio: watch('bio'),
    style: { Text, Subtitle: Subtitle, SubtitleWrapper },
  };
  const propsContact = { Contact, ContactLink, ContactIcon, Text };
  const { phone, email, website, address } = watch();

  return (
    <>
      <TitlePDF
        key={uniqueKey()}
        {...{ fullName: fullNameTitiles[0] + ' ' + fullNameTitiles[1], style: Title }}
      />
      <Box display="flex">
        <Box display="flex" flexDirection="column" alignItems="flex-start" style={ContactWrapper} marginRight='30px'>
          <SubtitlePDF {...propsSubtitle} />
          <ContactPDF contactName="phone" contactData={phone} style={propsContact} />
          <ContactPDF contactName="email" contactData={email} style={propsContact} />
          <ContactPDF contactName="website" contactData={website} style={propsContact} />
          <ContactPDF contactName="address" contactData={address} style={propsContact} />
        </Box>
        <AboutPDF {...propsAbout} />
      </Box>
    </>
  )
}

export default PersonalInfoPreview