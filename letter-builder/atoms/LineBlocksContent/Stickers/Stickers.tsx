import { IconPngStickers } from "@components/atoms/Icons/LetterCardIcons";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { useEffect, useMemo, useCallback, useState } from "react";

type StickerProps = {
  id: string;
  selectedSticker?: string;
  onStickerSelect?: (url: string) => void;
};

const StickersComponent: React.FC<StickerProps> = ({ selectedSticker, onStickerSelect }) => {
  const [isPopOverVisible, setPopOverVisibility] = useState(false);
  const [stickers, setStickers] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const gf = useMemo(() => new GiphyFetch("PuZUD4zqFLkDgmrlnoZCLS0zRQGDwsV7"), []);

  const fetchStickers = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await gf.trending({ limit: 9, type: "stickers" });
      setStickers(data.map((item) => item.images.fixed_height.url));
    } catch (error) {
      console.error("Error fetching Stickers:", error);
    } finally {
      setLoading(false);
    }
  }, [gf]);

  const handleSearch = useCallback(
    async (q: string) => {
      if (!q) {
        fetchStickers();
        return;
      }

      setLoading(true);
      try {
        const { data } = await gf.search(q, {
          sort: "relevant",
          lang: "en",
          limit: 15,
          type: "stickers",
        });
        setStickers(data.map((item) => item.images.fixed_height.url));
      } catch (err) {
        console.error("Error while searching: ", err);
      } finally {
        setLoading(false);
      }
    },
    [gf, fetchStickers],
  );

  const handleChoose = (url: string) => {
    if (onStickerSelect) {
      onStickerSelect(url);
    }
    setPopOverVisibility(false);
  };

  const handleResetSticker = () => {
    if (onStickerSelect) {
      onStickerSelect("");
    }
  };

  // Удаляем дублирование debouncedSearch, оставляем только эту версию
  const debouncedSearch = useMemo(() => {
    let timer: ReturnType<typeof setTimeout>;
    return (query: string) => {
      clearTimeout(timer);
      timer = setTimeout(() => handleSearch(query), 500);
    };
  }, [handleSearch]); // Добавляем handleSearch в зависимости

  // Обновляем useEffect для правильного поведения
  useEffect(() => {
    if (isPopOverVisible) {
      fetchStickers();
    }
  }, [isPopOverVisible, fetchStickers]); // Добавляем зависимость isPopOverVisible и fetchStickers

  const closePopOver = () => {
    setPopOverVisibility(false);
    setStickers([]); // Очищаем список стикеров
  };

  return (
    <>
      {isPopOverVisible && (
        <div
          style={{ zIndex: 1 }}
          className="flex fixed inset-0 justify-center items-center bg-black/70"
        >
          <div
            draggable="false"
            className="relative bg-white shadow-2xl w-[600px] max-h-[80vh] rounded-md p-4 overflow-hidden"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-gray-500">Powered by GIPHY</span>
              <button className="text-white hover:text-red-500" onClick={closePopOver}>
                X
              </button>
            </div>

            <input
              onChange={(e) => debouncedSearch(e.target.value)}
              type="text"
              placeholder="Search all the Stickers"
              className="px-4 py-2 mb-4 w-full bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {loading ? (
              <div className="text-center text-gray-500">Loading...</div>
            ) : (
              <div className="grid grid-cols-3 gap-3 max-h-[400px] overflow-y-auto custom-scrollbar">
                {stickers.map((sticker, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleChoose(sticker)}
                    className="focus:outline-none"
                  >
                    <img
                      src={sticker}
                      alt={`Sticker ${index}`}
                      className="object-cover w-full h-40 rounded"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="relative text-gray-600">
        {selectedSticker ? (
          <div className="relative w-full h-40 group">
            <img
              src={selectedSticker}
              alt="Selected Sticker"
              className="object-cover w-full h-full rounded"
            />
            <button
              onClick={handleResetSticker}
              className="absolute top-2 right-2 p-2 text-gray-600 bg-white rounded-full shadow-md opacity-0 transition-all group-hover:opacity-100 hover:bg-red-500 hover:text-white"
            >
              X
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-center items-center">
              <IconPngStickers scale={1.3} />
            </div>
            <br />
            <button
              onClick={() => setPopOverVisibility(!isPopOverVisible)}
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Search for stickers with Giphy
            </button>
          </>
        )}
      </div>

      <style>{`
        .custom-scrollbar {
          scrollbar-width: none;
        }
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default StickersComponent;
