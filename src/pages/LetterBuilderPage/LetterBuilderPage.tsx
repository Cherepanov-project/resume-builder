import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Divider from '@mui/material/Divider';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LetterConstructorWorkspace from '../../components/organisms/LetterConstructorWorkspace/LetterConstructorWorkspace';

import classes from './LetterBuilderPage.module.scss';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.grey[1000],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 12,
        color: theme.palette.text.primary,
        marginRight: 0,
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.dark,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [arrowDirection, setArrowDirection] = React.useState<boolean>(false);
  const open = Boolean(anchorEl);

  const arrow = arrowDirection ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    if (arrowDirection) {
        setArrowDirection(false)
    } else {
        setArrowDirection(true)
    }
  };
  const handleClose = () => {
    setArrowDirection(false)
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="text"
        disableElevation
        onClick={handleClick}
        endIcon={arrow}
        disableRipple
        sx={{
            borderRadius: '0', 
            color: 'white',
            fontSize: '12px',
            backgroundColor: '#505659',
            height: '100%',
            '&:hover': {
                color: 'white',
                fontSize: '12px',
                backgroundColor: '#505659',
            },
            '&:active': {
                backgroundColor: '#33373a',
            }
        }}
      >
        Действия
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          Предпросмотр
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Отправить текст
        </MenuItem>
      </StyledMenu>
    </div>
  );
}

const LetterBuilderPage = () => {
    const [visibleStructure, setVisibleStructure] = React.useState<boolean>(true);
    const visibleIcon = visibleStructure ? <VisibilityIcon /> : <VisibilityOffIcon />
    const buttonVisibleText = visibleStructure ? 'Отобразить структуру' : 'Скрыть структуру'

    const onClickHandler = () => {
        setVisibleStructure((visibleStructure) => !visibleStructure)
    }

    return (
      <>
        <div className={classes['header']}>
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
                    sx={{ 
                        color: 'white',
                        fontSize: '12px',
                        padding: '15px', 
                    }}
                    onClick={onClickHandler}
                >
                    {buttonVisibleText}
                </Button>
            </div>
            <div className={classes['header__sub-menu--right']}>
                <Button 
                    variant="text" 
                    disableRipple
                    sx={{ 
                        color: 'white',
                        backgroundColor: '#1db7ad',
                        fontSize: '12px', 
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
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
                    }}
                >
                    Сохранить
                </Button>
                <Button  
                    variant="text" 
                    disableRipple
                    sx={{ 
                        color: 'white',
                        fontSize: '12px',
                        backgroundColor: '#4cb9ea', 
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
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
                    }}
                >
                    Продолжить
                </Button>
            </div>
        </div>
        <LetterConstructorWorkspace />
      </>
    )
}

export default LetterBuilderPage