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

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconPngVideo } from "@components/atoms/Icons/LetterCardIcons";
import { RootState } from "@/store/store";
import { setVideoUrl, toggleSidebar } from "../../../reducers/videoSlice";

const VideoComponent = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen, videoUrl } = useSelector((state: RootState) => state.video);

  const [videoTitle, setVideoTitle] = useState(""); // Для хранения названия видео

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setVideoUrl(event.target.value));
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVideoTitle(event.target.value); // Обновляем название видео
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

          <div
            style={{
              fontSize: "10px",
              backgroundColor: "transparent",
            }}
          >
            <p>
              Добавьте YouTube URL для автоматической генерации картинки. Изображение будет
              ссылаться на предоставленный URL.
            </p>
          </div>
          <input
            type="text"
            placeholder="Название видео"
            value={videoTitle}
            onChange={handleTitleChange}
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
            Х
          </button>
        </div>
      )}

      <div>{videoTitle}</div>
    </div>
  );
};

export default VideoComponent;
