import classes from './CustomCv.module.scss';

const CustomCv = () => {
  return (
    <article className={classes['custom-cv']}>
      <h2>
        Do you Need a Complete <br />
        Custom CV Template?
      </h2>
      <button className={classes['custom-cv__button']}>Send a Request</button>
    </article>
  );
};

export default CustomCv;
