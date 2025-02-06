import { IconPngStickers } from "@components/atoms/Icons/LetterCardIcons";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { useEffect, useMemo, useState } from "react";

const StickersComponent = () => {
  const [isPopOverVisible, setPopOverVisibility] = useState(false);
  const [stickers, setStickers] = useState<string[]>([]);
  const [currSticker, setCurrSticker] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const gf = new GiphyFetch("PuZUD4zqFLkDgmrlnoZCLS0zRQGDwsV7");

  const fetchStickers = async () => {
    setLoading(true);
    try {
      const { data } = await gf.trending({ limit: 9, type: "stickers" });
      setStickers(data.map((item) => item.images.fixed_height.url));
    } catch (error) {
      console.error("Error fetching Stickers:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (q: string) => {
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
  };

  const handleChoose = (url: string) => {
    setPopOverVisibility(false);
    setCurrSticker(url);
  };

  const handleResetSticker = () => {
    setCurrSticker("");
  };

  const debouncedSearch = useMemo(() => {
    let timer: ReturnType<typeof setTimeout>;
    return (query: string) => {
      clearTimeout(timer);
      timer = setTimeout(() => handleSearch(query), 500);
    };
  }, []);

  useEffect(() => {
    fetchStickers();
  }, []);

  return (
    <>
      {isPopOverVisible && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/70">
          <div
            draggable="false"
            className="relative bg-white shadow-2xl w-[600px] max-h-[80vh] rounded-md p-4 overflow-hidden"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-500 font-semibold">Powered by GIPHY</span>
              <button
                className="text-white hover:text-red-500"
                onClick={() => {
                  setPopOverVisibility(false);
                  setStickers([]); // Очищаем список стикеров
                }}
              >
                X
              </button>
            </div>

            <input
              onChange={(e) => debouncedSearch(e.target.value)}
              type="text"
              placeholder="Search all the Stickers"
              className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                      className="w-full h-40 object-cover rounded"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="relative text-gray-600">
        {currSticker ? (
          <div className="relative group w-full h-40">
            <img
              src={currSticker}
              alt="Selected Sticker"
              className="w-full h-full object-cover rounded"
            />
            <button
              onClick={handleResetSticker}
              className="absolute top-2 right-2 bg-white text-gray-600 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 hover:bg-red-500 hover:text-white transition-all"
            >
              X
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-center">
              <IconPngStickers scale={1.3} />
            </div>
            <br />
            <button
              onClick={() => setPopOverVisibility(!isPopOverVisible)}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Search for stickers with Giphy
            </button>
          </>
        )}
      </div>

      <style jsx>{`
        /* Скрытие скроллбара */
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
