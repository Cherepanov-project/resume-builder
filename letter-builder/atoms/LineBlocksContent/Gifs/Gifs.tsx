import { IconPngGIFS } from "@components/atoms/Icons/LetterCardIcons";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { useEffect, useMemo, useState } from "react";

const GifsComponent = () => {
  const [isPopOverVisible, setPopOverVisibility] = useState(false);
  const [gifs, setGifs] = useState<string[]>([]);
  const [currGif, setCurrGif] = useState<string>("");

  const gf = new GiphyFetch("PuZUD4zqFLkDgmrlnoZCLS0zRQGDwsV7");

  const fetchGifs = async () => {
    try {
      const { data } = await gf.trending({ limit: 9 });
      setGifs(data.map((item) => item.images.fixed_height.url));
    } catch (error) {
      console.error("Error fetching GIFs:", error);
    }
  };

  const handleSearch = async (q: string) => {
    if (!q) {
      fetchGifs();
      return;
    }

    try {
      const { data } = await gf.search(q, {
        sort: "relevant",
        lang: "en",
        limit: 15,
        type: "gifs",
      });
      setGifs(data.map((item) => item.images.fixed_height.url));
    } catch (err) {
      console.error("Error while searching: ", err);
    }
  };

  const handleChoose = (url: string) => {
    setPopOverVisibility(false);
    setCurrGif(url);
  };

  const handleResetGif = () => {
    setCurrGif("");
  };

  const debouncedSearch = useMemo(() => {
    let timer: ReturnType<typeof setTimeout>;
    return (query: string) => {
      clearTimeout(timer);
      timer = setTimeout(() => handleSearch(query), 500);
    };
  }, []);

  useEffect(() => {
    fetchGifs();
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
                onClick={() => setPopOverVisibility(false)}
              >
                X
              </button>
            </div>

            <input
              onChange={(e) => debouncedSearch(e.target.value)}
              type="text"
              placeholder="Search all the GIFs"
              className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

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
                    className="w-full h-40 object-cover rounded"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="relative text-gray-600">
        {currGif ? (
          <div className="relative group w-full h-40">
            <img src={currGif} alt="Selected GIF" className="w-full h-full object-cover rounded" />
            <button
              onClick={handleResetGif}
              className="absolute top-2 right-2 bg-white text-gray-600 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 hover:bg-red-500 hover:text-white transition-all"
            >
              X
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-center">
              <IconPngGIFS scale={1.3} />
            </div>
            <br />
            <button
              onClick={() => setPopOverVisibility(!isPopOverVisible)}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Search for gifs with Giphy
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

export default GifsComponent;
