import DefaultButton from "../../atoms/DefaultButton";

import resumePreview from "../../../assets/images/resume-preview.png";

import classes from "./PromoSection.module.scss";

const PromoSection = () => {
  return (
    <>
      <div className={classes["background-layout--dark"]}></div>
      <section className={classes.container}>
        <div className={classes["promo-content-wrapper"]}>
          <h1 className={classes["main-title"]}>
            Resume builder helps you get hired at top copmpanies
          </h1>
          <div className={classes["promo-buttons-wrapper"]}>
            <DefaultButton label="Build Your Resume" primary />
            <DefaultButton label="Get Your Resume Score" disabled />
          </div>
          <span className={classes['default-subtitle']}>Pick a resume template and build your resume in minutes</span>
        </div>
        <img src={resumePreview} alt="resume preview" className={classes["promo-image"]} />
      </section>
    </>
  );
};

export default PromoSection;
