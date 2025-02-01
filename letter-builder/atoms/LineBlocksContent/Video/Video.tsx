import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconPngVideo } from "@components/atoms/Icons/LetterCardIcons";
import { RootState } from "@/store/store";
import { setVideoUrl, toggleSidebar } from "../../../reducers/videoSlice";
import { TextField, FormGroup, FormControlLabel, Switch } from "@mui/material";

const VideoComponent = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen, videoUrl } = useSelector((state: RootState) => state.video);
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
        </div>
      )}

      {videoUrl && (
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

          <button
            onClick={() => dispatch(toggleSidebar(false))}
            style={{
              display: "block",
              width: "100%",
              padding: "5px",
              fontSize: "12px",
              border: "1px solid #ccc",
              backgroundColor: "transparent",
              marginTop: "8px",
              cursor: "pointer",
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
