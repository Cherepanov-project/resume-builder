import classes from './LandingBuilder.module.scss';
import WorkSpace from '../../components/organisms/WorkSpace';

import { sideBar } from '../../store/LandigBuilder/landingBuilder';
import { useAppDispatch } from '../../hooks/cvTemplateHooks';
import SideBar from '../../components/organisms/SideBar';
const LandingBuilder = () => {
  const dispatch = useAppDispatch();

  return (
    <main className={classes.landing}>
      <SideBar />
      <WorkSpace />
      <button
        style={{ backgroundColor: 'green' }}
        onClick={() => dispatch(sideBar(['addSection', 'null']))}
        className={classes.addbtn}
      >
        +
      </button>
    </main>
  );
};

export default LandingBuilder;
