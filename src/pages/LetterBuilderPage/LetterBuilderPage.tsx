import LetterBuilderLeftSide from '@/components/organisms/LetterBuilderLeftSide';
import LetterConstructorWorkspace from '@/components/organisms/LetterConstructorWorkspace/LetterConstructorWorkspace';
import LetterBuilderHeader from '@/components/molecules/LetterBuilderHeader';

import { Box, Stack } from '@mui/material';

const LetterBuilderPage = () => {
  return (
    <Box sx={{ width: '100%', height: '100%', overFlow: 'hidden', scrollbarWidth: 'none', }}>
      <LetterBuilderHeader />
      <Stack height={'100%'} direction={'row'}>
        <LetterBuilderLeftSide />
        <LetterConstructorWorkspace />
      </Stack>
    </Box>
  )
}

export default LetterBuilderPage