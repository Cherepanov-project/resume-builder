import {
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  TextField,
  Button,
} from "@mui/material";
import Item from "@atoms/StyledPaperItem";
import { nanoid } from "nanoid";
import { useInput } from "@/hooks/useSpecificStylesFormHook";

const commonFieldSx = {
  "& .MuiOutlinedInput-root": {
    color: "#999",
    backgroundColor: "#333",
    "& fieldset": {
      borderColor: "#999",
    },
    "&:hover fieldset": {
      borderColor: "#aaa",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#999",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#999",
  },
  "& .Mui-focused.MuiInputLabel-root": {
    color: "#aaa",
  },
};

type AccordionData = Array<[string, string]>;

const ElementSpecificSettingsForm = () => {
  const newImp = useInput("");
  const type = newImp.type;

  return (
    <form>
      <Stack>
        <Item sx={{ backgroundColor: "#444" }}>
          <FormControl sx={{ width: "220px", ...commonFieldSx }}>
            <InputLabel id="type-label" sx={commonFieldSx["& .MuiInputLabel-root"]}>
              Choose element type
            </InputLabel>
            <Select
              labelId="type-label"
              value={newImp.value}
              onChange={newImp.hendlerType}
              input={<OutlinedInput label="Choose element type" />}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: "#444",
                    color: "#999",
                  },
                },
              }}
            >
              {newImp.settingsOptionsValues.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Item>

        {newImp.simpleForme.includes(type) ? (
          <Item sx={{ backgroundColor: "#444" }}>
            <FormControl>
              <TextField
                sx={commonFieldSx}
                label="Enter target text:"
                value={newImp.text}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                  newImp.onChangeAreaText("text", e);
                }}
              />
            </FormControl>
          </Item>
        ) : null}

        {type === "Accordion" ? (
          <Item sx={{ backgroundColor: "#444" }}>
            <FormControl>
              {newImp.accordion.map((item: string[], index: number) => (
                <div key={index} style={{ marginBottom: "20px" }}>
                  <TextField
                    sx={commonFieldSx}
                    style={{ marginBottom: "15px" }}
                    label={`Enter target accordion ${index + 1} title:`}
                    value={item[0]}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const updatedAccordion = [...newImp.accordion];
                      updatedAccordion[index] = [e.target.value, updatedAccordion[index][1]];
                      newImp.setAccordion(updatedAccordion);

                      newImp.onChangeaccordion(updatedAccordion);
                    }}
                  />
                  <TextField
                    sx={commonFieldSx}
                    style={{ marginBottom: "15px" }}
                    label={`Enter target accordion ${index + 1} description:`}
                    value={item[1]}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const updatedAccordion = [...newImp.accordion];
                      updatedAccordion[index] = [updatedAccordion[index][0], e.target.value];
                      newImp.setAccordion(updatedAccordion);

                      newImp.onChangeaccordion(updatedAccordion);
                    }}
                  />
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ textTransform: "none" }}
                    onClick={() => {
                      const updatedAccordion = newImp.accordion.filter((_, i) => i !== index);
                      newImp.setAccordion(updatedAccordion);
                      newImp.onChangeaccordion(updatedAccordion);
                    }}
                  >
                    Delete
                  </Button>
                </div>
              ))}
              <Button
                style={{ background: "#222", color: "#999" }}
                sx={{ textTransform: "none" }}
                onClick={(e: { preventDefault: () => void }) => {
                  e.preventDefault();
                  const updatedAccordion: AccordionData = [...newImp.accordion, ["", ""]];
                  newImp.setAccordion(updatedAccordion);
                  newImp.onChangeaccordion(updatedAccordion);
                }}
              >
                Add Item
              </Button>
            </FormControl>
          </Item>
        ) : null}

        {newImp.sliderForme.includes(type) ? (
          <Item sx={{ backgroundColor: "#444" }}>
            <FormControl>
              {newImp.selectList.map((item, index: number) => (
                <div key={index}>
                  <TextField
                    sx={commonFieldSx}
                    style={{ marginBottom: "15px" }}
                    label={`Enter ${type.toLowerCase()} ${type === "Slider" ? "image url" : "item"} ${
                      index + 1
                    }:`}
                    value={item.value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const updatedList = [...newImp.selectList];
                      updatedList[index] = { id: nanoid(), value: e.target.value };
                      newImp.setSelectList(updatedList);

                      newImp.onChangeSelectList(type, updatedList);
                    }}
                  />
                </div>
              ))}
              <div>
                <button
                  style={{ background: "#222", color: "#999" }}
                  onClick={(e: { preventDefault: () => void }) => {
                    e.preventDefault();
                    const updatedList = [...newImp.selectList, { id: nanoid(), value: "Text" }];
                    newImp.setSelectList(updatedList);
                    newImp.onChangeSelectList(type, updatedList);
                  }}
                >
                  Add Item
                </button>
                <button
                  style={{ background: "#222", color: "#999" }}
                  onClick={(e: { preventDefault: () => void }) => {
                    e.preventDefault();
                    const updatedList = [...newImp.selectList];
                    if (updatedList.length > 1) {
                      updatedList.pop();
                    }
                    newImp.setSelectList(updatedList);
                    newImp.onChangeSelectList(type, updatedList);
                  }}
                >
                  Delete Item
                </button>
              </div>
            </FormControl>
          </Item>
        ) : null}

        {type === "CardItem" ? (
          <>
            <Item sx={{ backgroundColor: "#444" }}>
              <FormControl>
                <TextField
                  sx={commonFieldSx}
                  label="Enter target title:"
                  value={newImp.title}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                    newImp.onChangeAreaText("title", e);
                  }}
                />
              </FormControl>
            </Item>
            <Item sx={{ backgroundColor: "#444" }}>
              <FormControl>
                <TextField
                  sx={commonFieldSx}
                  label="Enter target description:"
                  value={newImp.description}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                    newImp.onChangeAreaText("description", e);
                  }}
                />
              </FormControl>
            </Item>
            <Item sx={{ backgroundColor: "#444" }}>
              <FormControl>
                <TextField
                  sx={commonFieldSx}
                  label="Enter target button text:"
                  value={newImp.buttonText}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                    newImp.onChangeAreaText("buttonText", e);
                  }}
                />
              </FormControl>
            </Item>
          </>
        ) : null}

        {newImp.complixForme.includes(type) ? (
          <Item sx={{ backgroundColor: "#444" }}>
            <FormControl>
              <TextField
                sx={commonFieldSx}
                label="Enter target URL:"
                value={newImp.url}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                  newImp.onChangeAreaText("url", e);
                }}
              />
            </FormControl>
          </Item>
        ) : null}

        {newImp.moreUrl.includes(type) ? (
          <Item sx={{ backgroundColor: "#444" }}>
            <FormControl>
              <TextField
                sx={commonFieldSx}
                label="Enter target image URL:"
                value={newImp.imgUrl}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                  newImp.onChangeAreaText("imgUrl", e);
                }}
              />
            </FormControl>
          </Item>
        ) : null}
      </Stack>
    </form>
  );
};

export default ElementSpecificSettingsForm;
