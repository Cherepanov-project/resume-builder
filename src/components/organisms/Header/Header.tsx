import HeaderNav from '@molecules/HeaderNav';
import LoginButtonsContainer from '@molecules/LoginButtonsContainer';
import PreviewButtonsContainer from '@molecules/PreviewButtonsContainer';

import classes from './Header.module.scss';

const Header = () => {
  const previewData = {
    content: 'landing',
    settings: {},
    style: {},
  };

  return (
    <header className={classes.header}>
      <HeaderNav />
      <PreviewButtonsContainer label="Preview" preview={previewData} />
      <LoginButtonsContainer />
    </header>
  );
};

export default Header;
