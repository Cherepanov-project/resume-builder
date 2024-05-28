import DotsColor from '../DotsColor/DotsColor.tsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import classes from './Reviews.module.scss';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import r1 from '@assets/images/templatesPageImage/1.jpg';
import r2 from '@assets/images/templatesPageImage/2.jpg';
import r3 from '@assets/images/templatesPageImage/3.jpg';
import { Autoplay } from 'swiper/modules';

const Reviews = () => {
  return (
    <section className={classes.reviews}>
      <div className={classes.dots}>
        <DotsColor />
      </div>
      <h2>Your Success, Our Inspiration</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis
        congue nisl hendrerit commodo.
      </p>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className={classes.swiper}
      >
        <SwiperSlide>
          <article className={classes.review}>
            <div className={classes.triangle}></div>
            <FormatQuoteIcon color="primary" className={classes.quoteIcon} />
            <img src={r1} alt="Avatar" width={100} height={100} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error nostrum adipisci porro
              quisquam. Rem, earum, tenetur? Architecto et, earum repudiandae.
            </p>
            <h2>John Doe</h2>
            <p>One of our Clients</p>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className={classes.review}>
            <div className={classes.triangle}></div>
            <FormatQuoteIcon color="primary" className={classes.quoteIcon} />
            <img src={r2} alt="Avatar" width={100} height={100} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error nostrum adipisci porro
              quisquam. Rem, earum, tenetur? Architecto et, earum repudiandae.
            </p>
            <h2>Sunny Khan</h2>
            <p>One of our Clients</p>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className={classes.review}>
            <div className={classes.triangle}></div>
            <FormatQuoteIcon color="primary" className={classes.quoteIcon} />
            <img src={r3} alt="Avatar" width={100} height={100} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error nostrum adipisci porro
              quisquam. Rem, earum, tenetur? Architecto et, earum repudiandae.
            </p>
            <h2>Jebin Khan</h2>
            <p>One of our Clients</p>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className={classes.review}>
            <div className={classes.triangle}></div>
            <FormatQuoteIcon color="primary" className={classes.quoteIcon} />
            <img src={r2} alt="Avatar" width={100} height={100} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error nostrum adipisci porro
              quisquam. Rem, earum, tenetur? Architecto et, earum repudiandae.
            </p>
            <h2>Sunny Khan</h2>
            <p>One of our Clients</p>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className={classes.review}>
            <div className={classes.triangle}></div>
            <FormatQuoteIcon color="primary" className={classes.quoteIcon} />
            <img src={r1} alt="Avatar" width={100} height={100} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error nostrum adipisci porro
              quisquam. Rem, earum, tenetur? Architecto et, earum repudiandae.
            </p>
            <h2>John Doe</h2>
            <p>One of our Clients</p>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className={classes.review}>
            <div className={classes.triangle}></div>
            <FormatQuoteIcon color="primary" className={classes.quoteIcon} />
            <img src={r3} alt="Avatar" width={100} height={100} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error nostrum adipisci porro
              quisquam. Rem, earum, tenetur? Architecto et, earum repudiandae.
            </p>
            <h2>Jebin Khan</h2>
            <p>One of our Clients</p>
          </article>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default Reviews;
