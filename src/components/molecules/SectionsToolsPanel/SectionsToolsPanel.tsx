import { Box, ToggleButtonGroup, ToggleButton, Divider, Button, useTheme } from "@mui/material";
import MemoizedElementSettings from "../ElementSpecificSettings";
import SectionSpecificSettings from "../SectionSpecificSettings";
import { useEffect, useState, useCallback } from "react";
import { T_BlockElement, T_SectionElements } from "@/types/landingBuilder";
import { handleSettingsMenu, setLayoutDate } from "@/store/landingBuilder/sectionsManagerSlice";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "@/hooks/cvTemplateHooks";
import { editSection, postNewSection } from "@/store/sectionCreator/sectionSlice";
import { nanoid } from "nanoid";

interface Props {
  setError: (message: string) => void;
  setSeverity: (type: "success" | "error" | "warning") => void;
}

const SectionsToolsPanel: React.FC<Props> = ({ setError, setSeverity }) => {
  const theme = useTheme();

  const [name, setName] = useState("");
  const [type, setType] = useState("Headers");
  const [isEditing, setIsEditing] = useState(false);
  const [toggleMenu, setToggleMenu] = useState<unknown>("SECTION_SETTINGS");

  const dispatch = useDispatch();
  const layoutDate = useTypedSelector((state) => state.sectionsManager.layoutDate);
  const editItem = useTypedSelector((state) => state.sectionsManager.editItem);
  const rows = Object.keys(layoutDate).length;

  const resetForm = useCallback(() => {
    setName("");
    setType("Headers");
    setToggleMenu("SECTION_SETTINGS");
    dispatch(
      setLayoutDate({
        1: [
          {
            name: "",
            type: "",
            source: "atoms",
            props: {
              text: "",
              key: "",
              wrapperStyle: { display: "block" },
              textStyle: { display: "block" },
              style: { "": "" },
            },
            layout: { i: nanoid(), x: 0, y: 0, w: 1, h: 1 },
          },
        ],
      }),
    );
  }, [dispatch]);

  useEffect(() => {
    if (editItem) {
      setIsEditing(true);
      setName(editItem.title?.toString() || "");
      setType(editItem.type || "Headers");

      if (editItem.children) {
        const initialLayoutData: Record<number, T_BlockElement[]> = {};

        editItem.children.forEach((child) => {
          const row = child.layout?.y + 1 || 1;

          if (!initialLayoutData[row]) {
            initialLayoutData[row] = [];
          }

          initialLayoutData[row].push({
            name: child.name || "",
            type: child.type || "",
            source: child.source || "atoms",
            props: child.props || {},
            layout: {
              i: child.layout?.i || `block-${child.name}-${Date.now()}`,
              x: child.layout?.x || 0,
              y: child.layout?.y || 0,
              w: child.layout?.w || 1,
              h: child.layout?.h || 1,
            },
          });
        });
        dispatch(setLayoutDate(initialLayoutData));
      }
    } else {
      setIsEditing(false);
    }
    return () => resetForm();
  }, [editItem, dispatch, resetForm]);

  const submitSection = () => {
    const arr: T_BlockElement[] = [];
    const data = Object.values(layoutDate);
    for (let i = 0; i < data.length; i++) {
      arr.push(...data[i]);
    }

    const filteredArr = arr.filter((el) => el.name);

    const elements = filteredArr.map((el) => {
      return {
        name: el.name,
        source: "atoms",
        layout: {
          i: String(el.layout.i),
          x: calcX(Number(String(el.layout.i).slice(0, 1)), Number(String(el.layout.i).slice(1))),
          y: calcY(Number(String(el.layout.i).slice(0, 1))),
          w: el.layout.w,
          h: el.layout.h,
        },
        props: el.props,
      };
    });

    const section: T_SectionElements = {
      name: "ContainerDIV",
      title: name,
      type,
      columns: 6,
      source: "atoms",
      children: elements,
      layout: {
        i: editItem?.layout?.i || "",
        x: editItem?.layout?.x || 0,
        y: editItem?.layout?.y || 0,
        w: 6,
        h: isEditing ? editItem?.layout?.h || calcSectionH() + 1 : calcSectionH() + 1,
      },
    };

    if (name.trim()) {
      if (isEditing && editItem) {
        dispatch(
          editSection({
            oldItem: editItem,
            newItem: section,
          }),
        );
        setSeverity("success");
        setError(`Section ${name} was updated`);
      } else {
        dispatch(
          postNewSection({
            moduleName: type,
            section,
          }),
        );
        setSeverity("success");
        setError(`Section ${name} was added to ${type}`);

        dispatch(
          setLayoutDate({
            1: [
              {
                name: "",
                type: "",
                source: "atoms",
                props: {
                  text: "",
                  key: "",
                  wrapperStyle: { display: "block" },
                  textStyle: { display: "block" },
                  style: { "": "" },
                },
                layout: { i: nanoid(), x: 0, y: 0, w: 1, h: 1 },
              },
            ],
          }),
        );
        setName("");
        dispatch(handleSettingsMenu({ type: "UPDATE_ID", value: "11" }));
      }
    } else {
      setSeverity("error");
      setError(`Section is missing a name`);
    }
  };

  const calcX = (row: number, col: number) => {
    if (col !== 1) {
      let sum = 0;
      for (let i = 1; i < col; i++) {
        sum += layoutDate[row][i - 1].layout.w;
      }
      return sum;
    } else {
      return 0;
    }
  };

  const calcY = (row: number) => {
    if (row > 1) {
      let x = 1;
      console.log(layoutDate, row);
      for (let i = 0; i < layoutDate[row - 1].length; i++) {
        if (layoutDate[row - 1][i].layout.h > x) {
          x = layoutDate[row - 1][i].layout.h;
        }
      }
      return x;
    } else {
      return 0;
    }
  };
  const calcSectionH = () => {
    let h = 0;
    for (let i = 1; i <= rows; i++) {
      if (!layoutDate[i]) continue;
      let max = 1;
      for (let n = 0; n < layoutDate[i].length; n++) {
        if (layoutDate[i][n]?.layout?.h > max) {
          max = layoutDate[i][n].layout.h;
        }
      }
      h += max;
    }
    return h;
  };

  const handleToggleMenu = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLButtonElement;
    switch (target.innerText) {
      case "ELEMENTS SETTINGS":
        return setToggleMenu("ELEMENTS_SETTINGS");
      default:
        return setToggleMenu("SECTION_SETTINGS");
    }
  };
  return (
    <Box sx={{ width: "300px", background: theme.custom.colorMetalGray, color: "#aaa" }}>
      <h2>{isEditing ? "Edit Section" : "Create Section"}</h2>

      <ToggleButtonGroup
        color={theme.custom.defaultColor}
        size="small"
        exclusive
        aria-label="settings-category"
        sx={{
          "& .MuiToggleButton-root": {
            backgroundColor: theme.custom.colorMetalGray,
            color: theme.custom.colorWhiteGray,
            border: "1px solid #ccc",
            "&:hover": {
              backgroundColor: theme.custom.colorGray,
            },
          },
        }}
      >
        <ToggleButton value="section" aria-label="settings-section" onClick={handleToggleMenu}>
          Section settings
        </ToggleButton>
        <ToggleButton
          value="element-settings"
          aria-label="settings-segment"
          onClick={handleToggleMenu}
        >
          Elements settings
        </ToggleButton>
      </ToggleButtonGroup>
      {toggleMenu === "SECTION_SETTINGS" ? (
        <SectionSpecificSettings
          type={type}
          setType={setType}
          name={name}
          setName={setName}
          isEditing={isEditing}
        />
      ) : null}
      {toggleMenu === "ELEMENTS_SETTINGS" ? <MemoizedElementSettings /> : null}

      <Divider />
      <Button
        type="button"
        variant="outlined"
        sx={{
          width: "70%",
          mt: "10px",
          color: theme.custom.colorWhiteGray,
          borderColor: theme.custom.colorMetalGray,
          backgroundColor: theme.custom.colorGray,
          "&:hover": {
            borderColor: theme.custom.colorAlmostBlack,
            backgroundColor: "#555",
          },
          "&.Mui-focused": {
            borderColor: theme.custom.colorMetalGray,
          },
        }}
        onClick={() => submitSection()}
      >
        {isEditing ? "Update section" : "Save section"}
      </Button>
    </Box>
  );
};

export default SectionsToolsPanel;
