import * as React from 'react';

import Divider from '@mui/material/Divider';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import CustomizedMenus from '../CustomizedMenus/CustomizedMenus';

import classes from './LetterBuilderHeader.module.scss';

const LetterBuilderHeader = () => {
  const [visibleStructure, setVisibleStructure] = React.useState<boolean>(true);
  
  const visibleIcon = visibleStructure ? <VisibilityIcon /> : <VisibilityOffIcon />
  const buttonVisibleText = visibleStructure ? 'Отобразить структуру' : 'Скрыть структуру'
  const onClickHandler = () => {
      setVisibleStructure((visibleStructure) => !visibleStructure)
  }
  
  return (
    <header className={classes['header']}>
      <div className={classes['header__sub-menu']}>
          <CustomizedMenus />
          <Divider 
              orientation="vertical" 
              sx={{
                  backgroundColor: 'gray',
                  height: '30px',
                  alignSelf: 'center',
              }} 
          />
          <Button 
              startIcon={visibleIcon} 
              variant="text" 
              disableRipple
              disableElevation
              sx={{ 
                borderRadius: '0', 
                color: 'white',
                fontSize: '12px',
                backgroundColor: '#505659',
                height: '100%',
                textTransform: 'none',
                outline: 'none',
                padding: '0 15px',
                '&:hover': {
                    color: 'white',
                    fontSize: '12px',
                    backgroundColor: '#505659',
                    outline: 'none',
                },
                '&:active': {
                    outline: 'none',
                },
                '&:focus': {
                  outline: 'none',
                }, 
              }}
              onClick={onClickHandler}
          >
              {buttonVisibleText}
          </Button>
      </div>
      <div className={classes['header__sub-menu--right']}>
          <Button 
            className={classes['header__button'] + ' ' + classes['header__button--save']}
            variant="text" 
            disableRipple
            disableFocusRipple
            disableElevation
            sx={{
              color: 'white',
              textTransform: 'none',
              backgroundColor: '#4cb9ea',
              fontSize: '12px', 
              border: 'none',
              borderRadius: '4px',
              minWidth: '140px',
              fontWeight: '500',
              minHeight: '30px',
              height: '30px',
              lineHeight: '29px',
              padding: '0 8px',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              userSelect: 'none',
              transition: 'background .25s ease-in-out',

              '&:focus': {
                outline: 'none',
              },

              '&:hover': {
                scale: '1.05',
                backgroundColor: '#4cb9ea',
              },
            }}
          >
            Сохранить
          </Button>
          <Button  
            className={classes['header__button'] + ' ' + classes['header__button--continue']}
            variant="text" 
            disableRipple
            disableFocusRipple
            sx={{
              color: 'white',
              textTransform: 'none',
              backgroundColor: '#1db7ad',
              fontSize: '12px', 
              border: 'none',
              borderRadius: '4px',
              minWidth: '140px',
              fontWeight: '500',
              minHeight: '30px',
              height: '30px',
              lineHeight: '29px',
              padding: '0 8px',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              userSelect: 'none',
              transition: 'background .25s ease-in-out',

              '&:focus': {
                outline: 'none',
              },

              '&:hover': {
                scale: '1.05',
                backgroundColor: '#1db7ad',
              },
            }}
          >
            Продолжить
          </Button>
      </div>
    </header>
  )
}

export default LetterBuilderHeader