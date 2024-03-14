import { FC } from 'react';
import classes from './CardPrice.module.scss';

interface CardPriceProps {
  time: string;
  price: string;
}

const CardPrice: FC<CardPriceProps> = ({ time, price }) => {
  const title = time === 'month' ? 'Monthly' : 'Yearly';
  return (
    <article className={classes['card-price']}>
      <div className={classes['price-wrapper']}>
        <h4>${price}</h4>

        <span>/month</span>
      </div>
      <div className={classes['card-price__content']}>
        <h3>{title} Pack</h3>
        <p>
          You will be billed per month, and get unlimited access to all resume Templates and new
          added ones
        </p>
        <button className="custom-cv__button mt-30">Get Started</button>
      </div>
    </article>
  );
};

export default CardPrice;
