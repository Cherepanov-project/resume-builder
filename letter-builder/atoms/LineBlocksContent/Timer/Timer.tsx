import { IconPngTimer } from "@components/atoms/Icons/LetterCardIcons";
import classes from "./Timer.module.scss";
import { CloseOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Form, ColorPicker, Cascader, DatePicker, TimePicker, Button } from "antd";
import { useStyleElement } from "../../../hooks/useStyleElement";
import { useAppDispatch } from "@/store/store";
import { addTimer } from "@/store/LetterBuilderStore/styleModule";

const TimerComponent = ({ id }: { id: string }) => {
  const { parameters } = useStyleElement(id, {
    color: "#000",
    fontSize: "14px",
    lineHeight: "20px",
    fontFamily: "Roboto, sans-serif",
  });
  const dispatch = useAppDispatch();
  const [viewModal, setViewModal] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(0);
  const color: string = parameters?.timerList?.color || "#FF0000";
  const background: string = parameters?.timerList?.background || "#2400ff";
  const installTime: number = parameters?.timerList?.installTime || 0;
  const installDate: number = parameters?.timerList?.installDate || 0;

  useEffect(() => {
    if (counter > 0) {
      const timer = setInterval(() => setCounter(counter - 1000), 1000);
      return () => clearInterval(Number(timer));
    }
  }, [counter]);

  useEffect(() => {
    if (installDate > 0 && installTime > 0) {
      const counter = installDate + installTime - Date.now();
      setCounter(installDate + installTime - Date.now());
      dispatch(addTimer({ id, counter }));
    }
  }, [parameters?.timerList?.installTime, parameters?.timerList?.installDate]);

  const viewModalHendle: () => void = () => setViewModal(true);
  const noneViewModalHendle: () => void = () => setViewModal(false);
  const onSave: () => void = () => {
    dispatch(addTimer({ id, save: true }));
    noneViewModalHendle();
  };
  const onChangeColor = (e: any) => {
    const color = `rgba(${e.metaColor.r},${e.metaColor.g}, ${e.metaColor.b}, ${e.metaColor.a})`;
    dispatch(addTimer({ id, color }));
  };
  const onChangeBackgroundColor = (e: any) => {
    const background = `rgba(${e.metaColor.r},${e.metaColor.g}, ${e.metaColor.b}, ${e.metaColor.a})`;
    dispatch(addTimer({ id, background }));
  };

  const onChangeData = (e: any) =>
    dispatch(addTimer({ id, installDate: new Date(`${e.$y}-${e.$M + 1}-${e.$D}`).getTime() }));

  const onChangeTime = (e: any) =>
    dispatch(addTimer({ id, installTime: e.$H * 3600000 + e.$m * 60000 + e.$s * 1000 }));

  const onSizeHandle = (e: any) => dispatch(addTimer({ id, size: e.join() }));

  const Timer = ({ size }: { size: string }) => {
    return (
      <table
        className={classes.counter}
        style={{ color: color, backgroundColor: background, scale: size }}
      >
        <tbody>
          <tr style={{ fontSize: "40px" }}>
            <td>{Math.floor((counter / (1000 * 60 * 60 * 24)) % 30)}</td>
            <td>{Math.floor((counter / (1000 * 60 * 60)) % 24)}</td>
            <td>{Math.floor((counter / (1000 * 60)) % 60)}</td>
            <td>{Math.floor((counter / 1000) % 60)}</td>
          </tr>
          <tr>
            <td>Дни</td>
            <td>Часы</td>
            <td>Минуты</td>
            <td>Секунды</td>
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    <>
      {parameters?.timerList?.save ? (
        <Timer size={parameters?.timerList?.size || "1"} />
      ) : (
        <>
          <div className="flex items-center justify-center">
            <IconPngTimer scale={1.7} />
          </div>
          <Button size="large" onClick={viewModalHendle}>
            Edit timer
          </Button>
        </>
      )}
      <div className={viewModal ? classes.modal : classes.modalNone}>
        <div className={classes.modalContent}>
          <div className={classes.modalTitle}>
            <span>Настройка таймера</span>

            <button type="button" className={classes.close} onClick={noneViewModalHendle}>
              <CloseOutlined style={{ scale: "1.5" }} />
            </button>
          </div>
          <div className={classes.modalMain}>
            <Form className={classes.modalMainForm}>
              <div className={classes.dateSelect}>
                <div>
                  <div>Дата события</div>
                  <DatePicker onChange={(e) => onChangeData(e)} />
                </div>
                <div>
                  <div>Время</div>
                  <TimePicker onChange={(e) => onChangeTime(e)} />
                </div>
              </div>
              <div>Цвет текста</div>
              <ColorPicker defaultValue={color} onChange={(e) => onChangeColor(e)} />
              <div>Цвет фона</div>
              <ColorPicker defaultValue={background} onChange={(e) => onChangeBackgroundColor(e)} />
              <div>Размер</div>
              <Cascader
                options={[
                  { value: "0.7", label: "Маленький" },
                  { value: "1", label: "Средний" },
                  { value: "1.2", label: "Большой" },
                ]}
                defaultValue={["Средний"]}
                onChange={(e) => onSizeHandle(e)}
              />
            </Form>
            <Timer size={parameters?.timerList?.size || "1"} />
          </div>
          <div className={classes.modalButton}>
            <Button type="primary" size="large" onClick={noneViewModalHendle}>
              Отменить
            </Button>
            <Button size="large" onClick={onSave}>
              Сохранить
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimerComponent;
