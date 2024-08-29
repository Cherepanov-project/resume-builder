import * as React from 'react';
import { Stack, ThemeProvider } from '@mui/material';
import Divider from '@mui/material/Divider';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import CustomizedMenus from '@components/molecules/CustomizedMenus';
import theme from '@components/molecules/LetterBuilderHeader/LetterBuilderTheme';

const LetterBuilderHeader = () => {
  const [visibleStructure, setVisibleStructure] = React.useState<boolean>(true);
  
  const visibleIcon = visibleStructure ? <VisibilityIcon /> : <VisibilityOffIcon />
  const buttonVisibleText = visibleStructure ? 'Отобразить структуру' : 'Скрыть структуру'
  const onClickHandler = () => {
      setVisibleStructure((visibleStructure) => !visibleStructure)
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Stack height={50} width={'100%'} direction={'row'} justifyContent={'space-between'} sx={{
        backgroundColor: '#505659',
        fontSize: '12px',
      }}>
        <Stack 
          direction={'row'} 
          height={'100%'}
          divider={
            <Divider 
              orientation="vertical" 
              sx={{
                  backgroundColor: 'gray',
                  height: '30px',
                  alignSelf: 'center',
              }} 
            />
          }>
          <CustomizedMenus />
          <Button 
            startIcon={visibleIcon} 
            variant="visible" 
            onClick={onClickHandler}
          >
            {buttonVisibleText}
          </Button>
        </Stack>
        <Stack alignItems={'center'} direction={'row'} spacing={3} mr={2}>
          <Button variant="buttonSave">
            Сохранить
          </Button>
          <Button  
            variant="buttonSave" 
            sx={{
              backgroundColor: '#1db7ad',
              '&:hover': {
                backgroundColor: '#1db7ad',
              },
            }}
          >
            Продолжить
          </Button>
        </Stack>
      </Stack>
    </ThemeProvider>
  )
}

export default LetterBuilderHeader