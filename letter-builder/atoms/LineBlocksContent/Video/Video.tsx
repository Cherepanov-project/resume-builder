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
import { useDispatch, useSelector } from "react-redux";
import { IconPngVideo } from "@components/atoms/Icons/LetterCardIcons";
import { RootState } from "@/store/store";
import { setVideoUrl, toggleSidebar } from "../../../reducers/videoSlice";

const VideoComponent = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen, videoUrl } = useSelector((state: RootState) => state.video);

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
        </div>
      )}

      {videoUrl && (
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
          <button
            onClick={() => dispatch(toggleSidebar(false))}
            style={{
              display: "block",
              width: "100%",
              padding: "5px",
              fontSize: "12px",
              color: "#000",
              border: "1px solid #ccc",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
          >
            Закрыть редактор
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoComponent;
