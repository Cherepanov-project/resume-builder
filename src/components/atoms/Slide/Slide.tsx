import resumePreview from "../../../assets/images/resume-preview.png";

import classes from "./Slide.module.scss";

const Slide = () => {
  return (
    <div className={classes["slide-container"]}>
      <img
        src={resumePreview}
        alt="resume preview"
        className={classes["slide-image"]}
      />
    </div>
  );
};

export default Slide;
