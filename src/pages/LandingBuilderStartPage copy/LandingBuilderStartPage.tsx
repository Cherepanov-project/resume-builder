import { LibraryAdd, ViewCarousel, ViewQuilt } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import classes from './LandingBuilderStartPage.module.scss';
import { persistor } from '@/store/store';
import { useAppDispatch } from '@/hooks/cvTemplateHooks';
import { clearStore } from '@/store/landingBuilder/layoutSlice';

export const LandingBuilderStartPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <div className={classes['start-page']}>
      <button
        className={classes['button']}
        onClick={() => {
          dispatch(clearStore());
          persistor.purge();
          navigate('/landing-builder');
        }}
      >
        <LibraryAdd style={{ fontSize: 60 }} />
        <span>Create</span>
      </button>
      <button
        className={classes['button']}
        onClick={() => {
          dispatch(clearStore());
          persistor.purge();
          navigate('/landing-builder/templates');
        }}
      >
        <ViewCarousel style={{ fontSize: 60 }} />
        <span>Templates</span>
      </button>
      <button className={classes['button']} onClick={() => navigate('/landing-builder')}>
        <ViewQuilt style={{ fontSize: 60 }} />
        <span>Restore</span>
      </button>
    </div>
  );
};
