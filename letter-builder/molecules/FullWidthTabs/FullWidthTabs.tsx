/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import "../FullWidthTabs/ScrollBar.scss";

// Интерфейс для пропсов TabPanel
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// Компонент TabPanel
const TabPanel = ({ children, value, index }: TabPanelProps) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`full-width-tabpanel-${index}`}
    aria-labelledby={`full-width-tab-${index}`}
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

// Интерфейс для табов
type Tab = { id: number; label: string; icon: React.FunctionComponent<any> };

// Интерфейс для пропсов FullWidthTabs
interface FullWidthTabsProps {
  TabList: Array<Tab>;
  ElementCard: Array<JSX.Element>;
  LineCard: Array<JSX.Element>;
}

// Основной компонент FullWidthTabs
const FullWidthTabs = ({ TabList, ElementCard, LineCard }: FullWidthTabsProps) => {
  const [value, setValue] = React.useState(0);

  // Обработчик клика по табу
  const handleTabClick = (index: number) => {
    setValue(index);
  };

  return (
    <div className="bg-white w-[411px]">
      {/* Верхняя панель с табами */}
      <div className="bg-[#d6d9dc] flex justify-between shadow-none min-h-[45px]">
        {TabList.map((tab, idx) => {
          const TabIconElement = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(idx)}
              className={`tab-${tab.id} flex items-center text-xs px-1 py-3 min-h-[45px] rounded-none ${
                value === idx
                  ? "bg-[#f9f9f9] text-[#516167] border-r-0"
                  : "bg-[#d6d9dc] text-[#93989a] border-r-0"
              } focus:outline-none`}
            >
              <TabIconElement width={20} height={20} colorActive="#516167" colorPassive="#93989a" />
              <span className="ml-1">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Контент для каждой вкладки */}
      <TabPanel value={value} index={0}>
        {ElementCard}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {LineCard}
      </TabPanel>
      <TabPanel value={value} index={2}>
        Настройки
      </TabPanel>
    </div>
  );
};

export default FullWidthTabs;