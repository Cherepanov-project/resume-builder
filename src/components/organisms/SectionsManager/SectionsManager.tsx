import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon, Stack } from "@mui/material";
import { AddSharp, Close, EditSharp, RemoveSharp } from "@mui/icons-material/";

import { setLayoutDate } from "@/store/landingBuilder/sectionsManagerSlice";
import { togglePreviewMode } from "@/store/landingBuilder/utilitySlice";

import MemoizedSectionsConstructor from "@molecules/SectionsConstructor";
import { useTypedSelector } from "@/hooks/cvTemplateHooks";
import PreviewButtonsContainer from "@molecules/PreviewButtonsContainer";
import Item from "@atoms/StyledPaperItem";
import SectionsToolsPanel from "@molecules/SectionsToolsPanel/SectionsToolsPanel";
import ErrorPopup from "@atoms/ErrorPopup";

const SectionsManager: FC = () => {
  const dispatch = useDispatch();
  const layoutDate = useTypedSelector((state) => state.sectionsManager.layoutDate);
  const isPreviewMode = useTypedSelector((state) => state.utility.isPreviewMode);
  const rows = Object.keys(layoutDate).length;
  const [error, setError] = useState("");
  const [severity, setSeverity] = useState("warning");

  // Убрать попап после 2 секунд
  if (error) {
    setTimeout(() => {
      setError("");
      setSeverity("warning");
    }, 2000);
  }

  const [visible, setVisible] = useState(["inline-flex", "none"]);

  useEffect(() => {
    if (rows >= 5) {
      setVisible(["none", "inline-flex"]);
    } else if (rows <= 1) {
      setVisible(["inline-flex", "none"]);
    } else {
      setVisible(["inline-flex", "inline-flex"]);
    }
  }, [rows]);

  const addRow = () => {
    if (rows < 5) {
      const id = String(rows + 1) + 1;
      const newRow = [
        {
          name: "",
          type: "",
          source: "atoms",
          props: {
            key: "",
            wrapperStyle: { display: "block" },
            textStyle: { display: "block" },
          },
          layout: { i: id, x: 0, y: 0, w: 1, h: 1 },
        },
      ];
      dispatch(setLayoutDate({ ...layoutDate, [rows + 1]: newRow }));
    }
  };

  const removeRow = () => {
    if (rows > 1) {
      const newLayoutDate = JSON.parse(JSON.stringify(layoutDate));
      delete newLayoutDate[rows];
      dispatch(setLayoutDate(newLayoutDate));
    } else {
      setVisible(["inline-flex", "none"]);
    }
  };

  const actions = [
    { icon: <AddSharp />, name: "Add row", onClick: addRow, visible: visible[0] },
    { icon: <RemoveSharp />, name: "Remove row", onClick: removeRow, visible: visible[1] },
  ];

  const previewData = {
    content: "section",
    settings: {},
    style: {},
  };

  const handlePreviewToggle = () => {
    dispatch(togglePreviewMode());
  };

  return (
    <Box
      sx={{
        // Убираем все отступы в режиме превью
        p: isPreviewMode ? "0" : "0 30px 0 56px",
        minHeight: "100vh",
        // В режиме превью убираем минимальную ширину
        minWidth: isPreviewMode ? "100vw" : "1520px",
        width: isPreviewMode ? "100vw" : "auto", // Добавляем явную ширину
        background: "#222",
        // Убираем внешние отступы в превью
        margin: isPreviewMode ? "0" : "auto",
        position: isPreviewMode ? "fixed" : "static", // Фиксированное позиционирование
        top: isPreviewMode ? "0" : "auto",
        left: isPreviewMode ? "0" : "auto",
        zIndex: isPreviewMode ? 1000 : "auto",
      }}
    >
      {error ? <ErrorPopup message={error} severity={severity} /> : null}

      {/* В режиме превью отображаем только контент */}
      {isPreviewMode ? (
        <Box
          sx={{
            width: "calc(100vw - 80px)", // Учитываем ширину левой панели
            height: "100vh",
            background: "#fff",
            position: "relative",
            marginLeft: "80px", // Сдвигаем контент вправо, чтобы не перекрывался левой панелью
          }}
        >
          <MemoizedSectionsConstructor
            setError={setError}
            setSeverity={setSeverity}
            isPreviewMode={isPreviewMode}
          />

          {/* Кнопка выхода из превью */}
          <Box
            sx={{
              position: "absolute",
              top: "20px",
              right: "20px",
              zIndex: 1001,
            }}
          >
            <PreviewButtonsContainer
              label="Exit Preview"
              preview={previewData}
              onPreviewToggle={handlePreviewToggle}
              isExitButton={true}
            />
          </Box>
        </Box>
      ) : (
        /* Обычный режим редактирования */
        <Stack
          direction="row"
          sx={{
            minHeight: "100%",
          }}
        >
          {/* Левая панель */}
          <Item sx={{ height: "100%", mx: "10px", background: "#222" }}>
            <SectionsToolsPanel setError={setError} setSeverity={setSeverity} />
          </Item>

          <Item
            sx={{
              height: "100vh",
              width: "70%",
              backgroundColor: "#333",
              px: "35px",
            }}
          >
            <div>
              <h2 style={{ color: "#999" }}>WORKSPACE</h2>
            </div>

            <MemoizedSectionsConstructor
              setError={setError}
              setSeverity={setSeverity}
              isPreviewMode={isPreviewMode}
            />

            {/* Нижняя панель с кнопками */}
            <Box
              sx={{
                display: "inline-flex",
                m: "10px",
                width: "100%",
                justifyContent: "space-evenly",
              }}
            >
              <Box sx={{ transform: "translateZ(0px)" }}>
                <SpeedDial
                  sx={{
                    opacity: "0.2",
                    "& .MuiFab-primary": { width: 36, height: 36 },
                    "&:hover": {
                      opacity: "1",
                    },
                  }}
                  direction="down"
                  ariaLabel="Control of rows"
                  icon={<SpeedDialIcon icon={<EditSharp />} openIcon={<Close />} />}
                >
                  {actions.map((action) => (
                    <SpeedDialAction
                      sx={{ display: action.visible }}
                      key={action.name}
                      icon={action.icon}
                      tooltipTitle={action.name}
                      onClick={action.onClick}
                    />
                  ))}
                </SpeedDial>
              </Box>

              <PreviewButtonsContainer
                label="Preview Section"
                preview={previewData}
                onPreviewToggle={handlePreviewToggle}
              />
            </Box>
          </Item>
        </Stack>
      )}
    </Box>
  );
};

export default SectionsManager;
