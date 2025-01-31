import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconPngVideo } from "@components/atoms/Icons/LetterCardIcons";
import { RootState } from "@/store/store";
import { setVideoUrl, toggleSidebar } from "../../../reducers/videoSlice";
import TextField from "@mui/material/TextField";

const VideoComponent = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen, videoUrl } = useSelector((state: RootState) => state.video);

  const [videoTitle, setVideoTitle] = useState("");
  const [padding, setPadding] = useState({
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setVideoUrl(event.target.value));
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVideoTitle(event.target.value);
  };

  const handlePaddingChange = (side: string, value: number) => {
    setPadding((prevPadding) => ({
      ...prevPadding,
      [side]: value,
    }));
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
          style={{
            paddingTop: `${padding.top}px`,
            paddingRight: `${padding.right}px`,
            paddingBottom: `${padding.bottom}px`,
            paddingLeft: `${padding.left}px`,
          }}
        ></iframe>
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
            style={{
              marginBottom: "8px",
            }}
          />

          <div
            style={{
              fontSize: "10px",
              backgroundColor: "transparent",
              textAlign: "left",
            }}
          >
            <p>
              Добавьте YouTube URL для автоматической генерации картинки. Изображение будет
              ссылаться на предоставленный URL.
            </p>
          </div>

          <TextField
            label="Название видео"
            variant="filled"
            value={videoTitle}
            onChange={handleTitleChange}
            fullWidth
            style={{
              marginBottom: "8px",
            }}
          />

          <div className="padding-editor" style={{ marginTop: "20px", flexGrow: 1 }}>
            <h4 style={{ fontSize: "12px", textAlign: "left" }}>Отступы видео</h4>
            <div
              className="padding-controls"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>
                <label>Сверху:</label>
                <input
                  type="number"
                  value={padding.top}
                  onChange={(e) => handlePaddingChange("top", +e.target.value)}
                  style={{
                    width: "50px",
                    marginBottom: "8px",
                    backgroundColor: "transparent",
                    border: "1px solid black",
                  }}
                />
              </div>
              <div>
                <label>Справа:</label>
                <input
                  type="number"
                  value={padding.right}
                  onChange={(e) => handlePaddingChange("right", +e.target.value)}
                  style={{
                    width: "50px",
                    marginBottom: "8px",
                    backgroundColor: "transparent",
                    border: "1px solid black",
                  }}
                />
              </div>
            </div>

            <div
              className="padding-controls"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>
                <label>Снизу:</label>
                <input
                  type="number"
                  value={padding.bottom}
                  onChange={(e) => handlePaddingChange("bottom", +e.target.value)}
                  style={{
                    width: "50px",
                    marginBottom: "8px",
                    backgroundColor: "transparent",
                    border: "1px solid black",
                  }}
                />
              </div>
              <div>
                <label>Слева:</label>
                <input
                  type="number"
                  value={padding.left}
                  onChange={(e) => handlePaddingChange("left", +e.target.value)}
                  style={{
                    width: "50px",
                    marginBottom: "8px",
                    backgroundColor: "transparent",
                    border: "1px solid black",
                  }}
                />
              </div>
            </div>
          </div>

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
              marginTop: "8px",
            }}
          >
            Скрыть редактор
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoComponent;
