import LetterConstructorPageSection from '@/components/molecules/LetterConstructorPageSection/LetterConstructorPageSection'
import LetterConstructorPageGroup from '@/components/molecules/LetterConstructorPageSection/LetterConstructorPageGroup'
import LetterConstructorHeadSection from '@/components/molecules/LetterConstructorPageSection/LetterConstructorHeadSection'
import LetterConstructorFooterSection from '@/components/molecules/LetterConstructorPageSection/LetterConstructorFooterSection'

import LetterConstructorScrollToTop from '@/components/atoms/LetterConstructorScrollToTop/LetterConstructorScrollToTop'
import { Box } from '@mui/material'

import LetterConstructorPageContent from '@/utils/LetterConstructorPageContent'

const LetterConstructorPage = () => {
  const content = LetterConstructorPageContent.map((item, index) => {
    let result: JSX.Element | null = null
    if (index === 0) {
      result = (
        <LetterConstructorHeadSection
          title={item.title}
          image={item.image} 
          content={item.content} 
          imageAlt={item.imageAlt}
          buttonText={item.buttonText}
          href={item.href}
          key={item.id}
      />
      )
    }

    if (index === LetterConstructorPageContent.length - 1) {
      result = (
        <LetterConstructorFooterSection
          title={item.title}
          content={item.content}
          buttonText={item.buttonText}
          href={item.href}
          image={item.image}
          imageAlt={item.imageAlt}
          key={item.id}
        />
      )
    }

    if (item.isGroup === true) {
      result = (
        <LetterConstructorPageGroup
          title={item.title}
          arrayCards={item.arrayCards}
          isBorder={item.isBorder}
          isBigPicture={item.isBigPicture}
          key={item.id}
      />
      )
    }

    if (item.isGroup === false && index !== 0 && index !== LetterConstructorPageContent.length - 1) {
      result = (
        <LetterConstructorPageSection
          title={item.title}
          subTitle={item.subTitle}
          content={item.content}
          buttonText={item.buttonText}
          href={item.href}
          image={item.image}
          imageAlt={item.imageAlt}
          key={item.id}
      />
      )
    }

    return result
  })
  
  return (
    <Box sx={{padding: '0', overflow: 'hidden', width: '100%'}}>
      {content}
      <LetterConstructorScrollToTop />
    </Box>
  )
}

export default LetterConstructorPage