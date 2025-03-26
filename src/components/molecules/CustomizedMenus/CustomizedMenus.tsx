import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

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
        backgroundColor: alpha(theme.palette.primary.dark, theme.palette.action.selectedOpacity),
      },
    },
  },
}));

const CustomizedMenus = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [arrowDirection, setArrowDirection] = React.useState<boolean>(false);
  const open = Boolean(anchorEl);

  const arrow = arrowDirection ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    if (arrowDirection) {
      setArrowDirection(false);
    } else {
      setArrowDirection(true);
    }
  };
  const handleClose = () => {
    setArrowDirection(false);
    setAnchorEl(null);
    console.log(setArrowDirection)
  };


  return (
    <>
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
          padding: '15px',
          borderRadius: '0',
          color: 'white',
          fontSize: '12px',
          backgroundColor: '#505659',
          height: '100%',
          textTransform: 'none',
          outline: 'none',
          '&:hover': {
            color: 'white',
            fontSize: '12px',
            backgroundColor: '#505659',
            outline: 'none',
          },
          '&:active': {
            backgroundColor: '#33373a',
            outline: 'none',
          },
          '&:focus': {
            backgroundColor: '#33373a',
            outline: 'none',
          },
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
    </>
  );
};

export default CustomizedMenus;
