import { IconPngTimer } from "@components/atoms/Icons/LetterCardIcons";
import { CloseOutlined } from "@mui/icons-material";
import { useCallback, useEffect, useState } from "react";
import { Form, ColorPicker, Cascader, DatePicker, TimePicker, Button, Card, Row, Col } from "antd";
import type { Color } from "antd/es/color-picker";
import dayjs from "dayjs";
import { useStyleElement } from "../../../hooks/useStyleElement";
import { useAppDispatch } from "@/store/store";
import { addTimer } from "@/store/LetterBuilderStore/styleModule";
import classes from "./Timer.module.scss";

interface InstallDateTime {
  $y: number;
  $M: number;
  $D: number;
}

const SIZE_OPTIONS = [
  { value: "0.6", label: "Маленький" },
  { value: "0.8", label: "Средний" },
  { value: "1.0", label: "Большой" },
];

const TimerComponent = ({ id }: { id: string }) => {
  const { parameters } = useStyleElement(id, {
    color: "#fff",
    fontSize: "14px",
    lineHeight: "20px",
    fontFamily: "Roboto, sans-serif",
  });
  const dispatch = useAppDispatch();
  const [viewModal, setViewModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    color = "#fff",
    background = "#457670",
    installTime = 0,
    installDate = 0,
    size = "0.8",
    save = false,
    counter = 0,
  } = parameters?.timerList || {};

  // таймер
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (counter > 0) {
      timer = setInterval(() => {
        const newCounter = installDate + installTime - Date.now();
        if (newCounter > 0) {
          dispatch(addTimer({ id, counter: newCounter }));
        } else {
          dispatch(addTimer({ id, counter: 0 }));
        }
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [counter, installDate, installTime, dispatch, id]);

  useEffect(() => {
    if (installDate > 0 && installTime > 0) {
      const newCounter = installDate + installTime - Date.now();
      if (newCounter > 0) {
        dispatch(addTimer({ id, counter: newCounter }));
      }
    }
  }, [installDate, installTime, dispatch, id]);

  // модальное окно
  const openModal = useCallback(() => setViewModal(true), []);
  const closeModal = useCallback(() => setViewModal(false), []);

  const handleSave = useCallback(() => {
    setLoading(true);
    try {
      dispatch(addTimer({ id, save: true }));
      closeModal();
    } finally {
      setLoading(false);
    }
  }, [dispatch, id, closeModal]);

  const handleColorChange = useCallback(
    (color: Color) => {
      const { r, g, b, a } = color.toRgb();
      dispatch(addTimer({ id, color: `rgba(${r},${g},${b},${a})` }));
    },
    [dispatch, id],
  );

  const handleBackgroundChange = useCallback(
    (color: Color) => {
      const { r, g, b, a } = color.toRgb();
      dispatch(addTimer({ id, background: `rgba(${r},${g},${b},${a})` }));
    },
    [dispatch, id],
  );

  const handleDateChange = useCallback(
    (e: InstallDateTime) => {
      dispatch(
        addTimer({
          id,
          installDate: new Date(`${e.$y}-${e.$M + 1}-${e.$D}`).getTime(),
        }),
      );
    },
    [dispatch, id],
  );

  const handleTimeChange = useCallback(
    (time: dayjs.Dayjs | null) => {
      if (time) {
        const installTime = time.hour() * 3600000 + time.minute() * 60000 + time.second() * 1000;
        dispatch(addTimer({ id, installTime }));
      }
    },
    [dispatch, id],
  );

  const handleSizeChange = useCallback(
    (e: string[]) => {
      dispatch(addTimer({ id, size: e.join() }));
    },
    [dispatch, id],
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "Enter") handleSave();
    },
    [closeModal, handleSave],
  );

  useEffect(() => {
    if (!viewModal) return;
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [viewModal, handleKeyDown]);

  // Компонент таймера
  const ModernTimer = useCallback(() => {
    const time = {
      days: Math.floor((counter / (1000 * 60 * 60 * 24)) % 30),
      hours: Math.floor((counter / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((counter / (1000 * 60)) % 60),
      seconds: Math.floor((counter / 1000) % 60),
    };

    return (
      <div style={{ transform: `scale(${size})`, cursor: "pointer" }} onClick={openModal}>
        <Card style={{ backgroundColor: background }}>
          <Row gutter={16}>
            {Object.entries(time).map(([key, value]) => (
              <Col key={key} span={6}>
                <div style={{ color }} className={classes.int}>
                  {value}
                </div>
                <div style={{ fontSize: 16, color }}>
                  {key === "days" && "Дней"}
                  {key === "hours" && "Часов"}
                  {key === "minutes" && "Минут"}
                  {key === "seconds" && "Секунд"}
                </div>
              </Col>
            ))}
          </Row>
        </Card>
      </div>
    );
  }, [counter, size, background, color, openModal]);

  return (
    <>
      {save ? (
        <ModernTimer />
      ) : (
        <>
          <div className="flex items-center justify-center">
            <IconPngTimer scale={1.7} />
          </div>
          <Button size="large" onClick={openModal}>
            Edit timer
          </Button>
        </>
      )}

      {viewModal && (
        <div
          className={classes.modal}
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={classes.modalTitle}>
              <span>Настройка таймера</span>
              <button
                type="button"
                className={classes.close}
                onClick={closeModal}
                aria-label="Закрыть"
              >
                <CloseOutlined style={{ scale: "1.5" }} />
              </button>
            </div>

            <div className={classes.modalMain}>
              <Form className={classes.modalMainForm}>
                <div className={classes.dateSelect}>
                  <div>
                    <div>Дата события:</div>
                    <DatePicker onChange={handleDateChange} />
                  </div>
                  <div>
                    <div>Время:</div>
                    <TimePicker onChange={handleTimeChange} />
                  </div>
                </div>

                <div className={classes.row}>
                  <div>Цвет текста:</div>
                  <ColorPicker defaultValue={color} onChange={handleColorChange} />
                </div>

                <div className={classes.row}>
                  <div>Цвет фона:</div>
                  <ColorPicker defaultValue={background} onChange={handleBackgroundChange} />
                </div>

                <div className={classes.row}>
                  <div>Размер:</div>
                  <Cascader
                    options={SIZE_OPTIONS}
                    defaultValue={["0.8"]}
                    onChange={handleSizeChange}
                    allowClear={false}
                  />
                </div>
              </Form>

              <ModernTimer />
            </div>

            <div className={classes.modalButton}>
              <Button type="primary" size="large" onClick={closeModal}>
                Отменить
              </Button>
              <Button size="large" onClick={handleSave} loading={loading}>
                Сохранить
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TimerComponent;
