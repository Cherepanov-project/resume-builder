<<<<<<< HEAD
// import { IconPngVideo } from "@components/atoms/Icons/LetterCardIcons";

// const VideoComponent = () => {
//   const iconStyle = { color: "#515659", scale: 1.3 };

//   return (
//     <div className="text-[#515659]">
//       <div className="flex items-center justify-center">
//         <IconPngVideo {...iconStyle} />
//       </div>
//       <br />
//       Видео
//     </div>
//   );
// };

// export default VideoComponent;

// import React, { useState } from "react";
// import { IconPngVideo } from "@components/atoms/Icons/LetterCardIcons";

// const VideoComponent = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [videoUrl, setVideoUrl] = useState("");

//   const openSidebar = () => setIsSidebarOpen(true);
//   const closeSidebar = () => setIsSidebarOpen(false);

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setVideoUrl(event.target.value);
//   };

//   const applyVideo = () => {
//     if (isValidYouTubeUrl(videoUrl)) {
//       closeSidebar();
//     } else {
//       alert("Введите корректный URL YouTube");
//     }
//   };

//   const isValidYouTubeUrl = (url: string) => {
//     const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
//     return youtubeRegex.test(url);
//   };

//   const getYouTubeEmbedUrl = (url: string) => {
//     const videoIdMatch = url.match(
//       /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]+)/,
//     );
//     return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : "";
//   };

//   const iconStyle = { color: "#515659", scale: 1.3 };

//   return (
//     <div className="video-component">
//       {!videoUrl && !isSidebarOpen && (
//         <div onClick={openSidebar} className="video-icon">
//           <div className="text-[#515659]">
//             <div className="flex items-center justify-center">
//               <IconPngVideo {...iconStyle} />
//             </div>
//             <br />
//             Видео
//           </div>
//         </div>
//       )}

//       {videoUrl && (
//         <iframe
//           width="100%"
//           height="100%"
//           src={getYouTubeEmbedUrl(videoUrl)}
//           title="YouTube video player"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         ></iframe>
//       )}

//       {isSidebarOpen && (
//         <div className="sidebar" style={{ marginTop: "10px" }}>
//           <h3 style={{ fontSize: "12px", marginBottom: "8px" }}>Введите URL YouTube видео</h3>
//           <input
//             type="text"
//             placeholder="https://www.youtube.com/watch?v=..."
//             value={videoUrl}
//             onChange={handleInputChange}
//             style={{
//               display: "block",
//               marginBottom: "8px",
//               width: "100%",
//               padding: "5px",
//               fontSize: "12px",
//               color: "#000",
//               border: "1px solid #ccc",
//               backgroundColor: "transparent",
//             }}
//           />
//           <button
//             onClick={applyVideo}
//             style={{
//               display: "block",
//               marginBottom: "8px",
//               width: "100%",
//               padding: "5px",
//               fontSize: "12px",
//               color: "#000",
//               border: "1px solid #ccc",
//               backgroundColor: "transparent",
//               cursor: "pointer",
//             }}
//           >
//             Сохранить изменения
//           </button>
//           <button
//             onClick={closeSidebar}
//             style={{
//               display: "block",
//               width: "100%",
//               padding: "5px",
//               fontSize: "12px",
//               color: "#000",
//               border: "1px solid #ccc",
//               backgroundColor: "transparent",
//               cursor: "pointer",
//             }}
//           >
//             Закрыть редактор
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default VideoComponent;

//дополнения с ErrorMessage и с валидацией, которые надо добавить в вариант выше перед переработкой
// 1.	Состояние isVideoVisible:
// 	•	Это новое состояние контролирует видимость видео. Изначально оно установлено в false, и видео не показывается.
// 	•	При успешном применении URL (кнопка “Сохранить изменения”), это состояние становится true, и видео отображается.
// 	2.	Показ иконки при закрытии редактора:
// 	•	При нажатии`` кнопки “Закрыть редактор” состояние isVideoVisible сбрасывается в false, и иконка снова становится видимой.
// 	3.	Проверка URL:
// 	•	При нажатии на “Сохранить изменения” URL проверяется на валидность. Если URL невалидный, показывается сообщение об ошибке.

