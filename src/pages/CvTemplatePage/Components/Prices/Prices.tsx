import classes from './Prices.module.scss';
import DotsColor from '../DotsColor/DotsColor.tsx';
import CardPrice from './CardPrice.tsx';

const Prices = () => {
  return (
    <section className={classes.prices}>
      <div className={classes['text-wrapper']}>
        <DotsColor />
        <h2>Our Prices</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non
          suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.
        </p>
        <div className={classes['b-wrapper']}>
          <b>Lets Build CV</b>
          <br />
          <b>with 7days of Free Trial</b>
        </div>
        <div className={classes.terms}>
          <a href={'#'}>Terms & Conditions </a>
          <p>subject to change with perior notice</p>
        </div>
      </div>
      <CardPrice time="month" price="9.99" />
      <CardPrice time="year" price="7.99" />
    </section>
  );
};

export default Prices;
