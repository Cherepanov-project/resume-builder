import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { IconPngVideo } from "@components/atoms/Icons/LetterCardIcons";
import { MdEdit, MdDelete, MdSave, MdClose } from "react-icons/md";
import styles from "./Video.module.scss";
// import { changeElement } from "@/store/LetterBuilderStore/letterLayoutSlice";
import { setSelectedVideo } from "@/store/LetterBuilderStore/videoSelectionSlice";
import { useTypedSelector } from "@/hooks/cvTemplateHooks";

interface VideoProps {
  videoUrl?: string;
  [key: string]: unknown;
}

interface LayoutProps {
  [key: string]: unknown;
}
interface VideoComponentProps {
  id: string;
  props?: VideoProps;
  layout?: LayoutProps;
  containerId?: string;
  type?: string;
  videoUrl?: string;
  onVideoSelect?: (url: string) => void;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ id, onVideoSelect }) => {
  const dispatch = useDispatch();
  const videoUrl = useTypedSelector((state) => state.videoSelection.selectedVideos[id]) || "";

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [inputVideoUrl, setInputVideoUrl] = useState(videoUrl);

  useEffect(() => {
    setInputVideoUrl(videoUrl);
  }, [videoUrl]);

  const isValidYouTubeUrl = (url: string): boolean => {
    if (!url) return false;
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
    return youtubeRegex.test(url);
  };

  const getYouTubeEmbedUrl = (url?: string | undefined): string => {
    if (!url || typeof url !== "string") return "";
    const videoIdMatch = url.match(
      /(?:https?:\/\/)?(www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]+)/,
    );

    return videoIdMatch && videoIdMatch[2]
      ? `https://www.youtube.com/embed/${videoIdMatch[2]}?enablejsapi=0&origin=${window.location.origin}`
      : "";
  };

  const activateThisVideo = () => {
    setIsSidebarOpen(true);
    setInputVideoUrl(videoUrl || "");
  };

  const applyVideo = () => {
    if (isValidYouTubeUrl(inputVideoUrl)) {
      dispatch(setSelectedVideo({ elementId: id, url: inputVideoUrl }));
      onVideoSelect?.(inputVideoUrl);

      setIsSidebarOpen(false);
    } else {
      alert("Введите корректный URL YouTube");
    }
  };

  const removeThisVideo = () => {
    dispatch(setSelectedVideo({ elementId: id, url: "" }));
    onVideoSelect?.("");
    setInputVideoUrl("");
    setIsSidebarOpen(false);
  };

  const iconStyle = { color: "#515659", scale: 1.3 };
  const hasVideoUrl = !!videoUrl;

  return (
    <div className={styles.videoComponent}>
      {!hasVideoUrl && !isSidebarOpen && (
        <div onClick={activateThisVideo} className={styles.videoIcon}>
          <div className={styles.videoIconText}>
            <div className="flex justify-center items-center">
              <IconPngVideo {...iconStyle} />
            </div>
            <br />
            Видео
          </div>
        </div>
      )}

      {hasVideoUrl && (
        <div className={styles.videoContainer}>
          <iframe
            className={styles.videoIframe}
            src={getYouTubeEmbedUrl(videoUrl)}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <div className={styles.videoOverlay}>
            <button
              onClick={activateThisVideo}
              className={`${styles.actionButton} ${styles.editButton}`}
              title="Редактировать видео"
            >
              <MdEdit size={28} />
            </button>
            <button
              onClick={removeThisVideo}
              className={`${styles.actionButton} ${styles.deleteButton}`}
              title="Удалить видео"
            >
              <MdDelete size={28} />
            </button>
          </div>
        </div>
      )}

      {isSidebarOpen && (
        <div className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <h3 className={styles.sidebarTitle}>
              {hasVideoUrl ? "Изменить URL видео" : "Добавить YouTube видео"}
            </h3>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className={styles.closeButton}
              title="Закрыть"
            >
              <MdClose size={24} />
            </button>
          </div>

          <input
            type="text"
            placeholder="https://www.youtube.com/watch?v=..."
            value={inputVideoUrl}
            onChange={(e) => setInputVideoUrl(e.target.value || "")}
            className={styles.urlInput}
          />

          <div className={styles.buttonsContainer}>
            <button onClick={applyVideo} className={styles.saveButton}>
              <MdSave size={20} className={styles.buttonIcon} />
              <span>Сохранить</span>
            </button>

            {hasVideoUrl && (
              <button onClick={removeThisVideo} className={styles.deleteButtonLarge}>
                <MdDelete size={20} className={styles.buttonIcon} />
                <span>Удалить</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoComponent;
