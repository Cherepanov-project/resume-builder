import { Tab } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import classes from './TabPanel.module.scss';

interface TabPanelProps {
  label: string;
  children?: React.ReactNode;
  index: number;
  value: number;
  closePanel: () => void;
}

const TabPanel: React.FC<TabPanelProps> = ({ label, children, value, index, closePanel }) => {
  return (
    <div
      className={classes['list__wrap']}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
    >
      {value === index && (
        <>
          <div className={classes['list__title']}>
            <h3>{label}</h3>
            <Tab
              className={`${classes['tab']} ${classes['list__close-btn']}`}
              icon={<CloseIcon />}
              aria-label="close"
              onClick={closePanel}
            />
          </div>
          {children}
        </>
      )}
    </div>
  );
};

export default TabPanel;
