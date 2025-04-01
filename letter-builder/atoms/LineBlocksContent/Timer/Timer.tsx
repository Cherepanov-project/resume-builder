/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import React from "react";
import styles from "./Timer.module.scss";
import reset from "./reset-svgrepo-com.svg";
import play from "./play.svg";
import pause from "./pause.svg";
import { CloseOutlined } from "@ant-design/icons";
import { deleteElement } from "@store/landingBuilder/layoutSlice";
import { useAppDispatch } from "@hooks/cvTemplateHooks";


// import { set } from "react-hook-form";


const TimerComponent = ({ id }) => {
  const dispatch = useAppDispatch()
  const [secund, setSecund] = React.useState(0);
  const [isActive, setIsActive] = React.useState(false);
  const [minute, setMinute] = React.useState(0);
  const [isClosedIcon, setIsClosedIcon] = React.useState(false);


  const timer = (sec) => {
    let ms = sec;
    let sc = 0;
    // if (sec / 60 == 0) setMinute(minute => minute + 1)
    
    
    let minutes: number = Math.floor(sec / 60 % 60);
    if (minutes >= 60) minutes = Math.floor(sec / 60 % 60);
    let hour: number = Math.floor(sec / 60 / 60 % 60);
    
    let secunds: number = sec % 60;
    return `${hour}:${minutes
        .toString().padStart(2, "0")}:${(sec%60)
      .toString()
      .padStart(2, "0")}`;
  };

  React.useEffect(() => {

    let timer;
    if (isActive) {
      timer = setInterval(() => {
        setSecund((secund) => secund + 1);
      }, 1000/60);
    } else if (isActive === false) clearInterval(timer);

    return () => {
      clearInterval(timer);
    };
  }, [isActive]);

  const reseted = () => {
    setIsActive(false);
    setSecund(0);
  };


  return (
    <div
      className="text-[#515659]"
      style={{ display: "block", paddingRight: "15px", position: "relative" }}
    >
      <div
        className="flex items-center justify-center"
        onMouseOver={() => {
          setIsClosedIcon(true);
        }}
        onMouseOut={() => {
          setIsClosedIcon(false);
        }}
      >
        <h1 className={styles.h2}>
          {`${timer(secund)}`}
          {isClosedIcon ? <CloseOutlined className={styles.closeIcon}
            onClick={() => {console.log('Закрытие таймера' ); dispatch(deleteElement(id))}}/> : ""}
        </h1>
      </div>
      <br />
      <div className={styles.timer}>
        <div
          className={styles.timer__div}
          onClick={() => {
            setIsActive(true);
          }}
        >
          <img src={play} alt="" className={styles.reset} />
          <p>start</p>
        </div>
        <div
          className={styles.timer__div}
          onClick={() => {
            setIsActive(false);
          }}
        >
          <img src={pause} className={styles.reset} alt="" />
          pause
        </div>
        <div
          className={styles.timer__div}
          onClick={() => {
            reseted();
          }}
        >
          <img src={reset} alt="" className={styles.reset} />
          reset
        </div>
      </div>
    </div>
  );
};

export default TimerComponent;
