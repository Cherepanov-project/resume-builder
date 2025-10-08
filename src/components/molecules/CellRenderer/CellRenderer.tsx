import { useAppDispatch, useTypedSelector } from "@/hooks/cvTemplateHooks";
import { setSelectedGif } from "@/store/LetterBuilderStore/gifSelectionSlice";
import { setSelectedSticker } from "@/store/LetterBuilderStore/stickerSelectionSlice";
import { setSelectedVideo } from "@/store/LetterBuilderStore/videoSelectionSlice";
import GifsComponent from "../../../../letter-builder/atoms/LineBlocksContent/Gifs/Gifs";
import StickersComponent from "../../../../letter-builder/atoms/LineBlocksContent/Stickers";
import TimerComponent from "../../../../letter-builder/atoms/LineBlocksContent/Timer";
import VideoComponent from "../../../../letter-builder/atoms/LineBlocksContent/Video";
import { ImageEmailView } from "../../../../letter-builder/atoms/LineBlocksContent/Images/Image";
import * as componentMap from "../../../../letter-builder/atoms/LineBlocksContent";

interface CellRendererProps {
  elementName: string;
  id: string;
  colspan: number;
  isEmail?: boolean;
}
const getYouTubeThumbnail = (url: string): { thumbnail: string; link: string } | null => {
  const match = url.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]+)/,
  );
  if (!match || !match[1]) return null;

  const id = match[1];
  return {
    thumbnail: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
    link: `https://www.youtube.com/watch?v=${id}`,
  };
};

const cellStyle = (colspan: number): React.CSSProperties => ({
  width: `${colspan}%`,
  padding: "10px",
  border: "1px solid #ddd",
  textAlign: "center",
});

const CellRenderer: React.FC<CellRendererProps> = ({ elementName, id, colspan, isEmail }) => {
  const dispatch = useAppDispatch();
  const selectedGifs = useTypedSelector((state) => state.gifSelection.selectedGifs) || {};
  const selectedStickers =
    useTypedSelector((state) => state.stickerSelection.selectedStickers) || {};
  const selectedImgs = useTypedSelector((state) => state.images.images) || {};
  const selectedVideos = useTypedSelector((state) => state.videoSelection.selectedVideos) || {};

  const cellContent = () => {
    switch (elementName) {
      case "GifsComponent": {
        const selectedGif = selectedGifs[id];
        return (
          <GifsComponent
            id={id}
            selectedGif={selectedGif}
            onGifSelect={(url: string) => dispatch(setSelectedGif({ elementId: id, url }))}
          />
        );
      }

      case "StickersComponent": {
        const selectedSticker = selectedStickers[id];
        return (
          <StickersComponent
            id={id}
            selectedSticker={selectedSticker}
            onStickerSelect={(url: string) => dispatch(setSelectedSticker({ elementId: id, url }))}
          />
        );
      }

      case "TimerComponent": {
        return <TimerComponent id={id} />;
      }

      case "Images": {
        return <ImageEmailView images={selectedImgs} />;
      }

      case "Video":
      case "VideoComponent": {
        const videoUrl = selectedVideos[id];
        const videoData = videoUrl ? getYouTubeThumbnail(videoUrl) : null;
        if (videoData) {
          return isEmail ? (
            <a href={videoData.link} target="_blank" rel="noreferrer">
              <img
                src={videoData.thumbnail}
                alt="YouTube Video Preview"
                style={{ maxWidth: "100%" }}
              />
            </a>
          ) : (
            <VideoComponent
              id={id}
              videoUrl={videoUrl}
              onVideoSelect={(url: string) => dispatch(setSelectedVideo({ elementId: id, url }))}
            />
          );
        }
        return null;
      }

      default: {
        const Component = componentMap[elementName as keyof typeof componentMap];
        return Component ? (
          <Component
            selectedGif={selectedGifs[id]}
            selectedSticker={selectedStickers[id]}
            id={id}
            onGifSelect={(url: string) => dispatch(setSelectedGif({ elementId: id, url }))}
            onStickerSelect={(url: string) => dispatch(setSelectedSticker({ elementId: id, url }))}
          />
        ) : (
          elementName
        );
      }
    }
  };

  return (
    <td key={id} colSpan={colspan} style={cellStyle(colspan)}>
      {cellContent()}
    </td>
  );
};

export default CellRenderer;
