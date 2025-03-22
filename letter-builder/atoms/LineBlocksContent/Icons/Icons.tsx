import { useAppDispatch, useAppSelector } from "@/store/store";
import { addIcon, updateIcon, deleteIcon, addIconFromLibrary } from "../../../reducers/iconsSlice";
import { useState, useEffect, useMemo } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io5";

import styles from "./Icons.module.scss";

interface IconComponentProps {
  id: string;
  layout: any;
  parentLayout: any;
  elementId: string;
}

interface Icon {
  id: string;
  elementId: string;
  iconComponent?: string;
  iconLibrary?: string;
  iconName?: string;
  text?: string;
  url?: string;
  altText?: string;
  link?: string;
}

interface IconLibrary {
  id: string;
  name: string;
  library: Record<string, React.ComponentType<{ size?: number }>>;
}

interface IconInfo {
  name: string;
  component: React.ComponentType<{ size?: number }>;
}

declare global {
  interface Window {
    ElementToolsPanel?: React.ComponentType<{
      layout: any;
      id: string;
      elementId: string;
      parentLayout: any;
      setDraggingInnerItem: React.Dispatch<React.SetStateAction<boolean>>;
      elClass: string;
      elementsIds: string[];
    }>;
  }
}

const IconsComponent: React.FC<IconComponentProps> = ({ id, layout, parentLayout, elementId }) => {
  const dispatch = useAppDispatch();
  const allIcons = useAppSelector((state) => state.icons.icons) as Icon[];
  
  const icons = useMemo(() => {
    return allIcons.filter(icon => icon.elementId === elementId);
  }, [allIcons, elementId]);
  
  const [selectedIconId, setSelectedIconId] = useState<string | null>(null);
  const [isPopOverVisible, setPopOverVisibility] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredIcons, setFilteredIcons] = useState<IconInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentCategory, setCurrentCategory] = useState<string>("fa");
  const [, setDraggingInnerItem] = useState<boolean>(false);

  // Определяем, есть ли уже иконки для текущего элемента
  const hasIcons = icons.length > 0;

  const iconLibraries: IconLibrary[] = [
    { id: "fa", name: "Font Awesome", library: FaIcons },
    { id: "ai", name: "Ant Design", library: AiIcons },
    { id: "bs", name: "Bootstrap", library: BsIcons },
    { id: "md", name: "Material Design", library: MdIcons },
    { id: "io", name: "Ionicons", library: IoIcons }
  ];

  const fetchIcons = async (libraryId: string = currentCategory): Promise<void> => {
    setLoading(true);
    const currentLibrary = iconLibraries.find(lib => lib.id === libraryId)?.library || {};
    
    const iconList: IconInfo[] = Object.keys(currentLibrary)
      .filter(key => typeof currentLibrary[key] === 'function')
      .map(key => ({
        name: key,
        component: currentLibrary[key] as React.ComponentType<{ size?: number }>
      }));
    
    const limitedIcons = iconList.slice(0, 100);
    
    setFilteredIcons(limitedIcons);
    setLoading(false);
  };

  const handleSearch = async (query: string): Promise<void> => {
    setLoading(true);
    setFilteredIcons([]);
    
    const currentLibrary = iconLibraries.find(lib => lib.id === currentCategory)?.library || {};
    
    if (!query) {
      fetchIcons();
      return;
    }
    
    const iconList: IconInfo[] = Object.keys(currentLibrary)
      .filter(key => 
        typeof currentLibrary[key] === 'function' && 
        key.toLowerCase().includes(query.toLowerCase())
      )
      .map(key => ({
        name: key,
        component: currentLibrary[key] as React.ComponentType<{ size?: number }>
      }));
    
    const limitedResults = iconList.slice(0, 100);
    
    setFilteredIcons(limitedResults);
    setLoading(false);
  };

  const handleChooseIcon = (iconName: string): void => {
    const library = iconLibraries.find(lib => lib.id === currentCategory)?.library;
    
    if (library && library[iconName]) {
      const iconComponent = `${currentCategory}:${iconName}`;
      
      if (selectedIconId) {
        dispatch(updateIcon({
          id: selectedIconId,
          elementId: elementId, 
          iconComponent: iconComponent,
          iconLibrary: currentCategory,
          iconName: iconName,
          text: ""
        }));
      } else {
        dispatch(addIconFromLibrary({
          elementId: elementId, 
          iconComponent: iconComponent,
          iconLibrary: currentCategory,
          iconName: iconName,
          text: ""
        }));
      }
      
      setPopOverVisibility(false);
    }
  };

  const debouncedSearch = useMemo(() => {
    let timer: ReturnType<typeof setTimeout>;
    return (query: string) => {
      clearTimeout(timer);
      timer = setTimeout(() => handleSearch(query), 300);
    };
  }, [currentCategory]);

  const renderIcon = (icon: Icon, size: number = 50): React.ReactNode => {
    try {
      if (icon.iconComponent) {
        const [libraryId, iconName] = icon.iconComponent.split(':');
        const libraryObj = iconLibraries.find(lib => lib.id === libraryId);
        
        if (libraryObj && libraryObj.library && libraryObj.library[iconName]) {
          const IconComponent = libraryObj.library[iconName];
          return <IconComponent size={size} />;
        }
      }
      
      if (icon.url) {
        return <img src={icon.url} alt={icon.altText || icon.text || "Иконка"} width={size} height={size} />;
      }
    } catch (error) {
      console.error("Ошибка при отображении иконки:", error);
    }
    
    return <MdIcons.MdOutlineImage size={size} style={{ opacity: 0.5 }} />;
  };

  const closePopOver = (): void => {
    setPopOverVisibility(false);
    setFilteredIcons([]);
  };

  useEffect(() => {
    if (isPopOverVisible) {
      fetchIcons();
    }
  }, [isPopOverVisible, currentCategory]);

  useEffect(() => {
    setSelectedIconId(null);
  }, [elementId]);

  const elementsIds = useMemo(() => icons.map(icon => icon.id), [icons]);

  const handleAddIcon = () => {
    dispatch(addIcon({ elementId }));
  };

  return (
    <div className={styles.iconsWrapper}>
      {typeof window !== 'undefined' && window.ElementToolsPanel && (
        <window.ElementToolsPanel
          layout={layout}
          id={id}
          elementId={elementId}
          parentLayout={parentLayout}
          setDraggingInnerItem={setDraggingInnerItem}
          elClass="drag-handle"
          elementsIds={elementsIds}
        />
      )}
      
      {isPopOverVisible && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <span className="font-semibold text-gray-500">Выбор иконки</span>
              <button className="text-xl text-gray-100 hover:text-red-500" onClick={closePopOver}>×</button>
            </div>

            <div className={styles.categoryTabs}>
              {iconLibraries.map((lib) => (
                <button
                  key={lib.id}
                  onClick={() => {
                    setCurrentCategory(lib.id);
                    setSearchTerm("");
                  }}
                  className={`${styles.categoryTab} ${currentCategory === lib.id ? styles.active : ''}`}
                >
                  {lib.name}
                </button>
              ))}
            </div>

            <TextField
              fullWidth
              placeholder="Поиск иконок..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                debouncedSearch(e.target.value);
              }}
              className="mb-4"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />

            {loading ? (
              <p className="py-8 text-center">Загрузка...</p>
            ) : (
              <div className={`${styles.iconsGrid} ${styles.customScrollbar}`}>
                {filteredIcons.map((icon, index) => {
                  const IconComponent = icon.component;
                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleChooseIcon(icon.name)}
                      className={styles.iconButton}
                    >
                      <IconComponent size={24} />
                    </button>
                  );
                })}
              </div>
            )}

            {filteredIcons.length === 0 && !loading && (
              <p className="py-8 text-center text-gray-500">
                {searchTerm ? "Иконки не найдены. Попробуйте другой запрос." : "Нет доступных иконок."}
              </p>
            )}
          </div>
        </div>
      )}

      <div className="text-[#515659] flex flex-col items-center">
        <div className={styles.iconsFlex}>
          {icons.map((icon) => (
            <div
              key={icon.id}
              className={`${styles.iconItem} ${selectedIconId === icon.id ? styles.selected : ''}`}
              onClick={() => setSelectedIconId(icon.id)}
            >
              <div className={styles.iconContainer}>
                {renderIcon(icon, 30)}
              </div>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(deleteIcon(icon.id));
                  if (selectedIconId === icon.id) {
                    setSelectedIconId(null);
                  }
                }}
                className={styles.deleteButton}
              >
                ×
              </button>
            </div>
          ))}
          
          {/* Показываем кнопку добавления только если нет иконок */}
          {!hasIcons && (
            <div
              className={styles.addButton}
              onClick={() => setPopOverVisibility(true)}
            >
              <MdIcons.MdAdd size={30} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IconsComponent;