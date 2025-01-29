/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import "../FullWidthTabs/ScrollBar.scss";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

const TabPanel = ({ children, value, index, ...other }: TabPanelProps) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`full-width-tabpanel-${index}`}
    aria-labelledby={`full-width-tab-${index}`}
    {...other}
  >
    {value === index && (
      <div className="box-border pt-2.5 pb-2.5 bg-[#f9f9f9] h-[calc(100vh-97px)]">
        <div className="relative h-full overflow-y-auto">
          <div className="box-border px-5 bg-[#f9f9f9] h-full">
            <div className="pt-2.5 pb-3.5 flex justify-evenly flex-wrap gap-4">{children}</div>
          </div>
        </div>
      </div>
    )}
  </div>
);

type Tab = { id: number; label: string; icon: React.FunctionComponent<any> };

interface FullWidthTabsProps {
  TabList: Array<Tab>;
  ElementCard: Array<JSX.Element>;
  LineCard: Array<JSX.Element>;
}

const FullWidthTabs = ({ TabList, ElementCard, LineCard }: FullWidthTabsProps) => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChangeIndex = (index: number) => setValue(index);

  return (
    <div className="bg-white w-[411px]">
      <div className="bg-[#d6d9dc] flex justify-between shadow-none min-h-[45px]">
        {TabList.map((tab, idx) => {
          const TabIconElement = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setValue(idx)}
              className={`flex items-center text-xs px-1 py-3 min-h-[45px] rounded-none ${
                value === tab.id
                  ? "bg-[#f9f9f9] text-[#516167] border-r-0"
                  : "bg-[#d6d9dc] text-[#93989a] border-r-0"
              } ${idx === TabList.length - 1 ? "" : ""} focus:outline-none`}
            >
              <TabIconElement width={20} height={20} colorActive="#516167" colorPassive="#93989a" />
              <span className='ml-1'>{tab.label}</span>
            </button>
          );
        })}
      </div>
      <SwipeableViews axis="x" index={value} onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0} dir={theme.direction}>
          {ElementCard}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {LineCard}
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Настройки
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};

export default FullWidthTabs;
