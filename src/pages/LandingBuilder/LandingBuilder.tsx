import classes from './LandingBuilder.module.scss';

const LandingBuilder = () => {
  return (
    <main className={classes.landing}>
      <section className={classes['landing-constructor']}></section>
      <section className={classes['landing-preview']}></section>
    </main>
  );
};

export default LandingBuilder;
