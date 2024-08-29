import LetterBuilderLeftSide from '@/components/organisms/LetterBuilderLeftSide';
import LetterConstructorWorkspace from '@/components/organisms/LetterConstructorWorkspace/LetterConstructorWorkspace';
import LetterBuilderHeader from '@/components/molecules/LetterBuilderHeader';

import { Stack } from '@mui/material';

const LetterBuilderPage = () => {
  return (
    <>
      <LetterBuilderHeader />
      <Stack height={'100%'} direction={'row'}>
        <LetterBuilderLeftSide />
        <LetterConstructorWorkspace />
      </Stack>
    </>
  )
}

export default LetterBuilderPage