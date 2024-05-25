import classes from './CvTemplates.module.scss';
import cv1 from '@assets/images/templatesPageImage/demo-1.png';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import cv2 from '@assets/images/templatesPageImage/demo-2.png';
import cv3 from '@assets/images/templatesPageImage/demo-3.png';
import DotsColor from '../DotsColor/DotsColor';
import { FC } from 'react';

interface TemplateProps {
  img: string;
}

const Template: FC<TemplateProps> = ({ img }) => {
  return (
    <li className={classes['cv-templates__item']}>
      <img src={img} alt="img1" width={393} height={490} />
      <div className={classes['custom-wrapper__btn']}>
        <button className={classes['custom-btn']}>
          see template <ArrowRightAltIcon />
        </button>
        <button className={classes['custom-btn']}>
          use template <ArrowRightAltIcon />
        </button>
      </div>
    </li>
  );
};

const CvTemplates = () => {
  return (
    <section className={classes['cv-templates']}>
      <div className="container-1200">
        <div className={classes['dots-wrapper']}>
          <DotsColor />
        </div>
        <p> text="Our Creative Templates" </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua
        </p>
        <ul className={classes['cv-templates__list']}>
          <Template img={cv1} />
          <Template img={cv2} />
          <Template img={cv3} />
        </ul>
      </div>
    </section>
  );
};

export { CvTemplates, Template };
