import { useAppDispatch, useAppSellector } from '../../../hooks/cvTemplateHooks';
import { sideBar } from '../../../store/LandigBuilder/landingBuilder';
import AddSectionSideBar from '../../molecules/AddSectionSideBar';
import AddColumnsSideBar from '../../molecules/AddColumnsSideBar';
import AddElementListSideBar from '../../molecules/AddElementListSideBar';
import classes from './SideBar.module.scss';

const SideBar = () => {
  const dispatch = useAppDispatch();
  const currentSideBar = useAppSellector((state) => state.landigBuilder.sideBar[0]);
  let renderedSideBar = null;

  if (currentSideBar === 'addSection') {
    renderedSideBar = <AddSectionSideBar />;
  } else if (currentSideBar === 'editColumns') {
    renderedSideBar = <AddColumnsSideBar />;
  } else if (currentSideBar === 'editElements') {
    renderedSideBar = <AddElementListSideBar />;
  }

  if (renderedSideBar) {
    return (
      <div className={classes['side-bar']}>
        <button onClick={() => dispatch(sideBar(['null', 'null']))} style={{ color: 'red' }}>
          close
        </button>
        {renderedSideBar}
      </div>
    );
  } else {
    return null;
  }
};

export default SideBar;
