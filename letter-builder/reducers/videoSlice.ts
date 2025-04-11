import { createSlice, PayloadAction, Middleware, AnyAction } from "@reduxjs/toolkit";

interface VideoItem {
  id: string;
  videoUrl: string;
}

interface VideoState {
  activeVideoId: string | null;
  isSidebarOpen: boolean;
  videos: Record<string, VideoItem>;
}

const loadVideoState = (): VideoState => {
  try {
    const serializedState = localStorage.getItem("videoState");
    
    if (serializedState) {
      const parsed = JSON.parse(serializedState);
      
      if (parsed && typeof parsed === 'object') {
        return {
          activeVideoId: parsed.activeVideoId || null,
          isSidebarOpen: parsed.isSidebarOpen || false,
          videos: parsed.videos || {}
        };
      }
    }
  } catch (error) {
    console.warn("Не удалось загрузить состояние видео из localStorage:", error);
  }
  
  return {
    activeVideoId: null,
    isSidebarOpen: false,
    videos: {}
  };
};

const initialState: VideoState = loadVideoState();

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    setVideoData: (state, action: PayloadAction<{ id: string; videoUrl: string }>) => {
      const { id, videoUrl } = action.payload;
      
      if (!state.videos) {
        state.videos = {};
      }
      
      state.videos[id] = { id, videoUrl };
    },
    
    removeVideo: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      
      if (state.videos && id in state.videos) {
        delete state.videos[id];
      }
      
      if (state.activeVideoId === id) {
        state.activeVideoId = null;
      }
    },
    
    setActiveVideo: (state, action: PayloadAction<string | null>) => {
      state.activeVideoId = action.payload;
    },
    
    toggleSidebar: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },
    
    restoreVideos: (state, action: PayloadAction<Record<string, VideoItem>>) => {
      state.videos = { ...action.payload };
    },
  },
});

// Храним состояние видео для восстановления между действиями
let savedVideoState: Record<string, VideoItem> = {};

export const videoMiddleware: Middleware = (store) => (next) => (action: AnyAction) => {
  // Получаем текущее состояние до выполнения действия
  const currentState = store.getState();
  const currentVideoState = currentState.video || { videos: {} };
  
  // Если у нас есть видео, сохраняем их в замыкании middleware
  if (currentVideoState.videos && Object.keys(currentVideoState.videos).length > 0) {
    savedVideoState = { ...currentVideoState.videos };
  }
  
  // Выполняем действие
  const result = next(action);
  
  // После выполнения действия проверяем состояние видео
  const newState = store.getState();
  const newVideoState = newState.video || { videos: {} };
  
  // Если видео исчезли, но у нас есть сохраненные - восстанавливаем их
  if (
    (!newVideoState.videos || Object.keys(newVideoState.videos).length === 0) && 
    Object.keys(savedVideoState).length > 0
  ) {
    // Небольшая задержка для восстановления, чтобы дать другим редьюсерам завершить работу
    setTimeout(() => {
      store.dispatch(videoSlice.actions.restoreVideos(savedVideoState));
    }, 0);
  }
  
  // Сохраняем состояние видео в localStorage при изменениях
  if (action.type.startsWith("video/")) {
    try {
      const updatedState = store.getState();
      if (updatedState && updatedState.video) {
        const videoStateToSave = JSON.stringify(updatedState.video);
        localStorage.setItem("videoState", videoStateToSave);
      }
    } catch (error) {
      console.warn("Не удалось сохранить состояние видео в localStorage:", error);
    }
  }
  
  return result;
};

export const { 
  setVideoData, 
  removeVideo, 
  setActiveVideo, 
  toggleSidebar, 
  restoreVideos 
} = videoSlice.actions;

export default videoSlice.reducer;