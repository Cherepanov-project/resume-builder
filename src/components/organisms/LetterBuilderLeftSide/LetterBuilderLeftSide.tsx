import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, background: '#f9f9f9', minHeight: '100%' }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: '411px', border: '1px solid #c7c7c7' }}>
      <AppBar 
        position="static"
        sx={{
          boxShadow: 'none',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          sx={{
            color: '#93989a',
            background: '#d6d9dc',
            minHeight: '45px',
          }}
          TabIndicatorProps={{
            sx: {backgroundColor: 'transparent'},
          }}
        >
          <Tab 
            label="Содержимое" {...a11yProps(0)}
            disableFocusRipple
            disableRipple
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><path fill={value === 0 ? '#516167' : '#93989a'} d="M9.566 9.22H.86V.516h8.705V9.22ZM2.803 7.291h4.834V2.457H2.803v4.834Zm8.691 1.929V.516H20.2V9.22h-8.705Zm1.942-1.929h4.834V2.457h-4.834v4.834Zm-3.87 12.562H.86v-8.704h8.705v8.704Zm-6.763-1.929h4.834V13.09H2.803v4.834Zm17.396 1.929h-8.705v-8.704H20.2v8.704Zm-6.763-1.929h4.834V13.09h-4.834v4.834Z"></path></svg>}
            iconPosition="start"
            sx={{
              minWidth: 'max-content',
              minHeight: '45px',
              fontSize: '13px',
              padding: '12px 5px',
              background: value === 0 ? '#f9f9f9' : '#d6d9dc',
              color: value === 0 ? '#516167' : '#93989a',
              borderRight: '1px solid #c7c7c7',
              borderBottom: value === 0 ? '1px solid #f9f9f9' : '1px solid #c7c7c7',
              transition: 'borderBottom 0s',
              '&:focus': {
                outline: 'none',
              },
              '&:hover': {
                border: 'none',
                borderRight: '1px solid #c7c7c7',
                borderBottom: value === 0 ? '1px solid #f9f9f9' : '1px solid #c7c7c7',
              }
            }} 
          />
          <Tab 
            label="Строки" {...a11yProps(1)}
            disableFocusRipple
            disableRipple
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill={value === 1 ? '#516167' : '#93989a'} d="M.154 9.181V.516h19.338V9.18H.154ZM1.93 7.253h15.814V2.444H1.929v4.809ZM4.5 4.14h11.057v1.415H4.5V4.14ZM.193 19.88v-8.666H19.53v8.666H.193Zm1.774-1.968h15.827v-4.847H1.967v4.847ZM4.36 14.84h11.057v1.414H4.359v-1.414Z"></path></svg>}
            iconPosition="start"
            sx={{
              minWidth: 'max-content',
              minHeight: '45px',
              fontSize: '13px',
              background: value === 1 ? '#f9f9f9' : '#d6d9dc',
              color: value === 1 ? '#516167' : '#93989a',
              borderRight: '1px solid #c7c7c7',
              borderBottom: value === 1 ? '1px solid #f9f9f9' : '1px solid #c7c7c7',
              transition: 'borderBottom 0s',
              '&:focus': {
                outline: 'none',
              },
              '&:hover': {
                border: 'none',
                borderRight: '1px solid #c7c7c7',
                borderBottom: value === 1 ? '1px solid #f9f9f9' : '1px solid #c7c7c7',
              }
            }} 
          />
          <Tab 
            label="Настройки" {...a11yProps(2)} 
            disableFocusRipple
            disableRipple
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill={value === 2 ? '#516167' : '#93989a'} d="M14.662 9.117H4.994v-.964h9.668v.964Zm0 1.942H4.994v.964h9.668v-.964Zm0 2.802H4.994v.965h9.668v-.965ZM19.394.516v19.337H.249V.516h19.145Zm-1.839 5.798H2.088v11.61h15.377V6.314h.09Zm0-3.96H2.088V5.35h15.377V2.354h.09Z"></path></svg>}
            iconPosition="start"
            sx={{
              minWidth: 'max-content',
              minHeight: '45px',
              fontSize: '13px',
              background: value === 2 ? '#f9f9f9' : '#d6d9dc',
              color: value === 2 ? '#516167' : '#93989a',
              borderBottom: value === 2 ? '1px solid #f9f9f9' : '1px solid #c7c7c7',
              transition: 'borderBottom 0s',
              '&:focus': {
                outline: 'none',
              },
              '&:hover': {
                border: 'none',
                borderBottom: value === 2 ? '1px solid #f9f9f9' : '1px solid #c7c7c7',
              }
            }}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis="x"
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
            Содержимое
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
            Строки
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
            Настройки
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
const LetterBuilderLeftSide = () => {
  return (
    <Box sx={{ width: '500px', height: '100%' }}>
      <FullWidthTabs />
    </Box>
  )
}

export default LetterBuilderLeftSide