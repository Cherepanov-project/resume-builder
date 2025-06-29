import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tab, Tabs } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExtensionIcon from "@mui/icons-material/Extension";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import Settings from "@mui/icons-material/Settings";

import { importFiles } from "@/utils";
import { T_SidebarMenuItem } from "@/types/landingBuilder";
import TabPanel from "@molecules/TabPanel";
import NestedList from "@molecules/NestedList";
import ManagerButton from "@atoms/ManagerButton";

import classes from "./SideBar.module.scss";

const SideBar: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [isActiveTab, setActiveTab] = useState(true);
  const [sidebarMenuList, setSidebarMenuList] = useState({});
  const sideMenuTabs = ["Sections", "Elements", "Templates", "Manage"];
  const tabsIcons = [<DashboardIcon />, <ExtensionIcon />, <ViewCarouselIcon />, <Settings />];

  useEffect(() => {
    importFiles().then((data) => {
      setSidebarMenuList({ ...sidebarMenuList, ...data });
    });
  }, [sidebarMenuList]);
  

  const handleChangeTab = (_event: React.SyntheticEvent, indxBtn: number) => {
    setCurrentTab(indxBtn);
  };

  const openPanel = () => {
    setActiveTab(true);
  };

  const closePanel = () => {
    setActiveTab(false);
  };



  const navigate = useNavigate();
  return (
    <>
      <Tabs
        className={classes["sidebar"]}
        value={currentTab}
        orientation="vertical"
        aria-label="sidebar"
        onChange={handleChangeTab}
      >
        {sideMenuTabs.map((item, indx) => {
          return (
            <Tab
              key={item}
              className={classes["tab"]}
              icon={tabsIcons[indx]}
              aria-label={item}
              onClick={openPanel}
            />
          );
        })}
      </Tabs>
      {Object.entries(sidebarMenuList).map(([key, items], indx) => {
        return (
          isActiveTab && (
            <TabPanel key={key} value={currentTab} index={indx} label={key} closePanel={closePanel}>
          
              {key === "Manage" && (
                <>
                  <ManagerButton
                    onClick={() => {
                      closePanel();
                      navigate("sections-creator");
                    }}
                    name="Section Creator"
                  />
                  <ManagerButton
                    onClick={() => {
                      closePanel();
                      navigate("template-creator");
                    }}
                    name="Template Creator"
                  />
                </>
              )}

              {(items as T_SidebarMenuItem[]).map((item) => {
                return <NestedList key={item.name} name={item.name} items={item.list}></NestedList>;
              })}
            </TabPanel>
          )
        );
      })}
    </>
  );
};

export default SideBar;
