import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { IconPngVideo } from "@components/atoms/Icons/LetterCardIcons";
import { MdEdit, MdDelete, MdSave, MdClose } from "react-icons/md";
import styles from "./Video.module.scss";
import { changeElement } from "@/store/LetterBuilderStore/letterLayoutSlice";

interface VideoComponentProps {
  id: string;
  props?: Record<string, any>;
  layout?: Record<string, any>;
  containerId?: string;
  type?: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ 
  id, 
  props = {}, 
  layout = {}, 
  containerId = "" 
}) => {
  const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [inputVideoUrl, setInputVideoUrl] = useState(props?.videoUrl || "");
  const [videoUrl, setVideoUrl] = useState(props?.videoUrl || "");
  
  useEffect(() => {
    if (props?.videoUrl !== undefined) {
      setVideoUrl(props.videoUrl);
      setInputVideoUrl(props.videoUrl);
    }
  }, [props?.videoUrl]);
  
  useEffect(() => {
    if (!videoUrl) {
      try {
        const videoStorage = JSON.parse(localStorage.getItem('videoStorage') || '{}');
        if (videoStorage[id]) {
          setVideoUrl(videoStorage[id]);
          setInputVideoUrl(videoStorage[id]);
        }
      } catch (error) {
        console.error('Ошибка при чтении видео из localStorage:', error);
      }
    }
  }, [id, videoUrl]);

  const isValidYouTubeUrl = (url: string) => {
    if (!url) return false;
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
    return youtubeRegex.test(url);
  };

  const getYouTubeEmbedUrl = (url?: string | any) => {
    if (!url || typeof url !== 'string') return "";
    const videoIdMatch = url.match(
      /(?:https?:\/\/)?(www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]+)/
    );
    
    return videoIdMatch && videoIdMatch[2] 
      ? `https://www.youtube.com/embed/${videoIdMatch[2]}?enablejsapi=0&origin=${window.location.origin}` 
      : "";
  };

  const saveVideoToStorage = (url: string) => {
    try {
      const videoStorage = JSON.parse(localStorage.getItem('videoStorage') || '{}');
      videoStorage[id] = url;
      localStorage.setItem('videoStorage', JSON.stringify(videoStorage));
    } catch (error) {
      console.error('Ошибка при сохранении видео в localStorage:', error);
    }
  };

  const removeVideoFromStorage = () => {
    try {
      const videoStorage = JSON.parse(localStorage.getItem('videoStorage') || '{}');
      delete videoStorage[id];
      localStorage.setItem('videoStorage', JSON.stringify(videoStorage));
    } catch (error) {
      console.error('Ошибка при удалении видео из localStorage:', error);
    }
  };

  const activateThisVideo = () => {
    setIsSidebarOpen(true);
    setInputVideoUrl(videoUrl || "");
  };

  const applyVideo = () => {
    if (isValidYouTubeUrl(inputVideoUrl)) {
      setVideoUrl(inputVideoUrl);
      saveVideoToStorage(inputVideoUrl);
      
      dispatch(changeElement({
        layout,
        props: {
          ...props,
          videoUrl: inputVideoUrl
        },
        id: containerId,
        elementId: id
      }));
      
      setIsSidebarOpen(false);
    } else {
      alert("Введите корректный URL YouTube");
    }
  };

  const removeThisVideo = () => {
    setVideoUrl("");
    removeVideoFromStorage();
    
    dispatch(changeElement({
      layout,
      props: {
        ...props,
        videoUrl: ""
      },
      id: containerId,
      elementId: id
    }));
    
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
            <button
              onClick={applyVideo}
              className={styles.saveButton}
            >
              <MdSave size={20} className={styles.buttonIcon} />
              <span>Сохранить</span>
            </button>
            
            {hasVideoUrl && (
              <button
                onClick={removeThisVideo}
                className={styles.deleteButtonLarge}
              >
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