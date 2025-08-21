import { IconPngGIFS } from "@components/atoms/Icons/LetterCardIcons";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { useEffect, useMemo, useCallback, useState } from "react";

type GifsComponentProps = {
  id: string;
  selectedGif?: string;
  onGifSelect?: (url: string) => void;
};

const GifsComponent: React.FC<GifsComponentProps> = ({ selectedGif, onGifSelect }) => {
  const [isPopOverVisible, setPopOverVisibility] = useState(false);
  const [gifs, setGifs] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Оборачиваем создание GiphyFetch в useMemo
  const gf = useMemo(() => new GiphyFetch("PuZUD4zqFLkDgmrlnoZCLS0zRQGDwsV7"), []);

  const fetchGifs = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await gf.trending({ limit: 9 });
      setGifs(data.map((item) => item.images.fixed_height.url));
    } catch (error) {
      console.error("Error fetching GIFs:", error);
    } finally {
      setLoading(false);
    }
  }, [gf]);

  const handleSearch = useCallback(
    async (q: string) => {
      setGifs([]);
      if (!q) {
        fetchGifs();
        return;
      }

      try {
        setLoading(true);
        const { data } = await gf.search(q, {
          sort: "relevant",
          lang: "en",
          limit: 15,
          type: "gifs",
        });
        setGifs(data.map((item) => item.images.fixed_height.url));
      } catch (err) {
        console.error("Error while searching: ", err);
      } finally {
        setLoading(false);
      }
    },
    [gf, fetchGifs],
  );

  const handleChoose = (url: string) => {
    if (onGifSelect) {
      onGifSelect(url);
    }
    setPopOverVisibility(false);
  };

  const handleResetGif = () => {
    if (onGifSelect) {
      onGifSelect("");
    }
  };

  const debouncedSearch = useMemo(() => {
    let timer: ReturnType<typeof setTimeout>;
    return (query: string) => {
      clearTimeout(timer);
      timer = setTimeout(() => handleSearch(query), 500);
    };
  }, [handleSearch]);

  const closePopOver = () => {
    setPopOverVisibility(false);
    setGifs([]);
  };

  useEffect(() => {
    if (isPopOverVisible) fetchGifs();
  }, [isPopOverVisible, fetchGifs]);

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
              placeholder="Search all the GIFs"
              className="px-4 py-2 mb-4 w-full bg-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {loading ? (
              <p className="text-center">Loading...</p>
            ) : (
              <div className="grid grid-cols-3 gap-3 max-h-[400px] overflow-y-auto custom-scrollbar">
                {gifs.map((gif, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleChoose(gif)}
                    className="focus:outline-none"
                  >
                    <img
                      src={gif}
                      alt={`GIF ${index}`}
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
        {selectedGif ? (
          <div className="relative w-full h-40 group">
            <img
              src={selectedGif}
              alt="Selected GIF"
              className="object-cover w-full h-full rounded"
            />
            <button
              onClick={handleResetGif}
              className="absolute top-2 right-2 p-2 text-gray-600 bg-white rounded-full shadow-md opacity-0 transition-all group-hover:opacity-100 hover:bg-red-500 hover:text-white"
            >
              X
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-center items-center">
              <IconPngGIFS scale={1.3} />
            </div>
            <br />
            <button
              onClick={() => setPopOverVisibility(!isPopOverVisible)}
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Search for gifs with Giphy
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

export default GifsComponent;
