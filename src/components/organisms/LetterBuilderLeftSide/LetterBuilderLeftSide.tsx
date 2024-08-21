import Box from '@mui/material/Box';
import LetterCard from '@/components/atoms/LetterCard';
import FullWidthTabs from '@/components/molecules/FullWidthTabs';
import TabList from '@/utils/LetterTabList';
import LetterCardList from '@/utils/LetterCardList';

const LetterBuilderLeftSide = () => {
  const LetterCardElementArray = LetterCardList.map((item) => {
    return (
      <LetterCard 
        key={item.id}
        text={item.text} 
        icon={item.icon}
      />
    )
  })
  
  return (
    <Box sx={{ width: '500px', height: '100%' }}>
      <FullWidthTabs 
        TabList={TabList}
        ViewChild={LetterCardElementArray}
      />
    </Box>
  )
}

export default LetterBuilderLeftSide