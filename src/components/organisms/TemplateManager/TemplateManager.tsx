import { importFiles } from '@/utils';
import { useEffect } from 'react';

import classes from './TemplateManager.module.scss';

const TemplateManager = () => {
  useEffect(() => {
    importFiles().then((data) => {
      console.log(data.Sections);
    });
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.menu}>
        <h2 className={classes.title}>Settings</h2>
      </div>
      <div className={classes.page}>
        <button>Кнопка</button>
      </div>
    </div>
  );
};

export default TemplateManager;
