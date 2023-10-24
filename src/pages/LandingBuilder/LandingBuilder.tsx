import classes from './LandingBuilder.module.scss';
import { BasicCard } from '../../components/molecules/BasicCard';
import { BasicCardMenu } from '../../components/molecules/BasicCardMenu';

const LandingBuilder = () => {
  return (
    <main className={classes.landing}>
      <section className={classes['landing-constructor']}>
        <BasicCardMenu />
      </section>
      <section className={classes['landing-preview']}>
        <BasicCard />
      </section>
    </main>
  );
};

export default LandingBuilder;