//Таким образом, при нажатии на “Сохранить изменения” видео будет добавлено и останется на странице, а при нажатии “Закрыть редактор” — видео исчезнет, и снова будет видно поле для добавления URL.

// VideoComponent.tsx
import React from "react";
=======
import React, { useState } from "react";
>>>>>>> origin/nekrasov
import { useDispatch, useSelector } from "react-redux";
import { IconPngVideo } from "@components/atoms/Icons/LetterCardIcons";
import { RootState } from "@/store/store";
import { setVideoUrl, toggleSidebar } from "../../../reducers/videoSlice";
<<<<<<< HEAD
=======
import { TextField, FormGroup, FormControlLabel, Switch } from "@mui/material";
>>>>>>> origin/nekrasov

const VideoComponent = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen, videoUrl } = useSelector((state: RootState) => state.video);
<<<<<<< HEAD

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setVideoUrl(event.target.value));
  };

  const applyVideo = () => {
    if (isValidYouTubeUrl(videoUrl)) {
      dispatch(toggleSidebar(false));
    } else {
      alert("Введите корректный URL YouTube");
    }
  };

  const isValidYouTubeUrl = (url: string) => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
    return youtubeRegex.test(url);
  };

  const getYouTubeEmbedUrl = (url: string) => {
    const videoIdMatch = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]+)/,
    );
    return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : "";
  };

  const iconStyle = { color: "#515659", scale: 1.3 };

  return (
    <div className="video-component">
      {!videoUrl && !isSidebarOpen && (
        <div onClick={() => dispatch(toggleSidebar(true))} className="video-icon">
          <div className="text-[#515659]">
            <div className="flex items-center justify-center">
              <IconPngVideo {...iconStyle} />
            </div>
            <br />
            Видео
          </div>
=======
  const [advancedPadding, setAdvancedPadding] = useState(false);
  const [videoTitle, setVideoTitle] = useState("");
  const [padding, setPadding] = useState({
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
    all: 10,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setVideoUrl(event.target.value));

  const handlePaddingChange = (side: string, value: number) =>
    setPadding((prev) => ({ ...prev, [side]: value }));

  const getYouTubeEmbedUrl = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : "";
  };

  return (
    <div className="video-component">
      {!isSidebarOpen && !videoUrl && (
        <div onClick={() => dispatch(toggleSidebar(true))} className="video-icon text-[#515659]">
          <div className="flex items-center justify-center">
            <IconPngVideo style={{ color: "#515659", scale: 1.3 }} />
          </div>
          <br />
          Видео
>>>>>>> origin/nekrasov
        </div>
      )}

      {videoUrl && (
<<<<<<< HEAD
        <iframe
          width="100%"
          height="100%"
          src={getYouTubeEmbedUrl(videoUrl)}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}

      {isSidebarOpen && (
        <div className="sidebar" style={{ marginTop: "10px" }}>
          <h3 style={{ fontSize: "12px", marginBottom: "8px" }}>Введите URL YouTube видео</h3>
          <input
            type="text"
            placeholder="https://www.youtube.com/watch?v=..."
            value={videoUrl}
            onChange={handleInputChange}
            style={{
              display: "block",
              marginBottom: "8px",
              width: "100%",
              padding: "5px",
              fontSize: "12px",
              color: "#000",
              border: "1px solid #ccc",
              backgroundColor: "transparent",
            }}
          />
          <button
            onClick={applyVideo}
            style={{
              display: "block",
              marginBottom: "8px",
              width: "100%",
              padding: "5px",
              fontSize: "12px",
              color: "#000",
              border: "1px solid #ccc",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
          >
            Сохранить изменения
          </button>
=======
        <>
          <iframe
            width="100%"
            height="100%"
            src={getYouTubeEmbedUrl(videoUrl)}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={
              advancedPadding
                ? {
                    paddingTop: padding.top,
                    paddingRight: padding.right,
                    paddingBottom: padding.bottom,
                    paddingLeft: padding.left,
                  }
                : { padding: padding.all }
            }
          ></iframe>
          {videoTitle && (
            <div style={{ textAlign: "center", marginTop: "8px", fontWeight: "bold" }}>
              {videoTitle}
            </div>
          )}
        </>
      )}

      {isSidebarOpen && (
        <div
          className="sidebar"
          style={{ marginTop: "10px", height: "100%", display: "flex", flexDirection: "column" }}
        >
          <TextField
            label="URL"
            variant="filled"
            value={videoUrl}
            onChange={handleInputChange}
            fullWidth
            style={{ marginBottom: "8px" }}
          />
          <TextField
            label="Название видео"
            variant="filled"
            value={videoTitle}
            onChange={(e) => setVideoTitle(e.target.value)}
            fullWidth
            style={{ marginBottom: "8px" }}
          />

          <div className="padding-editor" style={{ marginTop: "20px", flexGrow: 1 }}>
            <h4 style={{ fontSize: "12px", textAlign: "left" }}>Отступы видео</h4>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={advancedPadding}
                    onChange={(e) => setAdvancedPadding(e.target.checked)}
                  />
                }
                label="Больше свойств"
              />
            </FormGroup>
            {advancedPadding ? (
              <>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div>
                    {/* <label>Сверху:</label>
                     */}
                    <TextField
                      id="filled-number"
                      label="Сверху"
                      type="number"
                      variant="filled"
                      slotProps={{
                        inputLabel: {
                          shrink: true,
                        },
                      }}
                      style={{
                        margin: "4px",
                      }}
                      value={padding.top}
                      onChange={(e) => handlePaddingChange("top", +e.target.value)}
                    />
                  </div>
                  <div>
                    {/* <label>Справа:</label> */}
                    <TextField
                      id="filled-number"
                      label="Справа"
                      type="number"
                      variant="filled"
                      slotProps={{
                        inputLabel: {
                          shrink: true,
                        },
                      }}
                      value={padding.right}
                      onChange={(e) => handlePaddingChange("right", +e.target.value)}
                      style={{
                        margin: "4px",
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div>
                    {/* <label>Снизу:</label> */}
                    <TextField
                      id="filled-number"
                      label="Снизу"
                      type="number"
                      variant="filled"
                      slotProps={{
                        inputLabel: {
                          shrink: true,
                        },
                      }}
                      value={padding.bottom}
                      onChange={(e) => handlePaddingChange("bottom", +e.target.value)}
                      style={{
                        margin: "4px",
                      }}
                    />
                  </div>
                  <div>
                    {/* <label>Слева:</label> */}
                    <TextField
                      id="filled-number"
                      label="Слева"
                      type="number"
                      variant="filled"
                      slotProps={{
                        inputLabel: {
                          shrink: true,
                        },
                      }}
                      value={padding.left}
                      onChange={(e) => handlePaddingChange("left", +e.target.value)}
                      style={{
                        margin: "4px",
                      }}
                    />
                  </div>
                </div>
              </>
            ) : (
              <div>
                {/* <label>Все стороны:</label> */}
                <TextField
                  id="filled-number"
                  label="Все стороны"
                  type="number"
                  variant="filled"
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                  }}
                  value={padding.all}
                  onChange={(e) => handlePaddingChange("all", +e.target.value)}
                  style={{
                    margin: "4px",
                  }}
                />
              </div>
            )}
          </div>

>>>>>>> origin/nekrasov
          <button
            onClick={() => dispatch(toggleSidebar(false))}
            style={{
              display: "block",
              width: "100%",
              padding: "5px",
              fontSize: "12px",
<<<<<<< HEAD
              color: "#000",
              border: "1px solid #ccc",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
          >
            Закрыть редактор
=======
              border: "1px solid #ccc",
              backgroundColor: "transparent",
              marginTop: "8px",
              cursor: "pointer",
            }}
          >
            Скрыть редактор
>>>>>>> origin/nekrasov
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoComponent;
