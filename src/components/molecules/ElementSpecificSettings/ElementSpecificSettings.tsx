import { memo, useState } from "react";

import { Accordion, AccordionDetails, AccordionSummary, Box, useTheme } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import Item from "@atoms/StyledPaperItem";
import ElementSpecificSettingsForm from "@molecules/ElementSpecificSettingsForm";
import ElementSpecificStylesForm from "../ElementSpecificStylesForm";
import { useInput } from "@/hooks/useSpecificStylesFormHook";

const ElementSpecificSettings = () => {
  const newImp = useInput("");
  const r = newImp.r;
  const w = newImp.w;
  const theme = useTheme();

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleAccordionChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box>
      <Item sx={{ background: theme.custom.colorGray, color: theme.custom.colorWhiteGray }}>
        Current element: <br /> {`Row ${r}`} {`Column ${w}`}
      </Item>

      <Accordion
        expanded={expanded === "config"}
        onChange={handleAccordionChange("config")}
        sx={{ background: theme.custom.colorGray, color: theme.custom.colorWhiteGray }}
      >
        <AccordionSummary expandIcon={<ExpandMore />}>Configuration Settings</AccordionSummary>
        <AccordionDetails>
          <ElementSpecificSettingsForm />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "style"}
        onChange={handleAccordionChange("style")}
        sx={{ background: theme.custom.colorGray, color: theme.custom.colorWhiteGray }}
      >
        <AccordionSummary expandIcon={<ExpandMore />}>Style Settings</AccordionSummary>
        <AccordionDetails>
          <ElementSpecificStylesForm></ElementSpecificStylesForm>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export const MemoizedElementSettings = memo(ElementSpecificSettings);
