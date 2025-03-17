import { useAppDispatch, useAppSelector } from "@/store/store";
import { addIcon, updateIcon, deleteIcon } from "../../../reducers/iconsSlice";
import { useState } from "react";
import { TextField, Switch } from "@mui/material";

const IconsComponent = () => {
  const dispatch = useAppDispatch();
  const icons = useAppSelector((state) => state.icons.icons);
  const [selectedIconId, setSelectedIconId] = useState<string | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [hideButtons, setHideButtons] = useState(false);

  const selectedIcon = icons.find((icon) => icon.id === selectedIconId);

  return (
    <div className="text-[#515659] flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-4">
        {icons.map((icon) => (
          <div
            key={icon.id}
            className="cursor-pointer flex flex-col items-center"
            onClick={() => {
              setSelectedIconId(icon.id);
              setShowSettings(false);
            }}
          >
            <img src={icon.url} alt={icon.altText || "Иконка"} width={50} height={50} />
            <div style={{ color: icon.altText ? "black" : "#515659", fontSize: "8px" }}>
              {icon.altText || icon.text}
            </div>
          </div>
        ))}
      </div>

      {!hideButtons && (
        <>
          <button
            onClick={() => dispatch(addIcon())}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add new icon
          </button>

          {selectedIcon && (
            <div className="mt-4 p-4 border border-gray-300 w-full max-w-xs">
              <div className="flex justify-between items-center">
                <button
                  onClick={() => {
                    dispatch(deleteIcon(selectedIcon.id));
                    setSelectedIconId(null);
                  }}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete Icon
                </button>
                <Switch checked={showSettings} onChange={() => setShowSettings(!showSettings)} />
              </div>

              {showSettings && (
                <div className="mt-2">
                  <TextField
                    type="text"
                    label="Image URL"
                    className="border p-1 w-full mt-2"
                    value={selectedIcon.url}
                    style={{ marginBottom: "8px" }}
                    onChange={(e) =>
                      dispatch(updateIcon({ id: selectedIcon.id, url: e.target.value }))
                    }
                  />
                  <TextField
                    type="text"
                    label="Alternative Text"
                    className="border p-1 w-full mt-2"
                    value={selectedIcon.altText || ""}
                    style={{ marginBottom: "8px" }}
                    onChange={(e) =>
                      dispatch(updateIcon({ id: selectedIcon.id, altText: e.target.value }))
                    }
                  />
                  <TextField
                    type="text"
                    label="Icon Text"
                    className="border p-1 w-full mt-2"
                    value={selectedIcon.text}
                    style={{ marginBottom: "8px" }}
                    onChange={(e) =>
                      dispatch(updateIcon({ id: selectedIcon.id, text: e.target.value }))
                    }
                  />
                  <TextField
                    type="text"
                    label="URL (optional)"
                    className="border p-1 w-full mt-2"
                    value={selectedIcon.link || ""}
                    style={{ marginBottom: "8px" }}
                    onChange={(e) =>
                      dispatch(updateIcon({ id: selectedIcon.id, link: e.target.value }))
                    }
                  />
                </div>
              )}
            </div>
          )}
          <button
            onClick={() => setHideButtons(true)}
            className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
          >
            Скрыть редактор
          </button>
        </>
      )}
    </div>
  );
};

export default IconsComponent;
