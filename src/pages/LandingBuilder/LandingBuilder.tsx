import classes from './LandingBuilder.module.scss';
import ConstructorList from '../../components/molecules/ConstructorList';
import { useAppSellector } from '../../hooks/cvTemplateHooks';
import { Button } from '@mui/material';

const LandingBuilder = () => {
  const elements = useAppSellector((state) => state.previewElements.renderedElements);
  const renderElements = elements.map((el, i) => {
    const elem = (
      <>
        <Button key={i} style={el.style} variant="contained">
          {el.content}
        </Button>
      </>
    );
    return elem;
  });
  return (
    <main className={classes.landing}>
      <section className={classes['landing-constructor']}>
        <ConstructorList />
      </section>
      <section style={{ paddingTop: 80 }} className={classes['landing-preview']}>
        {renderElements}
      </section>
    </main>
  );
};

export default LandingBuilder;
