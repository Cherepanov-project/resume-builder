import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TabIconProps } from '@/components/atoms/Icons/TabIcons';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}
  
const TabPanel = (props: TabPanelProps) => {
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
        <Box sx={{ padding: '15px', background: '#f9f9f9', minHeight: '100%'}}>
          <Typography sx={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', gap: '15px'}}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const a11yProps = (index: number) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

type Tab = { id: number, label: string, icon: React.FunctionComponent<TabIconProps> }

interface FullWidthTabsProps {
  TabList: Array<Tab>
  ViewChild: Array<JSX.Element>
}

const FullWidthTabs = ({ TabList, ViewChild }: FullWidthTabsProps) => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const TabElementArray = TabList.map((tab) => {
    const TabIconElement = tab.icon

    return (
      <Tab 
        key={tab.id}
        label={tab.label} 
        {...a11yProps(0)}
        disableFocusRipple
        disableRipple
        icon={<TabIconElement width={20} height={20} value={value} id={tab.id} colorActive={'#516167'} colorPassive={'#93989a'}/>}
        iconPosition="start"
        sx={{
          minWidth: 'max-content',
          minHeight: '45px',
          fontSize: '13px',
          padding: '12px 5px',
          background: value === tab.id ? '#f9f9f9' : '#d6d9dc',
          color: value === tab.id ? '#516167' : '#93989a',
          borderRight: tab.id !== TabList.length - 1 ? '1px solid #c7c7c7' : 'none',
          borderBottom: value === tab.id ? '1px solid #f9f9f9' : '1px solid #c7c7c7',
          transition: 'borderBottom 0s',
          justifyContent: 'space-evenly',
          '&:focus': {
            outline: 'none',
          },
          '&:hover': {
            border: 'none',
            borderRight: tab.id !== TabList.length - 1 ? '1px solid #c7c7c7' : 'none',
            borderBottom: value === tab.id ? '1px solid #f9f9f9' : '1px solid #c7c7c7',
          }
        }} 
      />
    )
  }
)

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
          {TabElementArray}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis="x"
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
            {ViewChild}
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

export default FullWidthTabs